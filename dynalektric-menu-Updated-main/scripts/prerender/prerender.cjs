/**
 * scripts/prerender/prerender.cjs
 * Puppeteer-based static site generator for Dynalektric pages.
 */

const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT_DIR = path.resolve(__dirname, "../../");
const PUBLIC_DIR = path.join(ROOT_DIR, "public");
const OUTPUT_DIR = path.join(ROOT_DIR, "dist");
const PORT = 4173;
const modeArg = process.argv.find((arg) => arg.startsWith("--mode="))?.split("=")[1] || process.argv[2];
const BUILD_MODE = modeArg || process.env.BUILD_MODE || "staging";

// Step 0: Compile JSX source to browser-ready JavaScript before prerendering.
console.log("Compiling JSX to JavaScript (esbuild)...");
require("../build/build-js.cjs");

const robotsValue =
  BUILD_MODE === "production"
    ? "index, follow"
    : "noindex, nofollow";

const pages = [
  "index.html",
  "about.html",
  "products-solutions.html",
  "innovation-rd.html",
  "industries-applications.html",
  "export.html",
  "contact.html",
];

const mimeTypes = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".jsx": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".mp4": "video/mp4",
  ".xml": "application/xml",
  ".txt": "text/plain",
  ".pdf": "application/pdf",
};

const server = http.createServer((req, res) => {
  let requestPath = decodeURIComponent(req.url.split("?")[0]);

  if (requestPath === "/") {
    requestPath = "/index.html";
  }

  const candidatePaths = [
    path.join(PUBLIC_DIR, requestPath),
    path.join(ROOT_DIR, "src/styles", requestPath),
    path.join(ROOT_DIR, "src/components/media", requestPath),
    path.join(ROOT_DIR, "build", requestPath),
    path.join(ROOT_DIR, requestPath),
  ];

  let filePath = null;
  for (const cand of candidatePaths) {
    if (fs.existsSync(cand) && fs.statSync(cand).isFile()) {
      filePath = cand;
      break;
    }
  }

  if (!filePath) {
    console.log(`[prerender-server] 404 Not Found: ${req.url}`);
    res.writeHead(404);
    res.end("Not Found");
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      console.log(`[prerender-server] 500 Error: ${req.url}`);
      res.writeHead(500);
      res.end("Server Error");
      return;
    }

    const extension = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[extension] || "application/octet-stream";

    res.writeHead(200, { "Content-Type": contentType });
    res.end(content);
  });
});

async function prerender() {
  let browser;
  fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  // 1. Copy public/ directory contents to dist/
  if (fs.existsSync(PUBLIC_DIR)) {
    fs.cpSync(PUBLIC_DIR, OUTPUT_DIR, { recursive: true });
  }

  // 2. Copy build/ to dist/build/
  const buildDir = path.join(ROOT_DIR, 'build');
  if (fs.existsSync(buildDir)) {
    fs.cpSync(buildDir, path.join(OUTPUT_DIR, 'build'), { recursive: true });
  }

  // 3. Copy src/styles/ CSS files to dist/
  const stylesDir = path.join(ROOT_DIR, 'src/styles');
  if (fs.existsSync(stylesDir)) {
    const cssFiles = fs.readdirSync(stylesDir).filter(f => f.endsWith('.css'));
    for (const cssFile of cssFiles) {
      fs.copyFileSync(path.join(stylesDir, cssFile), path.join(OUTPUT_DIR, cssFile));
    }
  }

  // 4. Copy image-slot.js to dist/
  const imageSlotSrc = path.join(ROOT_DIR, 'src/components/media/image-slot.js');
  if (fs.existsSync(imageSlotSrc)) {
    fs.copyFileSync(imageSlotSrc, path.join(OUTPUT_DIR, 'image-slot.js'));
  }

  console.log("Static assets copied to dist.");
  console.log(`Build mode: ${BUILD_MODE}`);
  console.log(`Robots directive: ${robotsValue}`);

  const robotsContent =
    BUILD_MODE === "production"
      ? `User-agent: *
Allow: /

Sitemap: https://dynalektric.com/sitemap.xml
`
      : `User-agent: *
Disallow: /
`;

  fs.writeFileSync(
    path.join(OUTPUT_DIR, "robots.txt"),
    robotsContent,
    "utf8"
  );

  console.log(`robots.txt generated for ${BUILD_MODE}.`);

  try {
    await new Promise((resolve) => {
      server.listen(PORT, "127.0.0.1", resolve);
    });

    console.log(`Local server running at http://127.0.0.1:${PORT}`);

    let puppeteer;
    let launchOptions = {
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
    };

    if (process.env.VERCEL) {
      // Vercel's build container is missing NSS shared libs (libnspr4.so, etc.)
      // that Google's Chrome for Testing binary needs, so use @sparticuz/chromium
      // instead — a Chromium build compiled for serverless containers.
      puppeteer = require("puppeteer-core");
      const chromiumModule = require("@sparticuz/chromium");
      const chromium = chromiumModule.default || chromiumModule;
      launchOptions.args = chromium.args;
      launchOptions.executablePath = await chromium.executablePath();
    } else {
      puppeteer = require("puppeteer");
    }

    browser = await puppeteer.launch(launchOptions);

    for (const pageFile of pages) {
      const pageUrl = `http://127.0.0.1:${PORT}/${pageFile}`;

      console.log(`Rendering ${pageFile}...`);

      const page = await browser.newPage();

      page.on("console", (message) => {
        if (message.type() === "error") {
          console.error(`[${pageFile}] Browser error: ${message.text()}`);
        }
      });

      page.on("pageerror", (error) => {
        console.error(`[${pageFile}] Page error: ${error.message}`);
      });

      await page.goto(pageUrl, {
        waitUntil: "networkidle0",
        timeout: 120000,
      });

      await page.waitForSelector("#app h1, #app h2", {
        timeout: 30000,
      });

      const renderedHtml = await page.content();
      const finalHtml = renderedHtml.replace(
        /<meta name="robots" content="[^"]*"\s*\/?>/i,
        `<meta name="robots" content="${robotsValue}" />`
      );

      fs.writeFileSync(
        path.join(OUTPUT_DIR, pageFile),
        finalHtml,
        "utf8"
      );

      console.log(`Prerendered ${pageFile}`);
      await page.close();
    }

    console.log("All Dynalektric pages prerendered successfully.");
  } catch (error) {
    console.warn("⚠️ [prerender] Puppeteer rendering skipped or failed (using static HTML fallback):", error.message);
  } finally {
    if (browser) {
      await browser.close();
    }
    server.close();
  }
}

prerender();
