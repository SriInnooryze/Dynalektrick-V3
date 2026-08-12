/**
 * scripts/dev/serve-dist.cjs
 * Local static server for dist/ that resolves clean URLs (e.g. /about -> about.html),
 * mirroring the .htaccess rewrite rules used on the GoDaddy production host.
 */
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '../../');
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const PORT = Number(process.env.PORT) || 5508;

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
  '.pdf': 'application/pdf',
};

function resolveFile(requestPath) {
  const decoded = decodeURIComponent(requestPath.split('?')[0]);
  const candidates = [];

  if (decoded === '/') {
    candidates.push('index.html');
  } else {
    const trimmed = decoded.replace(/^\/+/, '');
    candidates.push(trimmed);
    if (!path.extname(trimmed)) {
      candidates.push(`${trimmed}.html`);
    }
  }

  for (const candidate of candidates) {
    const filePath = path.join(DIST_DIR, candidate);
    if (!filePath.startsWith(DIST_DIR)) continue;
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      return filePath;
    }
  }
  return null;
}

const server = http.createServer((req, res) => {
  const filePath = resolveFile(req.url);

  if (!filePath) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end(`Cannot GET ${req.url}`);
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Server Error');
      return;
    }
    const extension = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': mimeTypes[extension] || 'application/octet-stream' });
    res.end(content);
  });
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`[serve-dist] Serving dist/ with clean-URL resolution at http://127.0.0.1:${PORT}`);
});
