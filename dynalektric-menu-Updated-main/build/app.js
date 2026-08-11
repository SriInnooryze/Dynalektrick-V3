(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };

  // src/config/site.js
  var init_site = __esm({
    "src/config/site.js"() {
    }
  });

  // src/config/seo.js
  var init_seo = __esm({
    "src/config/seo.js"() {
    }
  });

  // src/config/constants/colors.js
  var ACCENT_OPTIONS;
  var init_colors = __esm({
    "src/config/constants/colors.js"() {
      ACCENT_OPTIONS = [
        ["#0077B6", "#003366"],
        // ocean blue + deep navy (default)
        ["#003366", "#0077B6"],
        // deep navy led
        ["#002A52", "#0077B6"],
        // ink navy + ocean blue
        ["#005F92", "#003366"]
        // hover blue + deep navy
      ];
    }
  });

  // src/config/constants/routes.js
  var PAGE_URLS;
  var init_routes = __esm({
    "src/config/constants/routes.js"() {
      PAGE_URLS = {
        home: "./index.html",
        about: "./about.html",
        products: "./products-solutions.html",
        rnd: "./innovation-rd.html",
        industries: "./industries-applications.html",
        export: "./export.html",
        contact: "./contact.html"
      };
    }
  });

  // src/config/constants/breakpoints.js
  var init_breakpoints = __esm({
    "src/config/constants/breakpoints.js"() {
    }
  });

  // src/config/constants/pages.js
  var TWEAK_DEFAULTS;
  var init_pages = __esm({
    "src/config/constants/pages.js"() {
      TWEAK_DEFAULTS = {
        accent: 0,
        typography: "sohne",
        heroVariant: 0,
        texture: "clean",
        density: "comfortable"
      };
    }
  });

  // src/config/constants/index.js
  var init_constants = __esm({
    "src/config/constants/index.js"() {
      init_colors();
      init_routes();
      init_breakpoints();
      init_pages();
    }
  });

  // src/config/index.js
  var init_config = __esm({
    "src/config/index.js"() {
      init_site();
      init_seo();
      init_constants();
    }
  });

  // src/hooks/useTweaks.js
  function useTweaks(defaults) {
    const [values, setValues] = React.useState(defaults);
    const set = React.useCallback((key, val) => {
      setValues((prev) => __spreadProps(__spreadValues({}, prev), { [key]: val }));
    }, []);
    return { values, set };
  }
  var init_useTweaks = __esm({
    "src/hooks/useTweaks.js"() {
    }
  });

  // src/components/layout/Header.jsx
  function Header() {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const currentPage = document.body.dataset.page || "home";
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("header", { className: "topbar", role: "banner" }, /* @__PURE__ */ React.createElement("div", { className: "topbar-inner" }, /* @__PURE__ */ React.createElement("a", { className: "topbar-logo", href: "./index.html", "aria-label": "Dynalektric home" }, /* @__PURE__ */ React.createElement("img", { src: window.__resources && window.__resources.dynaLogo || "assets/dynalektric-logo.png", alt: "Dynalektric, Power Motion Safety", width: "350", height: "150", decoding: "async" })), /* @__PURE__ */ React.createElement("nav", { className: "topbar-nav", "aria-label": "Main navigation" }, NAV_LINKS.map((n) => /* @__PURE__ */ React.createElement(
      "a",
      {
        key: n.id,
        className: "nav-link",
        href: n.href,
        "aria-current": currentPage === n.id ? "page" : void 0
      },
      n.label
    ))), /* @__PURE__ */ React.createElement("div", { className: "topbar-cta" }, /* @__PURE__ */ React.createElement("a", { className: "btn btn-primary", href: "./contact.html", "aria-label": "Submit RFQ on contact page" }, "Submit RFQ ", /* @__PURE__ */ React.createElement("span", { className: "arrow", "aria-hidden": "true" }, "\u2192")), /* @__PURE__ */ React.createElement("button", { className: "menu-btn", onClick: () => setDrawerOpen(true), "aria-label": "Open menu" }, "Menu")))), /* @__PURE__ */ React.createElement("div", { className: `mobile-drawer ${drawerOpen ? "is-open" : ""}`, role: "dialog", "aria-label": "Mobile navigation", "aria-hidden": !drawerOpen }, /* @__PURE__ */ React.createElement("button", { className: "menu-btn close-btn", onClick: () => setDrawerOpen(false), "aria-label": "Close menu" }, "Close"), NAV_LINKS.map((n) => /* @__PURE__ */ React.createElement(
      "a",
      {
        key: n.id,
        className: "nav-link",
        href: n.href,
        "aria-current": currentPage === n.id ? "page" : void 0
      },
      n.label
    )), /* @__PURE__ */ React.createElement("a", { className: "btn btn-primary", href: "./contact.html", style: { marginTop: 24, alignSelf: "flex-start" } }, "Submit RFQ ", /* @__PURE__ */ React.createElement("span", { className: "arrow", "aria-hidden": "true" }, "\u2192"))));
  }
  var NAV_LINKS, Header_default;
  var init_Header = __esm({
    "src/components/layout/Header.jsx"() {
      NAV_LINKS = [
        { id: "home", label: "Home", href: "./index.html" },
        { id: "about", label: "About", href: "./about.html" },
        { id: "products", label: "Products & Solutions", href: "./products-solutions.html" },
        { id: "rnd", label: "Innovation Portfolio", href: "./innovation-rd.html" },
        { id: "industries", label: "Industries & Applications", href: "./industries-applications.html" },
        { id: "export", label: "Export", href: "./export.html" },
        { id: "contact", label: "Contact", href: "./contact.html" }
      ];
      window.Header = Header;
      Header_default = Header;
    }
  });

  // src/components/layout/TweaksPanel.jsx
  function useTweaks2(defaults) {
    const [t, setT] = React.useState(defaults);
    const setTweak = React.useCallback((key, value) => {
      setT((prev) => __spreadProps(__spreadValues({}, prev), { [key]: value }));
    }, []);
    return [t, setTweak];
  }
  function TweaksPanel({ title = "Tweaks", children }) {
    const [open, setOpen] = React.useState(() => {
      try {
        const saved = localStorage.getItem("__twk_open");
        return saved !== null ? JSON.parse(saved) : false;
      } catch (e) {
        return false;
      }
    });
    const handleClose = React.useCallback(() => {
      setOpen(false);
      try {
        localStorage.setItem("__twk_open", "false");
      } catch (e) {
      }
    }, []);
    React.useEffect(() => {
      if (!document.getElementById("__twk-style")) {
        const el = document.createElement("style");
        el.id = "__twk-style";
        el.textContent = __TWEAKS_STYLE;
        document.head.appendChild(el);
      }
    }, []);
    if (!open) return null;
    return /* @__PURE__ */ React.createElement("div", { className: "twk-panel", role: "region", "aria-label": title }, /* @__PURE__ */ React.createElement("div", { className: "twk-hd" }, /* @__PURE__ */ React.createElement("b", null, title), /* @__PURE__ */ React.createElement("button", { className: "twk-x", onClick: handleClose, title: "Close tweaks" }, "\xD7")), /* @__PURE__ */ React.createElement("div", { className: "twk-body" }, children));
  }
  function TweakSection({ title, children }) {
    return /* @__PURE__ */ React.createElement("div", { className: "twk-sect" }, title && /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 6 } }, title), children);
  }
  function TweakRow({ label, value, children }) {
    return /* @__PURE__ */ React.createElement("div", { className: "twk-row" }, /* @__PURE__ */ React.createElement("div", { className: "twk-lbl" }, /* @__PURE__ */ React.createElement("span", null, label), value !== void 0 && /* @__PURE__ */ React.createElement("span", { className: "twk-val" }, value)), children);
  }
  function TweakSlider({ label, value, min = 0, max = 100, step = 1, unit = "", onChange }) {
    return /* @__PURE__ */ React.createElement(TweakRow, { label, value: `${value}${unit}` }, /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "range",
        className: "twk-slider",
        min,
        max,
        step,
        value,
        onChange: (e) => onChange(Number(e.target.value))
      }
    ));
  }
  function TweakToggle({ label, value, onChange }) {
    return /* @__PURE__ */ React.createElement("div", { className: "twk-row twk-row-h" }, /* @__PURE__ */ React.createElement("div", { className: "twk-lbl" }, /* @__PURE__ */ React.createElement("span", null, label)), /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "twk-toggle",
        "data-on": value ? "1" : "0",
        onClick: () => onChange(!value)
      },
      /* @__PURE__ */ React.createElement("div", { className: "twk-toggle-knob" })
    ));
  }
  function TweakRadio({ label, value, options, onChange }) {
    const containerRef = React.useRef(null);
    const [thumbStyle, setThumbStyle] = React.useState({});
    React.useEffect(() => {
      if (!containerRef.current) return;
      const activeBtn = containerRef.current.querySelector('[data-on="1"]');
      if (activeBtn) {
        setThumbStyle({
          width: `${activeBtn.offsetWidth}px`,
          transform: `translateX(${activeBtn.offsetLeft}px)`
        });
      }
    }, [value, options]);
    return /* @__PURE__ */ React.createElement(TweakRow, { label }, /* @__PURE__ */ React.createElement("div", { className: "twk-seg", ref: containerRef }, /* @__PURE__ */ React.createElement("div", { className: "twk-seg-thumb", style: thumbStyle }), options.map((opt) => {
      const val = typeof opt === "object" ? opt.value : opt;
      const lbl = typeof opt === "object" ? opt.label : opt;
      const on = value === val;
      return /* @__PURE__ */ React.createElement(
        "button",
        {
          key: val,
          type: "button",
          className: "twk-seg-btn",
          "data-on": on ? "1" : "0",
          onClick: () => onChange(val)
        },
        lbl
      );
    })));
  }
  function TweakSelect({ label, value, options, onChange }) {
    return /* @__PURE__ */ React.createElement(TweakRow, { label }, /* @__PURE__ */ React.createElement(
      "select",
      {
        className: "twk-field",
        value,
        onChange: (e) => onChange(e.target.value)
      },
      options.map((opt) => {
        const val = typeof opt === "object" ? opt.value : opt;
        const lbl = typeof opt === "object" ? opt.label : opt;
        return /* @__PURE__ */ React.createElement("option", { key: val, value: val }, lbl);
      })
    ));
  }
  function TweakText({ label, value, onChange }) {
    return /* @__PURE__ */ React.createElement(TweakRow, { label }, /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "text",
        className: "twk-field",
        value,
        onChange: (e) => onChange(e.target.value)
      }
    ));
  }
  function TweakNumber({ label, value, onChange }) {
    return /* @__PURE__ */ React.createElement(TweakRow, { label }, /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "number",
        className: "twk-field",
        value,
        onChange: (e) => onChange(Number(e.target.value))
      }
    ));
  }
  function __twkIsLight(color) {
    if (!color || typeof color !== "string") return true;
    const hex = color.replace("#", "");
    if (hex.length !== 6) return true;
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return (r * 299 + g * 587 + b * 114) / 1e3 > 155;
  }
  function TweakColor({ label, value, options, onChange }) {
    if (!options || !options.length) {
      return /* @__PURE__ */ React.createElement("div", { className: "twk-row twk-row-h" }, /* @__PURE__ */ React.createElement("div", { className: "twk-lbl" }, /* @__PURE__ */ React.createElement("span", null, label)), /* @__PURE__ */ React.createElement(
        "input",
        {
          type: "color",
          className: "twk-swatch",
          value,
          onChange: (e) => onChange(e.target.value)
        }
      ));
    }
    const key = (o) => String(JSON.stringify(o)).toLowerCase();
    const cur = key(value);
    return /* @__PURE__ */ React.createElement(TweakRow, { label }, /* @__PURE__ */ React.createElement("div", { className: "twk-chips", role: "radiogroup" }, options.map((o, i) => {
      const colors = Array.isArray(o) ? o : [o];
      const [hero, ...rest] = colors;
      const sup = rest.slice(0, 4);
      const on = key(o) === cur;
      return /* @__PURE__ */ React.createElement(
        "button",
        {
          key: i,
          type: "button",
          className: "twk-chip",
          role: "radio",
          "aria-checked": on,
          "data-on": on ? "1" : "0",
          "aria-label": colors.join(", "),
          title: colors.join(" \xB7 "),
          style: { background: hero },
          onClick: () => onChange(o)
        },
        sup.length > 0 && /* @__PURE__ */ React.createElement("span", null, sup.map((c, j) => /* @__PURE__ */ React.createElement("i", { key: j, style: { background: c } }))),
        on && /* @__PURE__ */ React.createElement(__TwkCheck, { light: __twkIsLight(hero) })
      );
    })));
  }
  function TweakButton({ label, onClick, secondary = false }) {
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        className: secondary ? "twk-btn secondary" : "twk-btn",
        onClick
      },
      label
    );
  }
  var __TWEAKS_STYLE, __TwkCheck, TweaksPanel_default;
  var init_TweaksPanel = __esm({
    "src/components/layout/TweaksPanel.jsx"() {
      __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;width:100%;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);gap:2px}
  .twk-seg-btn{position:relative;z-index:1;flex:1;height:22px;padding:0 6px;
    border:0;background:transparent;color:rgba(41,38,27,.65);
    font:inherit;font-size:11px;font-weight:500;border-radius:6px;
    cursor:default;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
    transition:color .12s ease}
  .twk-seg-btn[data-on="1"]{color:#29261b;font-weight:600}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;left:0;width:0;
    background:#fff;border-radius:6px;
    box-shadow:0 1px 3px rgba(0,0,0,.12),0 0.5px 0 rgba(0,0,0,.06);
    transition:transform .16s cubic-bezier(.2,0,0,1),width .16s cubic-bezier(.2,0,0,1)}

  .twk-toggle{position:relative;display:inline-flex;align-items:center;
    width:36px;height:22px;padding:2px;border-radius:999px;
    background:rgba(0,0,0,.15);cursor:default;transition:background .16s ease}
  .twk-toggle[data-on="1"]{background:#29261b}
  .twk-toggle-knob{width:18px;height:18px;border-radius:50%;background:#fff;
    box-shadow:0 1px 3px rgba(0,0,0,.2);transition:transform .16s cubic-bezier(.2,0,0,1)}
  .twk-toggle[data-on="1"] .twk-toggle-knob{transform:translateX(14px)}

  .twk-swatch{appearance:none;border:0;width:24px;height:24px;border-radius:50%;
    padding:0;cursor:default;background:none}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:.5px solid rgba(0,0,0,.2);border-radius:50%;
    box-shadow:0 1px 3px rgba(0,0,0,.15)}
  .twk-swatch::-moz-color-swatch{border:.5px solid rgba(0,0,0,.2);border-radius:50%;
    box-shadow:0 1px 3px rgba(0,0,0,.15)}

  .twk-chips{display:grid;grid-template-columns:repeat(4,1fr);gap:6px}
  .twk-chip{position:relative;height:32px;border-radius:8px;padding:0;
    border:1px solid rgba(0,0,0,.12);cursor:default;overflow:hidden;
    box-shadow:0 1px 2px rgba(0,0,0,.06);display:flex;align-items:center;
    justify-content:center;transition:transform .1s ease,border-color .1s ease}
  .twk-chip:hover{transform:translateY(-1px)}
  .twk-chip[data-on="1"]{border-color:#29261b;box-shadow:0 0 0 1.5px #29261b}
  .twk-chip>span{position:absolute;top:0;right:0;bottom:0;width:38%;
    display:flex;flex-direction:column}
  .twk-chip>span>i{flex:1;display:block}
  .twk-chip svg{width:12px;height:12px;position:relative;z-index:2;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.2))}

  .twk-btn{appearance:none;border:0;height:28px;padding:0 12px;border-radius:7px;
    background:#29261b;color:#fff;font:inherit;font-weight:500;cursor:default;
    display:inline-flex;align-items:center;justify-content:center;gap:6px;
    box-shadow:0 1px 2px rgba(0,0,0,.12)}
  .twk-btn:hover{background:#3d392a}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:#29261b;box-shadow:none}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}
`;
      __TwkCheck = ({ light }) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 14 14", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement(
        "path",
        {
          d: "M3 7.2 5.8 10 11 4.2",
          fill: "none",
          strokeWidth: "2.2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          stroke: light ? "rgba(0,0,0,.78)" : "#fff"
        }
      ));
      Object.assign(window, {
        useTweaks: useTweaks2,
        TweaksPanel,
        TweakSection,
        TweakRow,
        TweakSlider,
        TweakToggle,
        TweakRadio,
        TweakSelect,
        TweakText,
        TweakNumber,
        TweakColor,
        TweakButton
      });
      TweaksPanel_default = TweaksPanel;
    }
  });

  // src/pages/Home/index.jsx
  function FlipCard({ cap, navigate }) {
    const [flipped, setFlipped] = React.useState(false);
    const frontBtnRef = React.useRef(null);
    const backBtnRef = React.useRef(null);
    React.useEffect(() => {
      if (flipped) {
        backBtnRef.current && backBtnRef.current.focus();
      }
    }, [flipped]);
    return /* @__PURE__ */ React.createElement("div", { className: "capcar-card" }, /* @__PURE__ */ React.createElement("div", { className: "flip-inner", "data-flipped": flipped }, /* @__PURE__ */ React.createElement("div", { className: "flip-face flip-front", "aria-hidden": flipped, inert: flipped ? "" : void 0 }, /* @__PURE__ */ React.createElement(
      "image-slot",
      {
        id: `home-${cap.slotId}`,
        src: window.__resources && window.__resources[cap.resKey] || cap.img,
        fit: "cover",
        position: cap.imgPosition || "50% 50%",
        placeholder: cap.imgPlaceholder,
        "aria-label": cap.imgAlt,
        shape: "rect",
        loading: "lazy"
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "flip-front-scrim" }), /* @__PURE__ */ React.createElement("div", { className: "flip-front-top" }, /* @__PURE__ */ React.createElement("span", { className: "flip-front-num" }, cap.num, " / 04"), /* @__PURE__ */ React.createElement("span", { className: "flip-front-ind" }, /* @__PURE__ */ React.createElement("span", { className: "pulse" }), "Capability")), /* @__PURE__ */ React.createElement("div", { className: "flip-front-foot" }, /* @__PURE__ */ React.createElement("h3", null, cap.title), /* @__PURE__ */ React.createElement(
      "button",
      {
        ref: frontBtnRef,
        type: "button",
        className: "flip-trigger",
        "aria-expanded": flipped,
        "aria-label": `Show details for ${cap.title}`,
        onClick: () => setFlipped(true)
      },
      "Click to explore ",
      /* @__PURE__ */ React.createElement("span", { className: "arrow" }, "\u21BB")
    ))), /* @__PURE__ */ React.createElement("div", { className: "flip-face flip-back", "aria-hidden": !flipped, inert: !flipped ? "" : void 0 }, /* @__PURE__ */ React.createElement("span", { className: "flip-back-num" }, cap.num, " / 04"), /* @__PURE__ */ React.createElement("div", { className: "flip-back-title" }, cap.title), /* @__PURE__ */ React.createElement("p", { className: "flip-back-text" }, cap.back), /* @__PURE__ */ React.createElement("div", { className: "flip-back-labels" }, cap.labels.map((l) => /* @__PURE__ */ React.createElement("span", { className: "lbl", key: l }, l))), /* @__PURE__ */ React.createElement("div", { className: "flip-back-foot" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        className: "flip-cta",
        onClick: () => navigate("products", cap.productId)
      },
      cap.cta,
      " ",
      /* @__PURE__ */ React.createElement("span", { className: "arrow" }, "\u2192")
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        ref: backBtnRef,
        type: "button",
        className: "flip-flipback",
        "aria-label": `Show image for ${cap.title}`,
        onClick: () => {
          setFlipped(false);
          frontBtnRef.current && frontBtnRef.current.focus();
        }
      },
      /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true" }, "\u2190"),
      " Back"
    )))));
  }
  function CapabilityCarousel({ navigate }) {
    const total = CAPABILITIES.length;
    const [index, setIndex] = React.useState(0);
    const [perPage, setPerPage] = React.useState(2);
    const trackRef = React.useRef(null);
    const [tx, setTx] = React.useState(0);
    React.useEffect(() => {
      const compute = () => {
        const w = window.innerWidth;
        if (w <= 720) setPerPage(0);
        else if (w <= 1080) setPerPage(1);
        else setPerPage(2);
      };
      compute();
      window.addEventListener("resize", compute);
      return () => window.removeEventListener("resize", compute);
    }, []);
    const maxIndex = perPage === 0 ? 0 : Math.max(0, total - perPage);
    React.useEffect(() => {
      setIndex((i) => Math.min(i, maxIndex));
    }, [maxIndex]);
    React.useEffect(() => {
      const measure = () => {
        const track = trackRef.current;
        if (!track || perPage === 0) {
          setTx(0);
          return;
        }
        const card = track.children[0];
        if (!card) return;
        const styles = window.getComputedStyle(track);
        const gap = parseFloat(styles.columnGap || styles.gap || "0") || 0;
        const step = card.getBoundingClientRect().width + gap;
        setTx(-(index * step));
      };
      measure();
      window.addEventListener("resize", measure);
      return () => window.removeEventListener("resize", measure);
    }, [index, perPage]);
    const stacked = perPage === 0;
    const atStart = index <= 0;
    const atEnd = index >= maxIndex;
    return /* @__PURE__ */ React.createElement("div", { className: "capcar" }, /* @__PURE__ */ React.createElement("div", { className: "capcar-viewport" }, /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "capcar-track",
        ref: trackRef,
        style: { transform: stacked ? "none" : `translateX(${tx}px)` }
      },
      CAPABILITIES.map((cap) => /* @__PURE__ */ React.createElement(FlipCard, { key: cap.productId, cap, navigate }))
    )), /* @__PURE__ */ React.createElement("div", { className: "capcar-controls" }, /* @__PURE__ */ React.createElement("div", { className: "capcar-arrows" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        className: "capcar-arrow",
        "aria-label": "Previous capability",
        disabled: atStart,
        onClick: () => setIndex((i) => Math.max(0, i - 1))
      },
      /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6" }, /* @__PURE__ */ React.createElement("path", { d: "M15 5l-7 7 7 7", strokeLinecap: "round", strokeLinejoin: "round" }))
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        className: "capcar-arrow",
        "aria-label": "Next capability",
        disabled: atEnd,
        onClick: () => setIndex((i) => Math.min(maxIndex, i + 1))
      },
      /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6" }, /* @__PURE__ */ React.createElement("path", { d: "M9 5l7 7-7 7", strokeLinecap: "round", strokeLinejoin: "round" }))
    )), /* @__PURE__ */ React.createElement("div", { className: "capcar-count", "aria-live": "polite" }, /* @__PURE__ */ React.createElement("b", null, String(index + 1).padStart(2, "0")), " / ", String(total).padStart(2, "0")), /* @__PURE__ */ React.createElement("div", { className: "capcar-foot" }, /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost btn-ghost-text", onClick: () => navigate("products") }, "Explore all products and solutions ", /* @__PURE__ */ React.createElement("span", { className: "arrow" }, "\u2192")))));
  }
  function IndustryStage({ navigate }) {
    const total = HOME_INDUSTRIES.length;
    const [active, setActive] = React.useState(0);
    const [preview, setPreview] = React.useState(null);
    const tabRefs = React.useRef([]);
    const touch = React.useRef({ x: 0, y: 0 });
    const shown = preview != null ? preview : active;
    const ind = HOME_INDUSTRIES[shown];
    const select = (i) => {
      setActive(i);
      setPreview(null);
    };
    const go = (dir) => setActive((i) => {
      const n = i + dir;
      if (n < 0 || n > total - 1) return i;
      setPreview(null);
      return n;
    });
    const onRailKey = (e, i) => {
      let n = null;
      if (e.key === "ArrowDown" || e.key === "ArrowRight") n = Math.min(total - 1, i + 1);
      else if (e.key === "ArrowUp" || e.key === "ArrowLeft") n = Math.max(0, i - 1);
      else if (e.key === "Home") n = 0;
      else if (e.key === "End") n = total - 1;
      if (n != null) {
        e.preventDefault();
        select(n);
        const el = tabRefs.current[n];
        el && el.focus();
      }
    };
    const onTouchStart = (e) => {
      const t = e.changedTouches[0];
      touch.current = { x: t.clientX, y: t.clientY };
    };
    const onTouchEnd = (e) => {
      const t = e.changedTouches[0];
      const dx = t.clientX - touch.current.x;
      const dy = t.clientY - touch.current.y;
      if (Math.abs(dx) > 44 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1);
    };
    return /* @__PURE__ */ React.createElement("div", { className: "indstage" }, /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "indstage-main",
        onTouchStart,
        onTouchEnd
      },
      HOME_INDUSTRIES.map((it, i) => /* @__PURE__ */ React.createElement("div", { className: "indstage-img", "data-active": i === shown, "aria-hidden": i !== shown, key: it.id }, /* @__PURE__ */ React.createElement(
        "image-slot",
        {
          id: `home-ind-${it.id}`,
          src: window.__resources && window.__resources[it.resKey] || it.img,
          fit: "cover",
          position: "50% 50%",
          placeholder: it.placeholder,
          "aria-label": it.alt,
          shape: "rect",
          loading: "lazy"
        }
      ))),
      /* @__PURE__ */ React.createElement("div", { className: "indstage-scrim" }),
      /* @__PURE__ */ React.createElement("div", { className: "indstage-content", key: shown, role: "tabpanel", "aria-live": "polite" }, /* @__PURE__ */ React.createElement("span", { className: "indstage-num mono" }, ind.num, " / 06"), /* @__PURE__ */ React.createElement("h3", null, ind.name), /* @__PURE__ */ React.createElement("p", null, ind.desc), /* @__PURE__ */ React.createElement("div", { className: "indstage-labels" }, ind.labels.map((l) => /* @__PURE__ */ React.createElement("span", { className: "indstage-chip", key: l }, l))), /* @__PURE__ */ React.createElement(
        "button",
        {
          type: "button",
          className: "indstage-explore",
          onClick: () => navigate("industries", ind.id)
        },
        ind.cta,
        " ",
        /* @__PURE__ */ React.createElement("span", { className: "arrow" }, "\u2192")
      ))
    ), /* @__PURE__ */ React.createElement("div", { className: "indstage-rail", role: "tablist", "aria-label": "Select an industry" }, HOME_INDUSTRIES.map((it, i) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: it.id,
        type: "button",
        role: "tab",
        id: `indtab-${it.id}`,
        ref: (el) => tabRefs.current[i] = el,
        className: "ind-sel",
        "aria-selected": active === i,
        tabIndex: active === i ? 0 : -1,
        onClick: () => select(i),
        onKeyDown: (e) => onRailKey(e, i),
        onMouseEnter: () => setPreview(i),
        onMouseLeave: () => setPreview(null)
      },
      /* @__PURE__ */ React.createElement("span", { className: "ind-sel-bar", "aria-hidden": "true" }),
      /* @__PURE__ */ React.createElement("span", { className: "num" }, it.num),
      /* @__PURE__ */ React.createElement("span", { className: "nm" }, it.name)
    ))), /* @__PURE__ */ React.createElement("div", { className: "indstage-controls" }, /* @__PURE__ */ React.createElement("div", { className: "indstage-arrows" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        className: "indstage-arrow",
        "aria-label": "Previous industry",
        disabled: active <= 0,
        onClick: () => go(-1)
      },
      /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6" }, /* @__PURE__ */ React.createElement("path", { d: "M15 5l-7 7 7 7", strokeLinecap: "round", strokeLinejoin: "round" }))
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        className: "indstage-arrow",
        "aria-label": "Next industry",
        disabled: active >= total - 1,
        onClick: () => go(1)
      },
      /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6" }, /* @__PURE__ */ React.createElement("path", { d: "M9 5l7 7-7 7", strokeLinecap: "round", strokeLinejoin: "round" }))
    )), /* @__PURE__ */ React.createElement("div", { className: "indstage-count", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("b", null, String(active + 1).padStart(2, "0")), " / ", String(total).padStart(2, "0")), /* @__PURE__ */ React.createElement("div", { className: "indstage-foot" }, /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost indstage-allbtn", onClick: () => navigate("industries") }, "Explore All Industries and Applications \u2192"))));
  }
  function HeroVideo({ navigate }) {
    const [playing, setPlaying] = React.useState(true);
    const videoRef = React.useRef(null);
    React.useEffect(() => {
      const mq = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");
      const video = videoRef.current;
      const applyMotionPreference = () => {
        if (!video || !mq) return;
        if (mq.matches) {
          video.pause();
          setPlaying(false);
        } else {
          video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
        }
      };
      applyMotionPreference();
      if (mq && typeof mq.addEventListener === "function") {
        mq.addEventListener("change", applyMotionPreference);
        return () => mq.removeEventListener("change", applyMotionPreference);
      }
      if (mq && typeof mq.addListener === "function") {
        mq.addListener(applyMotionPreference);
        return () => mq.removeListener(applyMotionPreference);
      }
    }, []);
    const toggleVideo = async () => {
      const video = videoRef.current;
      if (!video) return;
      try {
        if (video.paused) {
          await video.play();
          setPlaying(true);
        } else {
          video.pause();
          setPlaying(false);
        }
      } catch (error) {
        console.error("Unable to control hero video:", error);
        setPlaying(false);
      }
    };
    return /* @__PURE__ */ React.createElement("section", { className: "hero-video", "data-playing": playing, "aria-label": "Dynalektric engineering and manufacturing" }, /* @__PURE__ */ React.createElement("div", { className: "hero-video-media" }, /* @__PURE__ */ React.createElement(
      "video",
      {
        ref: videoRef,
        className: "hero-video-element",
        autoPlay: true,
        muted: true,
        loop: true,
        playsInline: true,
        preload: "metadata",
        poster: window.__resources && window.__resources.heroPoster || "assets/hero-poster-optimized.png",
        "aria-label": "Dynalektric factory, engineering and manufacturing",
        onPlay: () => setPlaying(true),
        onPause: () => setPlaying(false),
        onError: (event) => {
          console.error("Hero video failed to load:", event.currentTarget.currentSrc);
          setPlaying(false);
        },
        style: {
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          display: "block",
          objectFit: "cover",
          objectPosition: "center top"
        }
      },
      /* @__PURE__ */ React.createElement("source", { src: "./videos/Dynalektric_Hero.mp4", type: "video/mp4" }),
      "Your browser does not support background video."
    )), /* @__PURE__ */ React.createElement("div", { className: "hero-video-scrim" }), /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "hero-video-content" }, /* @__PURE__ */ React.createElement("div", { className: "hero-video-eyebrow mono" }, /* @__PURE__ */ React.createElement("span", { className: "hero-video-line", "aria-hidden": "true" }), "Engineered for industry"), /* @__PURE__ */ React.createElement("h1", null, "Engineering built for industrial progress."), /* @__PURE__ */ React.createElement("p", null, "In-house engineering, manufacturing and testing for infrastructure, mobility, energy and industrial applications."), /* @__PURE__ */ React.createElement("div", { className: "hero-video-actions" }, /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary", onClick: () => navigate("about") }, "Discover Dynalektric ", /* @__PURE__ */ React.createElement("span", { className: "arrow" }, "\u2192")), /* @__PURE__ */ React.createElement("button", { type: "button", className: "hero-video-link", onClick: () => navigate("contact") }, "Discuss Your Requirement ", /* @__PURE__ */ React.createElement("span", { className: "arrow" }, "\u2192"))))), /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        className: "hero-video-toggle",
        "aria-pressed": playing,
        "aria-label": playing ? "Pause background video" : "Play background video",
        onClick: toggleVideo
      },
      playing ? /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("rect", { x: "6.5", y: "5", width: "3.6", height: "14", rx: "1" }), /* @__PURE__ */ React.createElement("rect", { x: "13.9", y: "5", width: "3.6", height: "14", rx: "1" })) : /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("path", { d: "M8 5.5v13a1 1 0 0 0 1.54.84l10-6.5a1 1 0 0 0 0-1.68l-10-6.5A1 1 0 0 0 8 5.5z" }))
    ));
  }
  function OrgSection({ navigate }) {
    const caps = [
      { t: "In-house engineering", d: "Design, development and application review supported by cross-functional technical teams." },
      { t: "Manufacturing capability", d: "Structured production across magnetics, panels, power electronics and engineered assemblies." },
      { t: "Testing and documentation", d: "Inspection, validation and documentation aligned to product and project requirements." }
    ];
    const proof = [
      { k: "Since 2020", v: "Engineering and manufacturing" },
      { k: "In-house", v: "Design, production and testing" },
      { k: "Six sectors", v: "Industries supported" },
      { k: "Export ready", v: "Documentation and delivery" }
    ];
    return /* @__PURE__ */ React.createElement("section", { className: "section reveal org-section" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "org-split" }, /* @__PURE__ */ React.createElement("div", { className: "org-visual" }, /* @__PURE__ */ React.createElement(
      "image-slot",
      {
        id: "org-image",
        src: window.__resources && window.__resources.cardMagnetics || "assets/Hero-Home.png",
        fit: "cover",
        position: "50% 50%",
        placeholder: "Replace with a Dynalektric factory floor, engineering team or testing image",
        "aria-label": "Dynalektric manufacturing facility and production floor",
        shape: "rect",
        loading: "lazy"
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "org-body" }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "eyebrow-label" }, "Inside Dynalektric")), /* @__PURE__ */ React.createElement("h2", null, "The organisation behind every engineered solution."), /* @__PURE__ */ React.createElement("p", { className: "lead" }, "Dynalektric combines engineering teams, manufacturing capability, testing processes and application experience within one operating environment."), /* @__PURE__ */ React.createElement("ul", { className: "org-caps" }, caps.map((c) => /* @__PURE__ */ React.createElement("li", { key: c.t }, /* @__PURE__ */ React.createElement("h3", null, c.t), /* @__PURE__ */ React.createElement("p", null, c.d)))), /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost btn-ghost-text org-cta", onClick: () => navigate("about") }, "About Dynalektric ", /* @__PURE__ */ React.createElement("span", { className: "arrow" }, "\u2192")))), /* @__PURE__ */ React.createElement("div", { className: "org-proof", "aria-label": "Company credentials" }, proof.map((p) => /* @__PURE__ */ React.createElement("div", { className: "org-proof-item", key: p.k }, /* @__PURE__ */ React.createElement("div", { className: "mono num" }, p.k), /* @__PURE__ */ React.createElement("div", { className: "org-proof-label" }, p.v))))));
  }
  function FeaturedCases({ navigate }) {
    const total = FEATURED_CASES.length;
    const [idx, setIdx] = React.useState(0);
    const thumbRefs = React.useRef([]);
    const touch = React.useRef({ x: 0, y: 0 });
    const c = FEATURED_CASES[idx];
    const go = (dir) => setIdx((i) => (i + dir + total) % total);
    const onThumbKey = (e, i) => {
      let n = null;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") n = (i + 1) % total;
      else if (e.key === "ArrowLeft" || e.key === "ArrowUp") n = (i - 1 + total) % total;
      else if (e.key === "Home") n = 0;
      else if (e.key === "End") n = total - 1;
      if (n != null) {
        e.preventDefault();
        setIdx(n);
        const el = thumbRefs.current[n];
        el && el.focus();
      }
    };
    const onTouchStart = (e) => {
      const t = e.changedTouches[0];
      touch.current = { x: t.clientX, y: t.clientY };
    };
    const onTouchEnd = (e) => {
      const t = e.changedTouches[0];
      const dx = t.clientX - touch.current.x, dy = t.clientY - touch.current.y;
      if (Math.abs(dx) > 44 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1);
    };
    return /* @__PURE__ */ React.createElement("div", { className: "cases" }, /* @__PURE__ */ React.createElement("div", { className: "cases-stage" }, /* @__PURE__ */ React.createElement("div", { className: "case-visual", onTouchStart, onTouchEnd }, FEATURED_CASES.map((it, i) => /* @__PURE__ */ React.createElement("div", { className: "case-img", "data-active": i === idx, "aria-hidden": i !== idx, key: it.id }, /* @__PURE__ */ React.createElement(
      "image-slot",
      {
        id: `home-case-${it.id}`,
        src: window.__resources && window.__resources[it.resKey] || it.img,
        fit: "cover",
        position: "50% 50%",
        placeholder: it.placeholder,
        "aria-label": it.alt,
        shape: "rect",
        loading: "lazy"
      }
    ))), /* @__PURE__ */ React.createElement("div", { className: "case-img-scrim" }), /* @__PURE__ */ React.createElement("span", { className: "case-img-tag mono" }, "Representative application image")), /* @__PURE__ */ React.createElement("div", { className: "case-panel", key: idx }, /* @__PURE__ */ React.createElement("div", { className: "case-panel-top" }, /* @__PURE__ */ React.createElement("span", { className: "case-industry mono" }, c.industry), /* @__PURE__ */ React.createElement("span", { className: "case-count mono", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("b", null, String(idx + 1).padStart(2, "0")), " / ", String(total).padStart(2, "0"))), /* @__PURE__ */ React.createElement("h3", null, c.title), /* @__PURE__ */ React.createElement("div", { className: "case-row" }, /* @__PURE__ */ React.createElement("span", { className: "case-k mono" }, "Challenge"), /* @__PURE__ */ React.createElement("p", null, c.challenge)), /* @__PURE__ */ React.createElement("div", { className: "case-row" }, /* @__PURE__ */ React.createElement("span", { className: "case-k mono" }, "Dynalektric response"), /* @__PURE__ */ React.createElement("p", null, c.response)), /* @__PURE__ */ React.createElement("div", { className: "case-caps" }, c.capability.map((l) => /* @__PURE__ */ React.createElement("span", { className: "case-chip", key: l }, l))), /* @__PURE__ */ React.createElement("div", { className: "case-foot" }, /* @__PURE__ */ React.createElement("button", { type: "button", className: "case-readlink", onClick: () => navigate("industries", c.to) }, "View Application ", /* @__PURE__ */ React.createElement("span", { className: "arrow" }, "\u2192")), /* @__PURE__ */ React.createElement("div", { className: "case-arrows" }, /* @__PURE__ */ React.createElement("button", { type: "button", className: "case-arrow", "aria-label": "Previous case study", onClick: () => go(-1) }, /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6" }, /* @__PURE__ */ React.createElement("path", { d: "M15 5l-7 7 7 7", strokeLinecap: "round", strokeLinejoin: "round" }))), /* @__PURE__ */ React.createElement("button", { type: "button", className: "case-arrow", "aria-label": "Next case study", onClick: () => go(1) }, /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6" }, /* @__PURE__ */ React.createElement("path", { d: "M9 5l7 7-7 7", strokeLinecap: "round", strokeLinejoin: "round" }))))))), /* @__PURE__ */ React.createElement("div", { className: "case-thumbs", role: "tablist", "aria-label": "Select a case study" }, FEATURED_CASES.map((it, i) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: it.id,
        type: "button",
        role: "tab",
        ref: (el) => thumbRefs.current[i] = el,
        className: "case-thumb",
        "aria-selected": idx === i,
        tabIndex: idx === i ? 0 : -1,
        onClick: () => setIdx(i),
        onKeyDown: (e) => onThumbKey(e, i)
      },
      /* @__PURE__ */ React.createElement("span", { className: "case-thumb-num mono" }, String(i + 1).padStart(2, "0")),
      /* @__PURE__ */ React.createElement("span", { className: "case-thumb-name" }, it.industry)
    )), /* @__PURE__ */ React.createElement("p", { className: "case-note" }, "Customer names and project details are shown only where approved.")));
  }
  function PageHome({ navigate, tweaks }) {
    useReveal();
    return /* @__PURE__ */ React.createElement("main", { className: "page-enter home-main" }, /* @__PURE__ */ React.createElement(HeroVideo, { navigate }), /* @__PURE__ */ React.createElement(OrgSection, { navigate }), /* @__PURE__ */ React.createElement("section", { className: "section reveal" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "section-head" }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "eyebrow-label" }, "What we engineer")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Engineering systems that power, control and support industrial operations."), /* @__PURE__ */ React.createElement("p", { className: "lead", style: { marginTop: 16 } }, "Dynalektric combines engineering, manufacturing and testing across four core capability areas serving demanding industrial applications."))), /* @__PURE__ */ React.createElement(CapabilityCarousel, { navigate }))), /* @__PURE__ */ React.createElement("section", { className: "section reveal", style: { background: "var(--panel-dark)", color: "var(--on-dark)", margin: "0" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "section-head", style: { borderColor: "rgba(255,255,255,0.1)" } }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "eyebrow-label on-dark" }, "Industries & applications")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", { style: { color: "var(--bg)" } }, "Engineering capability applied across demanding industries."), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 16, fontSize: 15, color: "rgba(244,244,241,0.7)", maxWidth: "60ch" } }, "Dynalektric supports power, control and equipment applications across established infrastructure, mobility and industrial sectors."))), /* @__PURE__ */ React.createElement(IndustryStage, { navigate }))), /* @__PURE__ */ React.createElement("section", { className: "section reveal", style: { background: "var(--bg-alt)" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "rnd-teaser" }, /* @__PURE__ */ React.createElement("div", { className: "rnd-teaser-copy" }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow", style: { marginBottom: 24 } }, /* @__PURE__ */ React.createElement("span", { className: "eyebrow-label" }, "Engineering and NPD")), /* @__PURE__ */ React.createElement("h2", null, "Custom requirements engineered in-house."), /* @__PURE__ */ React.createElement("p", { className: "lead", style: { marginTop: 24 } }, "Our engineering and new product development teams take a customer specification through feasibility, design, prototyping, validation and pilot production. One team, one process."), /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost btn-ghost-text", style: { marginTop: 32 }, onClick: () => navigate("rnd") }, "View engineering capability ", /* @__PURE__ */ React.createElement("span", { className: "arrow" }, "\u2192"))), /* @__PURE__ */ React.createElement("div", { className: "rnd-teaser-visual" }, /* @__PURE__ */ React.createElement("div", { className: "rnd-teaser-figure" }, /* @__PURE__ */ React.createElement(
      "image-slot",
      {
        id: "home-engineering-npd",
        src: window.__resources && window.__resources.engineeringNpd || "assets/Eng-Bench-Cleared.png",
        fit: "contain",
        position: "center",
        placeholder: "Replace with a Dynalektric in-house engineering and assembly image",
        "aria-label": "Dynalektric engineers developing and assembling a custom electrical solution in-house",
        shape: "rect",
        loading: "lazy"
      }
    )))))), /* @__PURE__ */ React.createElement("section", { className: "section reveal" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "section-head" }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "eyebrow-label" }, "Standards and testing")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Type-tested designs, full documentation, traceable processes."), /* @__PURE__ */ React.createElement("p", { className: "lead", style: { marginTop: 16 } }, "Every product ships with routine and type test reports, QAP documentation and material traceability. Designs validated against IEC, IS and customer specifications."))), /* @__PURE__ */ React.createElement("div", { className: "standards-grid" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "mono", style: { marginBottom: 24, color: "var(--accent)", fontWeight: 600 } }, "Certifications and standards"), /* @__PURE__ */ React.createElement("div", { className: "cert-row" }, HOME_CERTIFICATIONS.map((c) => /* @__PURE__ */ React.createElement("div", { className: "cert-item", key: c.code }, /* @__PURE__ */ React.createElement("div", { className: "cert-code" }, c.code), /* @__PURE__ */ React.createElement("div", { className: "cert-label mono" }, c.label)))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 16 }, className: "mono" }, "Certificate copies available on request")), /* @__PURE__ */ React.createElement("div", { className: "qa-card" }, /* @__PURE__ */ React.createElement("div", { className: "mono", style: { marginBottom: 16, color: "var(--accent)", fontWeight: 600 } }, "Quality process"), /* @__PURE__ */ React.createElement("ul", { style: { listStyle: "none", display: "flex", flexDirection: "column", gap: 12 } }, /* @__PURE__ */ React.createElement("li", { style: { fontSize: 13, paddingBottom: 12, borderBottom: "1px solid var(--rule-soft)" } }, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 500, marginBottom: 4 } }, "Routine testing"), /* @__PURE__ */ React.createElement("div", { style: { color: "var(--ink-soft)" } }, "100% electrical validation on every unit")), /* @__PURE__ */ React.createElement("li", { style: { fontSize: 13, paddingBottom: 12, borderBottom: "1px solid var(--rule-soft)" } }, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 500, marginBottom: 4 } }, "Type testing"), /* @__PURE__ */ React.createElement("div", { style: { color: "var(--ink-soft)" } }, "On-site labs plus accredited externals")), /* @__PURE__ */ React.createElement("li", { style: { fontSize: 13, paddingBottom: 12, borderBottom: "1px solid var(--rule-soft)" } }, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 500, marginBottom: 4 } }, "FAT support"), /* @__PURE__ */ React.createElement("div", { style: { color: "var(--ink-soft)" } }, "Customer factory acceptance testing")), /* @__PURE__ */ React.createElement("li", { style: { fontSize: 13 } }, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 500, marginBottom: 4 } }, "Documentation"), /* @__PURE__ */ React.createElement("div", { style: { color: "var(--ink-soft)" } }, "QAP, GA drawings, test reports, BoM"))))), /* @__PURE__ */ React.createElement("div", { className: "stats-fullwidth" }, /* @__PURE__ */ React.createElement("div", { className: "stats-inner" }, /* @__PURE__ */ React.createElement("div", { className: "stats-row" }, STATS.map((s, i) => /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "stats-item reveal",
        key: i,
        style: {
          transitionDelay: `${i * 80}ms`,
          textAlign: "center"
        }
      },
      /* @__PURE__ */ React.createElement("div", { className: "big-num", style: { color: "#ffffff" } }, s.value.includes("+") ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Counter, { to: parseInt(s.value) }), "+") : s.value),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "mono",
          style: {
            marginTop: 12,
            color: "rgba(244,244,241,0.55)"
          }
        },
        s.sub
      ),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          style: {
            fontSize: 14,
            color: "rgba(244,244,241,0.75)",
            marginTop: 8
          }
        },
        s.label
      )
    ))))))), /* @__PURE__ */ React.createElement("section", { className: "section reveal" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "section-head" }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "eyebrow-label" }, "Case studies")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Engineering outcomes from real applications."), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 16, fontSize: 15, color: "var(--ink-soft)" } }, "Selected examples of how Dynalektric applies engineering, manufacturing and testing capability across industrial applications."))), /* @__PURE__ */ React.createElement(FeaturedCases, { navigate }))), /* @__PURE__ */ React.createElement(
      FinalCTA,
      {
        navigate,
        eyebrow: "Discuss your requirement",
        heading: "Discuss your application or engineering requirement",
        body: "Connect with the Dynalektric team to discuss your application, technical requirement or project context.",
        primaryLabel: "Discuss Your Requirement",
        primaryTo: "contact",
        secondaryLabel: "Explore Our Capabilities",
        secondaryTo: "about",
        tertiaryLabel: "Submit a Detailed RFQ",
        tertiaryTo: "contact"
      }
    ), /* @__PURE__ */ React.createElement(Footer, { navigate }));
  }
  var HOME_CERTIFICATIONS, CAPABILITIES, HOME_INDUSTRIES, FEATURED_CASES, Home_default;
  var init_Home = __esm({
    "src/pages/Home/index.jsx"() {
      HOME_CERTIFICATIONS = CERTIFICATIONS;
      CAPABILITIES = [
        {
          num: "01",
          productId: "magnetics",
          slotId: "cap-magnetics",
          resKey: "cardMagnetics",
          img: "assets/card-magnetics-optimized.png",
          title: "Magnetics",
          back: "Transformers, reactors and magnetic components engineered for power conversion, distribution, harmonic control and specialised industrial applications.",
          labels: ["Application-specific engineering", "Manufacturing and testing", "Industrial and infrastructure use"],
          cta: "Explore Magnetics",
          imgPlaceholder: "Replace with Dynalektric Magnetics manufacturing image",
          imgAlt: "Industrial transformer manufacturing at Dynalektric"
        },
        {
          num: "02",
          productId: "control-panels",
          slotId: "cap-control",
          resKey: "cardControl",
          img: "assets/card-control-optimized.png",
          title: "Control Panel Assemblies",
          back: "Panel and distribution assemblies developed around control, operating, safety and application requirements for railway, power and industrial equipment.",
          labels: ["Control integration", "Assembly and wiring", "Testing and documentation"],
          cta: "Explore Panel Engineering",
          imgPlaceholder: "Replace with Dynalektric Panel Engineering image",
          imgAlt: "Electrical control panel assembly at Dynalektric"
        },
        {
          num: "03",
          productId: "power-electronics",
          slotId: "cap-power",
          resKey: "cardPower",
          img: "assets/card-power-optimized.png",
          title: "Power Electronics",
          back: "DC power, charging and electronic systems configured for equipment duty, operational environments and specialised industrial applications.",
          labels: ["Duty-specific design", "Power conversion", "Validation and testing"],
          cta: "Explore Power Electronics",
          imgPlaceholder: "Replace with Dynalektric Power Electronics image",
          imgAlt: "Battery charger and power electronics assembly at Dynalektric"
        },
        {
          num: "04",
          productId: "cross-segment",
          slotId: "cap-integrated",
          resKey: "cardIntegrated",
          img: "assets/card-integrated-optimized.png",
          title: "Cross Segment Solutions",
          back: "Supporting electrical and electronic components integrated into railway, power, equipment and cross-sector industrial systems.",
          labels: ["Component integration", "Custom assemblies", "Cross-sector applications"],
          cta: "Explore Integrated Solutions",
          imgPosition: "50% 20%",
          imgPlaceholder: "Replace with Dynalektric Integrated Components image",
          imgAlt: "Dynalektric technician assembling integrated electrical components"
        }
      ];
      HOME_INDUSTRIES = [
        {
          id: "railways",
          num: "01",
          name: "Railway & Traction",
          img: "assets/industry-railways-optimized.webp",
          resKey: "indRailways",
          desc: "Electrical and electronic systems supporting onboard, trackside and railway equipment applications.",
          labels: ["Traction equipment", "Onboard systems", "Control and auxiliary power"],
          cta: "Explore Railway Applications",
          placeholder: "Replace with approved Dynalektric Railway application image",
          alt: "Modern electric railway and traction infrastructure"
        },
        {
          id: "renewables",
          num: "02",
          name: "Renewable Sectors",
          img: "assets/industry-renewables.jpg",
          resKey: "indRenewables",
          desc: "Magnetics, reactors and power systems supporting conversion, grid integration and renewable-energy infrastructure.",
          labels: ["Solar and wind", "Grid integration", "Energy conversion"],
          cta: "Explore Renewable Applications",
          placeholder: "Replace with approved Dynalektric Renewable application image",
          alt: "Renewable energy infrastructure with solar, wind and electrical systems"
        },
        {
          id: "powergrid",
          num: "03",
          name: "Power & Utilities",
          img: "assets/industry-powergrid.jpg",
          resKey: "indPowergrid",
          desc: "Power conversion, distribution and control solutions supporting utilities, EPC contractors and infrastructure projects.",
          labels: ["Power distribution", "Utility systems", "EPC projects"],
          cta: "Explore Power Applications",
          placeholder: "Replace with approved Dynalektric Power & Utilities image",
          alt: "Power utility substation and electrical transmission infrastructure"
        },
        {
          id: "heavy",
          num: "04",
          name: "Heavy Industries",
          img: "assets/industry-heavy.jpg",
          resKey: "indHeavy",
          desc: "Electrical, magnetic and control solutions developed for demanding process and heavy-equipment environments.",
          labels: ["Steel and cement", "Mining", "Process industries"],
          cta: "Explore Heavy Industry Applications",
          placeholder: "Replace with approved Dynalektric Heavy Industries image",
          alt: "Heavy industrial steel manufacturing and process equipment"
        },
        {
          id: "mhe",
          num: "05",
          name: "Material Handling & Warehousing",
          img: "assets/industry-mhe-optimized.webp",
          resKey: "indMhe",
          desc: "Charging, power electronics and control systems supporting forklifts, AGVs and warehouse equipment.",
          labels: ["Forklifts", "AGVs", "Charging systems"],
          cta: "Explore Material Handling Applications",
          placeholder: "Replace with approved Dynalektric Material Handling image",
          alt: "Material handling and automated warehousing operations"
        },
        {
          id: "datacenter",
          num: "06",
          name: "Data Centers",
          img: "assets/industry-datacenter-optimized.webp",
          resKey: "indDatacenter",
          desc: "Distribution, UPS interface and critical-power support for data-centre infrastructure and operational continuity.",
          labels: ["Critical power", "UPS interface", "Distribution systems"],
          cta: "Explore Data Center Applications",
          placeholder: "Replace with approved Dynalektric Data Center power image",
          alt: "Modern data center with server and critical power infrastructure"
        }
      ];
      FEATURED_CASES = [
        {
          id: "railway",
          industry: "Industrial Machinery",
          title: "55 kVA Three-Phase Auto Transformer for CNC Woodworking Machinery",
          challenge: "A leading machinery manufacturer required a custom three-phase auto transformer to support multiple international input voltages and deliver a stable 400 V output for CNC woodworking equipment. The solution had to maintain high electrical efficiency under continuous industrial duty and integrate seamlessly into the customer's machine architecture while meeting international standards.",
          response: "Dynalektric engineered and manufactured a 55 kVA three-phase copper-wound auto transformer specifically for this application. The design incorporated optimized magnetic construction, Class F insulation, and tropicalized winding treatment. Every unit underwent comprehensive factory electrical testing and inspection before delivery, ensuring stable voltage conversion and reliable operation in demanding industrial manufacturing environments.",
          capability: ["Custom Transformer Engineering", "Copper Winding Technology", "Industrial Manufacturing", "Factory Tested"],
          img: "assets/case-1.png",
          resKey: "caseCncTransformer",
          placeholder: "Dynalektric 55 kVA three-phase auto transformer in CNC woodworking machine application",
          alt: "Photorealistic industrial 55 kVA transformer for CNC woodworking machinery",
          to: "railways"
        },
        {
          id: "renewable",
          industry: "Power Quality & Renewable Energy",
          title: "25 kV Air Core Reactor for Static VAR Generator Applications",
          challenge: "A power quality project required a high-performance air core reactor for integration into a Static VAR Generator (SVG) system. The component had to deliver dependable harmonic mitigation and reactive power compensation while maintaining stable electrical characteristics under continuous operation in demanding industrial and utility environments.",
          response: "Dynalektric developed a custom air core reactor engineered for optimized inductance and thermal stability. Designed using proven electromagnetic principles and built under stringent quality controls, the reactor underwent comprehensive routine testing to ensure reliable integration into the SVG system, supporting improved grid stability and power quality.",
          capability: ["Power Quality Engineering", "Custom Reactor Design", "Thermal Optimization", "Performance Validation"],
          img: "assets/case-2.png",
          resKey: "caseSvgReactor",
          placeholder: "Dynalektric 25 kV air core reactor in SVG power quality application",
          alt: "Photorealistic 25 kV air core reactor coil and SVG substation equipment",
          to: "renewables"
        },
        {
          id: "power",
          industry: "Industrial Power Systems",
          title: "300 kVA Copper Wound Dry Type Auto Transformer",
          challenge: "An industrial rectifier power application required a high-capacity dry type auto transformer to deliver stable voltage transformation under continuous, heavy-duty operating conditions. The design demanded excellent thermal performance, dependable insulation, optimized electrical efficiency, and robust mechanical construction to satisfy demanding industrial operating environments.",
          response: "Dynalektric engineered and manufactured a 300 kVA copper-wound dry type auto transformer for industrial power conversion. The design combined optimized winding geometry, robust insulation systems, and precision manufacturing. Comprehensive routine testing validated all electrical performance parameters, ensuring dependable operation across critical industrial installations.",
          capability: ["Copper Winding", "Dry Type Engineering", "Heavy Duty Applications", "Quality Assurance"],
          img: "assets/case-3.png",
          resKey: "case300KvaTransformer",
          placeholder: "Dynalektric 300 kVA dry type auto transformer in industrial substation",
          alt: "Photorealistic 300 kVA dry type transformer enclosure in electrical room",
          to: "powergrid"
        },
        {
          id: "dc1-charger",
          industry: "Material Handling Equipment",
          title: "DC1 Single-Phase Industrial Battery Charger for Material Handling Equipment",
          challenge: "Industrial warehouses and logistics facilities required a dependable charging solution for flooded lead-acid traction batteries used in pallet trucks, stackers, reach trucks, and other material handling equipment. The charger needed to provide safe, efficient charging, intelligent battery protection, and reliable continuous operation in demanding industrial environments while complying with DIN 41772 and IEC standards.",
          response: "Dynalektric engineered a transformer-based SCR battery charger with DIN 41772 charging characteristics, intelligent microcontroller-based control, adaptive charging modes, comprehensive protection features, and robust thermal management. Every unit undergoes comprehensive testing to ensure reliable charging performance, extended battery life, and long-term industrial reliability.",
          capability: ["DIN 41772 Charging", "Industrial Battery Charging", "Material Handling Equipment", "Transformer-Based SCR Technology"],
          img: "assets/case-4.png",
          resKey: "caseMheCharger",
          placeholder: "Dynalektric DC1 industrial battery charger station in warehouse bay",
          alt: "Photorealistic material handling equipment battery charger in logistics warehouse",
          to: "mhe"
        },
        {
          id: "scr-fcbc",
          industry: "Industrial DC Power Systems",
          title: "SCR Float Cum Boost Charger for Critical Industrial DC Power Applications",
          challenge: "Industrial facilities required a reliable Float Cum Boost Charger capable of providing uninterrupted regulated DC power for critical systems while operating continuously under demanding industrial conditions with high reliability and IEC compliance.",
          response: "Dynalektric developed an SCR-based Float Cum Boost Charger supporting automatic Float and Boost charging modes, regulated DC output, robust industrial construction, comprehensive quality assurance, Factory Acceptance Testing, and IEC 60146-1-1 compliant performance for long-term dependable industrial operation.",
          capability: ["Float & Boost Charging", "IEC 60146-1-1", "Industrial DC Power", "Factory Acceptance Tested"],
          img: "assets/case-5.png",
          resKey: "caseScrFcbcCharger",
          placeholder: "Dynalektric SCR Float Cum Boost Charger cabinet in industrial control room",
          alt: "Photorealistic SCR Float Cum Boost Charger switchgear panels in control room",
          to: "powergrid"
        }
      ];
      window.PageHome = PageHome;
      Home_default = PageHome;
    }
  });

  // src/pages/About/index.jsx
  function PageAbout({ navigate }) {
    useReveal();
    return /* @__PURE__ */ React.createElement("main", { className: "page-enter" }, /* @__PURE__ */ React.createElement("section", { className: "page-hero page-hero--split about-hero" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "page-hero-copy" }, /* @__PURE__ */ React.createElement("div", { className: "mono" }, "ABOUT DYNALEKTRIC"), /* @__PURE__ */ React.createElement("h1", null, "Engineering-led electrical and electronics manufacturing."), /* @__PURE__ */ React.createElement("p", { className: "lead" }, "Dynalektric designs and manufactures magnetics, control panel assemblies, power electronics and cross segment solutions for OEMs, EPC contractors and utilities. We engineer to specification, test in-house and document everything we ship.")), /* @__PURE__ */ React.createElement("div", { className: "page-hero-visual" }, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: "./assets/About-Hero1.png",
        alt: "Dynalektric manufacturing facility",
        width: "720",
        height: "540",
        decoding: "async",
        fetchpriority: "high"
      }
    )))), /* @__PURE__ */ React.createElement("section", { className: "section reveal" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "about-grid" }, /* @__PURE__ */ React.createElement("div", { className: "about-col-left" }, /* @__PURE__ */ React.createElement("div", { className: "about-eyebrow" }, "Company"), /* @__PURE__ */ React.createElement("h2", { className: "about-heading" }, "An engineering-led manufacturer."), /* @__PURE__ */ React.createElement("div", { className: "about-meta" }, /* @__PURE__ */ React.createElement("div", { className: "about-meta-label" }, "Established"), /* @__PURE__ */ React.createElement("div", { className: "about-meta-value" }, "2020, India"), /* @__PURE__ */ React.createElement("div", { className: "about-meta-label" }, "Markets served"), /* @__PURE__ */ React.createElement("div", { className: "about-meta-value" }, "India, Europe, Middle East, Asia, USA, Canada"), /* @__PURE__ */ React.createElement("div", { className: "about-meta-label" }, "Buyers we work with"), /* @__PURE__ */ React.createElement("div", { className: "about-meta-value" }, "OEMs, EPC Contractors, Utilities, Railways & Traction, Government PSUs, Industrial Automation & Heavy Industries"))), /* @__PURE__ */ React.createElement("div", { className: "about-col-right" }, /* @__PURE__ */ React.createElement("p", { className: "about-desc" }, "We work as a long-term manufacturing partner. Our engineers take a customer specification, ask the right questions and supply a tested, documented solution on schedule."), /* @__PURE__ */ React.createElement("p", { className: "about-desc" }, "From single prototype builds to repeat production lines, the approach is the same: every Dynalektric product is designed, wound, wired, tested and documented in-house. Engineering, manufacturing and quality work on one floor, on one team."))))), /* @__PURE__ */ React.createElement("section", { className: "section reveal" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "section-head" }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, "Leadership")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Leadership driving Dynalektric's engineering vision."))), /* @__PURE__ */ React.createElement("div", { className: "about-cap-grid" }, FOUNDERS.map((f) => /* @__PURE__ */ React.createElement("div", { className: "about-cap-item", key: f.name }, /* @__PURE__ */ React.createElement("div", { className: "mono num" }, f.num), /* @__PURE__ */ React.createElement("h3", null, f.name), /* @__PURE__ */ React.createElement("p", null, f.role), /* @__PURE__ */ React.createElement(
      "a",
      {
        className: "founder-linkedin",
        href: f.linkedin,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `${f.name} on LinkedIn`
      },
      /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" })),
      "LinkedIn"
    )))))), /* @__PURE__ */ React.createElement("section", { className: "section reveal" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "section-head" }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, "Group companies")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Backed by trusted group companies."))), /* @__PURE__ */ React.createElement("div", { className: "about-partners-grid" }, SUPPORTED_BY.map((p) => /* @__PURE__ */ React.createElement("div", { className: "about-partner-item", key: p.id }, /* @__PURE__ */ React.createElement(
      "image-slot",
      {
        id: p.logoSlotId,
        src: window.__resources && window.__resources[p.id] || p.img,
        style: { width: p.width, height: 64, marginBottom: 24 },
        fit: "contain",
        shape: "rect",
        placeholder: `Replace with official ${p.name} logo`,
        "aria-label": `${p.name} logo`
      }
    ), /* @__PURE__ */ React.createElement("h3", null, p.name), p.url ? /* @__PURE__ */ React.createElement(
      "a",
      {
        className: "partner-visit",
        href: p.url,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `Visit ${p.name} website`
      },
      /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("path", { d: "M15 3h6v6" }), /* @__PURE__ */ React.createElement("path", { d: "M10 14 21 3" }), /* @__PURE__ */ React.createElement("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" })),
      "Visit Website"
    ) : /* @__PURE__ */ React.createElement("span", { className: "partner-visit partner-visit--pending", "aria-disabled": "true", title: `Official ${p.name} website URL to be added` }, /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("path", { d: "M15 3h6v6" }), /* @__PURE__ */ React.createElement("path", { d: "M10 14 21 3" }), /* @__PURE__ */ React.createElement("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" })), "Visit Website")))))), /* @__PURE__ */ React.createElement("section", { className: "section reveal", style: { background: "var(--panel-dark)", color: "var(--on-dark)", padding: "calc(var(--section-y) * 0.8) 0" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "mono", style: { color: "rgba(244,244,241,0.6)", marginBottom: 40, textAlign: "center" } }, "By the numbers"), /* @__PURE__ */ React.createElement("div", { className: "about-stats" }, /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { className: "big-num", style: { marginBottom: 16, color: "#ffffff" } }, /* @__PURE__ */ React.createElement(Counter, { to: 5 }), "+"), /* @__PURE__ */ React.createElement("div", { className: "mono", style: { color: "rgba(244,244,241,0.6)", marginBottom: 8 } }, "Years"), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 14, color: "rgba(244,244,241,0.75)" } }, "Of in-house engineering and manufacturing")), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { className: "big-num", style: { marginBottom: 16, color: "#ffffff" } }, /* @__PURE__ */ React.createElement(Counter, { to: 500 }), "+"), /* @__PURE__ */ React.createElement("div", { className: "mono", style: { color: "rgba(244,244,241,0.6)", marginBottom: 8 } }, "Designs"), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 14, color: "rgba(244,244,241,0.75)" } }, "Custom solutions delivered to specification")), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { className: "big-num", style: { marginBottom: 16, color: "#ffffff" } }, /* @__PURE__ */ React.createElement(Counter, { to: 15 }), "+"), /* @__PURE__ */ React.createElement("div", { className: "mono", style: { color: "rgba(244,244,241,0.6)", marginBottom: 8 } }, "Markets"), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 14, color: "rgba(244,244,241,0.75)" } }, "Export destinations across three continents"))))), /* @__PURE__ */ React.createElement("section", { className: "section reveal" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "section-head" }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, "Purpose")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Engineering excellence with a purpose."))), /* @__PURE__ */ React.createElement("div", { className: "about-vm-grid" }, /* @__PURE__ */ React.createElement("div", { className: "about-vm-item" }, /* @__PURE__ */ React.createElement("h3", null, "Vision"), /* @__PURE__ */ React.createElement("p", { className: "about-desc" }, "Dynalektric aspires to be a leader in all ventured sectors, seizing opportunities, and investing in the future. We seek to create benchmarks globally for quality, reliability, and customer satisfaction by endlessly raising our standards and consistently anticipating the requirements of our customers, and exceeding their needs and expectations."), /* @__PURE__ */ React.createElement("p", { className: "about-desc" }, "Our goal is to challenge ourselves in the day-to-day making improvements in all our activities, we strive to achieve our goal by working together with a diverse team bringing our skills to the forefront."), /* @__PURE__ */ React.createElement("div", { className: "mono", style: { marginTop: 20, color: "var(--accent)" } }, 'Inspired by "The Toyota Way"')), /* @__PURE__ */ React.createElement("div", { className: "about-vm-item" }, /* @__PURE__ */ React.createElement("h3", null, "Mission"), /* @__PURE__ */ React.createElement("p", { className: "about-desc" }, "Our commitment is to deliver the most innovative smart solution with best-in-class quality at a reasonable price ensuring customer delight. Our products are aimed to deliver high performance throughout the product's service life with minimum to zero downtime and reduced operational costs."))))), /* @__PURE__ */ React.createElement("section", { className: "section reveal" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "section-head" }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, "Manufacturing and engineering capability")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Designed, wound, wired and tested in-house."))), /* @__PURE__ */ React.createElement("div", { className: "about-cap-grid" }, /* @__PURE__ */ React.createElement("div", { className: "about-cap-item" }, /* @__PURE__ */ React.createElement("div", { className: "mono num" }, "01"), /* @__PURE__ */ React.createElement("h3", null, "Design and development"), /* @__PURE__ */ React.createElement("p", null, "In-house electrical, mechanical and thermal design. From concept and feasibility through prototype, validation and series production release.")), /* @__PURE__ */ React.createElement("div", { className: "about-cap-item" }, /* @__PURE__ */ React.createElement("div", { className: "mono num" }, "02"), /* @__PURE__ */ React.createElement("h3", null, "Winding and assembly"), /* @__PURE__ */ React.createElement("p", null, "Precision winding lines for magnetics and transformers. Vacuum pressure impregnation, oven curing and quality control at every stage.")), /* @__PURE__ */ React.createElement("div", { className: "about-cap-item" }, /* @__PURE__ */ React.createElement("div", { className: "mono num" }, "03"), /* @__PURE__ */ React.createElement("h3", null, "Panel build and wiring"), /* @__PURE__ */ React.createElement("p", null, "Type-tested control panel assemblies built to IEC 61439 with full mechanical, electrical and FAT documentation.")), /* @__PURE__ */ React.createElement("div", { className: "about-cap-item" }, /* @__PURE__ */ React.createElement("div", { className: "mono num" }, "04"), /* @__PURE__ */ React.createElement("h3", null, "Routine and type testing"), /* @__PURE__ */ React.createElement("p", null, "On-site test labs for high-voltage, partial discharge, temperature rise and impulse testing. Supplemented by accredited external partners.")), /* @__PURE__ */ React.createElement("div", { className: "about-cap-item" }, /* @__PURE__ */ React.createElement("div", { className: "mono num" }, "05"), /* @__PURE__ */ React.createElement("h3", null, "Quality systems"), /* @__PURE__ */ React.createElement("p", null, "Quality management aligned with ISO 9001, supported by customer-specific QAP frameworks and full material traceability on request.")), /* @__PURE__ */ React.createElement("div", { className: "about-cap-item" }, /* @__PURE__ */ React.createElement("div", { className: "mono num" }, "06"), /* @__PURE__ */ React.createElement("h3", null, "Engineering support"), /* @__PURE__ */ React.createElement("p", null, "Application engineering stays engaged after dispatch through commissioning, field issues and product-life support."))))), /* @__PURE__ */ React.createElement("section", { className: "section reveal", style: { background: "var(--bg-alt)" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "section-head" }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, "Quality and compliance")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Standards, testing and documentation."), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 16, fontSize: 15, color: "var(--ink-soft)" } }, "Designs validated against IEC, IS and region-specific requirements. Routine and type testing on every order. Documentation prepared for supplier qualification and project handover."))), /* @__PURE__ */ React.createElement("div", { className: "cert-row" }, CERTIFICATIONS.map((c) => /* @__PURE__ */ React.createElement("div", { className: "cert-item", key: c.code }, /* @__PURE__ */ React.createElement("div", { className: "cert-code" }, c.code), /* @__PURE__ */ React.createElement("div", { className: "cert-label mono" }, c.label)))), /* @__PURE__ */ React.createElement("div", { className: "qa-process-section" }, /* @__PURE__ */ React.createElement("div", { className: "qa-process-heading mono" }, "QUALITY ASSURANCE PROCESS"), /* @__PURE__ */ React.createElement("div", { className: "qa-process-card" }, /* @__PURE__ */ React.createElement("div", { className: "qa-process-grid" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "qa-process-title" }, "Routine testing"), /* @__PURE__ */ React.createElement("div", { className: "qa-process-desc" }, "100% electrical and thermal validation")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "qa-process-title" }, "Type testing"), /* @__PURE__ */ React.createElement("div", { className: "qa-process-desc" }, "On-site and accredited external labs")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "qa-process-title" }, "FAT support"), /* @__PURE__ */ React.createElement("div", { className: "qa-process-desc" }, "Factory acceptance testing with the customer")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "qa-process-title" }, "Documentation"), /* @__PURE__ */ React.createElement("div", { className: "qa-process-desc" }, "Full QAP, test reports, GA drawings, BoM"))))), /* @__PURE__ */ React.createElement("div", { className: "mono", style: { marginTop: 24, color: "var(--ink-muted)" } }, "Certificate copies available on request for supplier qualification"))), /* @__PURE__ */ React.createElement("section", { className: "section reveal" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "section-head" }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, "Facility")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "One floor, one team,", /* @__PURE__ */ React.createElement("br", { className: "desktop-br" }), " ", "One engineering culture."))), /* @__PURE__ */ React.createElement("div", { className: "about-facility-grid" }, /* @__PURE__ */ React.createElement("div", { style: { aspectRatio: "16/9", overflow: "hidden", borderRadius: "0" } }, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: "./assets/facility-wide-shot 2.jpg",
        alt: "Dynalektric manufacturing facility",
        style: { width: "100%", height: "100%", objectFit: "cover", display: "block" },
        loading: "lazy",
        decoding: "async"
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "about-facility-sub" }, /* @__PURE__ */ React.createElement("div", { style: { overflow: "hidden", borderRadius: "0", height: "100%" } }, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: "./assets/Ab_2.png",
        alt: "Winding floor \u2014 transformer and magnetics winding",
        style: { width: "100%", height: "100%", objectFit: "cover", display: "block" },
        loading: "lazy",
        decoding: "async"
      }
    )), /* @__PURE__ */ React.createElement("div", { style: { overflow: "hidden", borderRadius: "0", height: "100%" } }, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: "./assets/test-bay.png",
        alt: "Dynalektric test bay",
        style: { width: "100%", height: "100%", objectFit: "cover", display: "block" },
        loading: "lazy",
        decoding: "async"
      }
    )))))), /* @__PURE__ */ React.createElement(
      FinalCTA,
      {
        navigate,
        heading: /* @__PURE__ */ React.createElement(React.Fragment, null, "Send a specification.", /* @__PURE__ */ React.createElement("br", { className: "desktop-br" }), "Get an engineering response", /* @__PURE__ */ React.createElement("br", { className: "desktop-br" }), "in one business day.")
      }
    ), /* @__PURE__ */ React.createElement(Footer, { navigate }));
  }
  var FOUNDERS, SUPPORTED_BY, About_default;
  var init_About = __esm({
    "src/pages/About/index.jsx"() {
      FOUNDERS = [
        { num: "01", name: "Shashank Srivaths", role: "Managing Director", linkedin: "https://www.linkedin.com/in/shashankravindrasrivaths/" },
        { num: "02", name: "Vishnu Srivaths", role: "Director", linkedin: "https://www.linkedin.com/in/vsrivaths/" },
        { num: "03", name: "Sangam Patil", role: "Director", linkedin: "https://www.linkedin.com/in/sangamp53/" }
      ];
      SUPPORTED_BY = [
        { id: "royal-group", name: "Royal Group", logoSlotId: "about-supported-royal-group", url: "https://www.royalconstruct.com/", img: "./assets/royal-group-logo.jpg", width: 168 },
        { id: "pride-group", name: "Pride Group", logoSlotId: "about-supported-pride-group", url: "https://www.pridegroup.net/", img: "./assets/pride-group-logo.png", width: 64 }
      ];
      window.PageAbout = PageAbout;
      About_default = PageAbout;
    }
  });

  // src/pages/Products/index.jsx
  function PageProducts({ navigate, focusId }) {
    useReveal();
    const initialGroup = focusId && PRODUCTS.find((p) => p.id === focusId) ? focusId : PRODUCTS[0].id;
    const [activeGroup, setActiveGroup] = React.useState(initialGroup);
    const [activeSubByGroup, setActiveSubByGroup] = React.useState(
      () => PRODUCTS.reduce((acc, p) => {
        acc[p.id] = p.subcategories[0].code;
        return acc;
      }, {})
    );
    const group = PRODUCTS.find((p) => p.id === activeGroup) || PRODUCTS[0];
    const activeSubCode = activeSubByGroup[group.id];
    const sub = group.subcategories.find((s) => s.code === activeSubCode) || group.subcategories[0];
    const subDetail = (window.SUBCAT_DETAIL || SUBCAT_DETAIL)[sub.code] || {};
    React.useEffect(() => {
      if (focusId && focusId !== activeGroup && PRODUCTS.find((p) => p.id === focusId)) {
        setActiveGroup(focusId);
      }
    }, [focusId]);
    const detailRef = React.useRef(null);
    const [detailAnimKey, setDetailAnimKey] = React.useState(0);
    React.useEffect(() => {
      if (detailAnimKey === 0) return;
      const el = detailRef.current;
      if (!el) return;
      el.classList.remove("is-refreshed");
      void el.offsetWidth;
      el.classList.add("is-refreshed");
      const t = setTimeout(() => {
        if (detailRef.current) detailRef.current.classList.remove("is-refreshed");
      }, 600);
      return () => clearTimeout(t);
    }, [detailAnimKey]);
    const selectGroup = (id) => {
      setActiveGroup(id);
      const el = document.getElementById("product-explorer");
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
    };
    const selectSub = (code) => {
      setActiveSubByGroup((s) => __spreadProps(__spreadValues({}, s), { [group.id]: code }));
      setDetailAnimKey((k) => k + 1);
      setTimeout(() => {
        if (detailRef.current) {
          const top = detailRef.current.getBoundingClientRect().top + window.scrollY - 80 - 16;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 60);
    };
    return /* @__PURE__ */ React.createElement("main", { className: "page-enter" }, /* @__PURE__ */ React.createElement("section", { className: "page-hero page-hero--split" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "page-hero-copy" }, /* @__PURE__ */ React.createElement("div", { className: "mono" }, "PRODUCTS AND SOLUTIONS"), /* @__PURE__ */ React.createElement("h1", null, "Electrical and electronics products for industrial applications."), /* @__PURE__ */ React.createElement("p", { className: "lead" }, "Custom magnetics, power systems, control panels and integrated assemblies, engineered for industrial requirements across six sectors. Select a product group to explore specifications.")), /* @__PURE__ */ React.createElement("div", { className: "page-hero-visual" }, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: "./assets/Product_hero.png",
        alt: "Dynalektric control panel and power electronics manufacturing",
        width: "720",
        height: "540",
        decoding: "async",
        fetchpriority: "high"
      }
    )))), /* @__PURE__ */ React.createElement("section", { className: "section", id: "product-explorer" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("nav", { className: "prodx-tabs", "aria-label": "Select product group" }, PRODUCTS.map((p) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: p.id,
        className: `prodx-tab ${activeGroup === p.id ? "is-active" : ""}`,
        onClick: () => selectGroup(p.id),
        "aria-current": activeGroup === p.id ? "true" : void 0
      },
      /* @__PURE__ */ React.createElement("span", { className: "mono num" }, p.num),
      /* @__PURE__ */ React.createElement("span", null, p.name)
    ))), /* @__PURE__ */ React.createElement("div", { className: "prodx-layout" }, /* @__PURE__ */ React.createElement("aside", { className: "prodx-rail", "aria-label": "Product groups" }, /* @__PURE__ */ React.createElement("div", { className: "prodx-rail-head" }, /* @__PURE__ */ React.createElement("div", { className: "mono", style: { color: "var(--ink-muted)" } }, "Product groups"), /* @__PURE__ */ React.createElement("div", { className: "mono", style: { color: "var(--accent)", fontWeight: 600 } }, PRODUCTS.length)), PRODUCTS.map((p) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: p.id,
        className: `prodx-rail-item ${activeGroup === p.id ? "is-active" : ""}`,
        onClick: () => selectGroup(p.id),
        "aria-current": activeGroup === p.id ? "true" : void 0
      },
      /* @__PURE__ */ React.createElement("span", { className: "num" }, p.num),
      /* @__PURE__ */ React.createElement("span", { className: "name" }, p.name),
      /* @__PURE__ */ React.createElement("span", { className: "count mono" }, p.subcategories.length)
    )), /* @__PURE__ */ React.createElement("div", { className: "prodx-rail-cta" }, /* @__PURE__ */ React.createElement("div", { className: "mono", style: { color: "var(--ink-muted)", marginBottom: 8 } }, "Need help choosing?"), /* @__PURE__ */ React.createElement("button", { className: "btn btn-secondary", style: { width: "100%", justifyContent: "center" }, onClick: () => navigate("contact") }, "Talk to engineering"))), /* @__PURE__ */ React.createElement("div", { className: "prodx-main" }, /* @__PURE__ */ React.createElement("header", { className: "prodx-group-head" }, /* @__PURE__ */ React.createElement("div", { className: "prodx-group-num" }, group.num), /* @__PURE__ */ React.createElement("div", { className: "prodx-group-meta" }, /* @__PURE__ */ React.createElement("h2", null, group.name), /* @__PURE__ */ React.createElement("p", { className: "lead" }, group.tagline))), /* @__PURE__ */ React.createElement("div", { className: "prodx-group-body" }, /* @__PURE__ */ React.createElement("div", { className: "prodx-group-overview" }, /* @__PURE__ */ React.createElement("div", { className: "mono", style: { color: "var(--accent)", fontWeight: 600, marginBottom: 8 } }, "Overview"), /* @__PURE__ */ React.createElement("p", null, group.overview)), /* @__PURE__ */ React.createElement("div", { className: "prodx-group-image" }, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: `./assets/${GROUP_IMG_FILENAME[group.id] || group.id + ".jpg"}`,
        alt: group.name,
        width: "720",
        height: "540",
        loading: "lazy",
        decoding: "async",
        style: {
          width: "100%",
          height: "auto",
          objectFit: "contain",
          borderRadius: "0",
          display: "block"
        }
      }
    ))), /* @__PURE__ */ React.createElement("div", { className: "prodx-group-specs" }, /* @__PURE__ */ React.createElement("div", { className: "mono", style: { color: "var(--accent)", fontWeight: 600, marginBottom: 16 } }, "Specification placeholders for ", group.name), /* @__PURE__ */ React.createElement("div", { className: "prodx-spec-row" }, group.placeholders.map((s) => /* @__PURE__ */ React.createElement("div", { className: "prodx-spec-cell", key: s.k }, /* @__PURE__ */ React.createElement("div", { className: "k" }, s.k), /* @__PURE__ */ React.createElement("div", { className: "v" }, s.v))))), /* @__PURE__ */ React.createElement("div", { className: "prodx-subcat" }, /* @__PURE__ */ React.createElement("div", { className: "prodx-subcat-head" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "mono", style: { color: "var(--ink-muted)" } }, "Sub-category explorer"), /* @__PURE__ */ React.createElement("h3", { style: { marginTop: 6 } }, "Select a sub-category")), /* @__PURE__ */ React.createElement("div", { className: "mono", style: { color: "var(--ink-muted)" } }, group.subcategories.length, " items in ", group.name)), /* @__PURE__ */ React.createElement("div", { className: "prodx-subcat-grid" }, group.subcategories.map((s) => {
      const isActive = s.code === activeSubCode;
      return /* @__PURE__ */ React.createElement(
        "button",
        {
          key: s.code,
          className: `prodx-subcat-card ${isActive ? "is-active" : ""}`,
          onClick: () => selectSub(s.code),
          "aria-pressed": isActive
        },
        /* @__PURE__ */ React.createElement("div", { className: "code mono" }, s.code),
        /* @__PURE__ */ React.createElement("div", { className: "name" }, s.name),
        /* @__PURE__ */ React.createElement("div", { className: "detail" }, s.detail),
        /* @__PURE__ */ React.createElement("div", { className: "card-foot" }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, isActive ? "Showing" : "View details"), /* @__PURE__ */ React.createElement("span", { className: "arrow" }, "\u2192"))
      );
    }))), /* @__PURE__ */ React.createElement("article", { ref: detailRef, id: "subcat-detail", className: "prodx-detail", "aria-live": "polite" }, /* @__PURE__ */ React.createElement(
      "header",
      {
        className: "prodx-detail-head",
        style: {
          display: "grid",
          gridTemplateColumns: "1fr 350px",
          gap: "40px",
          alignItems: "center"
        }
      },
      /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", null, sub.name), /* @__PURE__ */ React.createElement("p", null, subDetail.description || sub.detail)),
      /* @__PURE__ */ React.createElement("div", { className: "prodx-detail-img-wrap" }, SUBCAT_IMG_SET.has(sub.code) ? /* @__PURE__ */ React.createElement(
        "img",
        {
          src: `./assets/${SUBCAT_IMG_FILENAME[sub.code] || sub.code + ".jpg"}`,
          alt: sub.name,
          loading: "lazy",
          decoding: "async",
          onError: (e) => {
            if (e.target.src.indexOf(".png") !== -1) {
              e.target.src = `./assets/${sub.code}.jpg`;
            }
          },
          style: {
            width: "100%",
            height: "auto",
            objectFit: "contain",
            display: "block"
          }
        }
      ) : /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "prodx-img-placeholder",
          role: "img",
          "aria-label": `${sub.name} \u2014 image placeholder, official product photo to be added`
        },
        /* @__PURE__ */ React.createElement("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }), /* @__PURE__ */ React.createElement("circle", { cx: "8.5", cy: "8.5", r: "1.5" }), /* @__PURE__ */ React.createElement("path", { d: "m21 15-5-5L5 21" })),
        /* @__PURE__ */ React.createElement("span", null, `Replace with ${sub.name} image`)
      ))
    ), /* @__PURE__ */ React.createElement("div", { className: "prodx-detail-body" }, /* @__PURE__ */ React.createElement("section", { className: "prodx-detail-block" }, /* @__PURE__ */ React.createElement("h4", null, "Typical applications"), /* @__PURE__ */ React.createElement("ul", { className: "prodx-list" }, (subDetail.applications || []).map((a, i) => /* @__PURE__ */ React.createElement("li", { key: i }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, "+"), " ", /* @__PURE__ */ React.createElement("span", null, a))))), /* @__PURE__ */ React.createElement("section", { className: "prodx-detail-block prodx-detail-specs" }, /* @__PURE__ */ React.createElement("h4", null, "Specification placeholders"), sub.code === "03.1" ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "prodx-spec-row-pair" }, (subDetail.specs || []).slice(0, 4).map((s) => /* @__PURE__ */ React.createElement("div", { className: "prodx-spec-cell", key: s.k }, /* @__PURE__ */ React.createElement("div", { className: "k" }, s.k), /* @__PURE__ */ React.createElement("div", { className: "v" }, s.v)))), /* @__PURE__ */ React.createElement("div", { className: "prodx-spec-row prodx-spec-row-dense", style: { marginTop: 16 } }, (subDetail.specs || []).slice(4).map((s) => /* @__PURE__ */ React.createElement("div", { className: "prodx-spec-cell", key: s.k }, /* @__PURE__ */ React.createElement("div", { className: "k" }, s.k), /* @__PURE__ */ React.createElement("div", { className: "v" }, s.v))))) : /* @__PURE__ */ React.createElement("div", { className: "prodx-spec-row prodx-spec-row-dense" }, (subDetail.specs || []).map((s) => /* @__PURE__ */ React.createElement("div", { className: "prodx-spec-cell", key: s.k }, /* @__PURE__ */ React.createElement("div", { className: "k" }, s.k), /* @__PURE__ */ React.createElement("div", { className: "v" }, s.v))))), /* @__PURE__ */ React.createElement("section", { className: "prodx-detail-block" }, /* @__PURE__ */ React.createElement("h4", null, "Relevant industries"), /* @__PURE__ */ React.createElement("div", { className: "prodx-ind-chips" }, (subDetail.industries || []).map((iid) => {
      const ind = INDUSTRIES.find((x) => x.id === iid);
      if (!ind) return null;
      return /* @__PURE__ */ React.createElement(
        "button",
        {
          key: iid,
          className: "prodx-ind-chip",
          onClick: () => navigate("industries", iid)
        },
        ind.name,
        " \u2192"
      );
    })))), /* @__PURE__ */ React.createElement("footer", { className: "prodx-detail-cta" }, /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary", onClick: () => navigate("contact") }, "Submit RFQ for ", sub.name, " ", /* @__PURE__ */ React.createElement("span", { className: "arrow" }, "\u2192")), /* @__PURE__ */ React.createElement("button", { className: "btn btn-secondary", onClick: () => navigate("contact") }, "Request datasheet"), /* @__PURE__ */ React.createElement("span", { className: "mono prodx-detail-note" }, "Datasheet on request. Final specification subject to engineering review."))), /* @__PURE__ */ React.createElement("div", { className: "prodx-links" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "mono", style: { color: "var(--ink-muted)", marginBottom: 8 } }, "Where it is used"), /* @__PURE__ */ React.createElement("div", { className: "prodx-link-row" }, group.industries.slice(0, 4).map((iid) => {
      const ind = INDUSTRIES.find((x) => x.id === iid);
      return ind ? /* @__PURE__ */ React.createElement("a", { key: iid, onClick: () => navigate("industries", iid), className: "prodx-link" }, ind.name, " ", /* @__PURE__ */ React.createElement("span", { className: "arrow" }, "\u2192")) : null;
    }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "mono", style: { color: "var(--ink-muted)", marginBottom: 8 } }, "Procurement support"), /* @__PURE__ */ React.createElement("div", { className: "prodx-link-row" }, /* @__PURE__ */ React.createElement("a", { onClick: () => navigate("export"), className: "prodx-link" }, "Export readiness ", /* @__PURE__ */ React.createElement("span", { className: "arrow" }, "\u2192")), /* @__PURE__ */ React.createElement("a", { onClick: () => navigate("contact"), className: "prodx-link" }, "Submit RFQ ", /* @__PURE__ */ React.createElement("span", { className: "arrow" }, "\u2192"))))))))), /* @__PURE__ */ React.createElement(
      FinalCTA,
      {
        navigate,
        heading: /* @__PURE__ */ React.createElement(React.Fragment, null, "Send a specification.", /* @__PURE__ */ React.createElement("br", { className: "desktop-br" }), "Get an engineering response", /* @__PURE__ */ React.createElement("br", { className: "desktop-br" }), "in one business day.")
      }
    ), /* @__PURE__ */ React.createElement(Footer, { navigate }));
  }
  var GROUP_IMG_FILENAME, SUBCAT_IMG_FILENAME, SUBCAT_IMG_SET, Products_default;
  var init_Products = __esm({
    "src/pages/Products/index.jsx"() {
      GROUP_IMG_FILENAME = {
        "control-panels": "Control-hero.png",
        "cross-segment": "card-integrated-optimized.png"
      };
      SUBCAT_IMG_FILENAME = {
        "02.3": "02.3.png",
        "02.4": "02.4.png",
        "03.3": "03.3.png",
        "04.4": "04.4.png",
        "01.7": "01.7.jpeg",
        "01.8": "01.8.jpeg"
      };
      SUBCAT_IMG_SET = /* @__PURE__ */ new Set([
        "01.1",
        "01.2",
        "01.3",
        "01.4",
        "01.5",
        "01.6",
        "01.7",
        "01.8",
        "02.1",
        "02.2",
        "02.3",
        "02.4",
        "03.1",
        "03.2",
        "03.3",
        "04.1",
        "04.2",
        "04.3",
        "04.4",
        "04.5",
        "04.6",
        "04.7",
        "04.8"
      ]);
      window.PageProducts = PageProducts;
      Products_default = PageProducts;
    }
  });

  // src/pages/Industries/index.jsx
  function PageIndustries({ navigate, focusId }) {
    useReveal();
    const [activeRow, setActiveRow] = React.useState(focusId || INDUSTRIES[0].id);
    const [activeCol, setActiveCol] = React.useState(null);
    React.useEffect(() => {
      if (focusId) setActiveRow(focusId);
    }, [focusId]);
    const activeIndustry = INDUSTRIES.find((i) => i.id === activeRow) || INDUSTRIES[0];
    return /* @__PURE__ */ React.createElement("main", { className: "page-enter" }, /* @__PURE__ */ React.createElement("section", { className: "page-hero page-hero--split" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "page-hero-copy" }, /* @__PURE__ */ React.createElement("div", { className: "mono" }, "INDUSTRIES AND APPLICATIONS"), /* @__PURE__ */ React.createElement("h1", null, "Applications across railways, renewables, utilities and industrial sectors."), /* @__PURE__ */ React.createElement("p", { className: "lead" }, "Six sectors served across Power, Motion and Safety. Use the matrix to see which product groups apply to each industry, then jump into a detailed view of applications and buyer profile.")), /* @__PURE__ */ React.createElement("div", { className: "page-hero-visual industries-hero-visual", style: { alignSelf: "start", marginTop: "70px" } }, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: "./assets/Industries-hero.png",
        alt: "Railway infrastructure \u2014 Dynalektric traction and industrial applications",
        width: "800",
        height: "800",
        decoding: "async",
        fetchpriority: "high"
      }
    )))), /* @__PURE__ */ React.createElement("section", { className: "section reveal" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "section-head" }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, "Capability matrix")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Product group to industry fit."))), /* @__PURE__ */ React.createElement("div", { className: "matrix-intro" }, /* @__PURE__ */ React.createElement("div", { className: "matrix-intro-copy" }, /* @__PURE__ */ React.createElement("h3", null, "Interactive capability map"), /* @__PURE__ */ React.createElement("p", null, "Select an industry row to see relevant product groups and applications. Hover a product group column to see all industries it covers.")), /* @__PURE__ */ React.createElement("div", { className: "matrix-legend" }, /* @__PURE__ */ React.createElement("div", { className: "matrix-legend-item" }, /* @__PURE__ */ React.createElement("span", { className: "mark filled" }), /* @__PURE__ */ React.createElement("span", null, "Active fit")), /* @__PURE__ */ React.createElement("div", { className: "matrix-legend-item" }, /* @__PURE__ */ React.createElement("span", { className: "mark" }), /* @__PURE__ */ React.createElement("span", null, "Not currently mapped")))), /* @__PURE__ */ React.createElement("div", { className: "matrix-wrap" }, /* @__PURE__ */ React.createElement("div", { className: "matrix-table-wrap" }, /* @__PURE__ */ React.createElement("div", { className: "matrix-table matrix-4col" }, /* @__PURE__ */ React.createElement("div", { className: "matrix-cell head" }, "Industry \xB7 Product group"), PRODUCTS.map((p) => /* @__PURE__ */ React.createElement(
      "div",
      {
        key: p.id,
        className: `matrix-cell head ${activeCol === p.id ? "is-active-col" : ""}`,
        onMouseEnter: () => setActiveCol(p.id),
        onMouseLeave: () => setActiveCol(null),
        style: { cursor: "pointer" }
      },
      p.num,
      /* @__PURE__ */ React.createElement("br", null),
      p.name
    )), INDUSTRIES.map((ind) => /* @__PURE__ */ React.createElement(React.Fragment, { key: ind.id }, /* @__PURE__ */ React.createElement(
      "div",
      {
        className: `matrix-cell row-head ${activeRow === ind.id ? "is-active-row" : ""}`,
        onClick: () => setActiveRow(ind.id)
      },
      /* @__PURE__ */ React.createElement("span", { className: "num" }, ind.num),
      /* @__PURE__ */ React.createElement("span", null, ind.name)
    ), PRODUCTS.map((p) => {
      const on = p.industries.includes(ind.id);
      return /* @__PURE__ */ React.createElement(
        "div",
        {
          key: `${ind.id}-${p.id}`,
          className: `matrix-cell ${on ? "is-on" : ""} ${activeRow === ind.id ? "is-active-row" : ""} ${activeCol === p.id ? "is-active-col" : ""}`,
          onClick: () => {
            setActiveRow(ind.id);
            setActiveCol(p.id);
          }
        },
        /* @__PURE__ */ React.createElement("span", { className: "mark" })
      );
    }))))), /* @__PURE__ */ React.createElement("aside", { className: "industry-detail" }, /* @__PURE__ */ React.createElement("div", { className: "industry-detail-header" }, /* @__PURE__ */ React.createElement("div", { className: "num" }, "Selected industry"), /* @__PURE__ */ React.createElement("h3", null, activeIndustry.name), /* @__PURE__ */ React.createElement("p", { className: "industry-desc" }, activeIndustry.body)), /* @__PURE__ */ React.createElement("div", { className: "industry-detail-section" }, /* @__PURE__ */ React.createElement("div", { className: "apps-label" }, "Application examples"), /* @__PURE__ */ React.createElement("ul", { className: "apps" }, activeIndustry.applications.map((a, i) => /* @__PURE__ */ React.createElement("li", { key: i }, a)))), /* @__PURE__ */ React.createElement("div", { className: "industry-info-row" }, /* @__PURE__ */ React.createElement("div", { className: "industry-info-col" }, /* @__PURE__ */ React.createElement("div", { className: "apps-label" }, "Typical buyer need"), /* @__PURE__ */ React.createElement("p", { className: "industry-info-text" }, activeIndustry.buyer)), activeIndustry.qa && /* @__PURE__ */ React.createElement("div", { className: "industry-info-col" }, /* @__PURE__ */ React.createElement("div", { className: "apps-label" }, "Quality or testing consideration"), /* @__PURE__ */ React.createElement("p", { className: "industry-info-text" }, activeIndustry.qa))), /* @__PURE__ */ React.createElement("div", { className: "industry-detail-section", style: { marginTop: 28 } }, /* @__PURE__ */ React.createElement("div", { className: "apps-label" }, "Relevant product groups"), /* @__PURE__ */ React.createElement("div", { className: "industry-chips-container" }, PRODUCTS.filter((p) => p.industries.includes(activeRow)).map((p) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: p.id,
        className: "industry-chip",
        onClick: () => navigate("products", p.id)
      },
      p.name
    )))), /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary", style: { marginTop: 28, width: "100%", justifyContent: "center" }, onClick: () => navigate("contact") }, "Submit RFQ for this application ", /* @__PURE__ */ React.createElement("span", { className: "arrow" }, "\u2192")))))), /* @__PURE__ */ React.createElement("section", { className: "section reveal", style: { background: "var(--bg-alt)" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "section-head" }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, "Industry deep dive")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Six sectors, one engineering approach."), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 16, fontSize: 15, color: "var(--ink-soft)" } }, "Detailed view of each industry served: applications, relevant product groups and how to start a conversation."))), /* @__PURE__ */ React.createElement("div", { className: "industry-cards" }, INDUSTRIES.map((ind) => /* @__PURE__ */ React.createElement("article", { className: "industry-card reveal", key: ind.id, id: `industry-${ind.id}` }, /* @__PURE__ */ React.createElement("div", { className: "num" }, ind.num), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", null, ind.name), /* @__PURE__ */ React.createElement("p", { className: "body", style: { marginTop: 12 } }, ind.body), /* @__PURE__ */ React.createElement("div", { className: "apps-label", style: { marginTop: 20 } }, "Typical buyer need"), /* @__PURE__ */ React.createElement("p", { className: "body", style: { marginTop: 4 } }, ind.buyer), ind.qa && /* @__PURE__ */ React.createElement("div", { className: "qa-note" }, /* @__PURE__ */ React.createElement("div", { className: "case-label" }, "Quality or testing consideration"), /* @__PURE__ */ React.createElement("div", { className: "case-value" }, ind.qa))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "apps-label" }, "Application examples"), /* @__PURE__ */ React.createElement("ul", { className: "apps" }, ind.applications.map((a, i) => /* @__PURE__ */ React.createElement("li", { key: i }, a)))), /* @__PURE__ */ React.createElement("div", { className: "cta-col" }, /* @__PURE__ */ React.createElement("div", { className: "apps-label" }, "Relevant product groups"), PRODUCTS.filter((p) => p.industries.includes(ind.id)).map((p) => /* @__PURE__ */ React.createElement("button", { key: p.id, className: "industry-product-link", onClick: () => navigate("products", p.id) }, p.name, " \u2192")), /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary", style: { marginTop: 16, width: "100%", justifyContent: "center" }, onClick: () => navigate("contact") }, "Submit RFQ ", /* @__PURE__ */ React.createElement("span", { className: "arrow" }, "\u2192")))))))), /* @__PURE__ */ React.createElement(FinalCTA, { navigate }), /* @__PURE__ */ React.createElement(Footer, { navigate }));
  }
  var Industries_default;
  var init_Industries = __esm({
    "src/pages/Industries/index.jsx"() {
      window.PageIndustries = PageIndustries;
      Industries_default = PageIndustries;
    }
  });

  // src/pages/Innovation/index.jsx
  function PageRnd({ navigate }) {
    useReveal();
    return /* @__PURE__ */ React.createElement("main", { className: "page-enter" }, /* @__PURE__ */ React.createElement("section", { className: "page-hero page-hero--split" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "page-hero-copy" }, /* @__PURE__ */ React.createElement("div", { className: "mono" }, "INNOVATION PORTFOLIO"), /* @__PURE__ */ React.createElement("h1", null, "Innovation and R&D portfolio for custom power solutions."), /* @__PURE__ */ React.createElement("p", { className: "lead" }, "Our engineering capability covers magnetics, control panel assemblies, power electronics and cross segment solutions . From design and manufacturing to testing and documentation, Dynalektric supports OEMs, utilities and industrial customers with reliable power solutions.")), /* @__PURE__ */ React.createElement("div", { className: "page-hero-visual", style: { aspectRatio: "1447/1087" } }, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: "./assets/innovation-hero.png",
        alt: "Dynalektric R&D lab - engineers testing transformers and control panels",
        width: "1447",
        height: "1087",
        decoding: "async",
        fetchpriority: "high",
        style: { objectFit: "contain", transform: "none", animation: "none" }
      }
    )))), /* @__PURE__ */ React.createElement("section", { className: "section reveal" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "section-head" }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, "Focus areas")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Four programmes, one engineering team."), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 16, fontSize: 15, color: "var(--ink-soft)" } }, "Hover any focus area to see programme deliverables in active development."))), /* @__PURE__ */ React.createElement("div", { className: "focus-grid" }, FOCUS_AREAS.map((f) => /* @__PURE__ */ React.createElement("div", { className: "cap-card reveal", key: f.num }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "num" }, f.num), /* @__PURE__ */ React.createElement("div", { className: "mono", style: { fontSize: 10, letterSpacing: "0.12em", color: "var(--ink-muted)", marginBottom: 16, textTransform: "uppercase" } }, "Focus Area"), /* @__PURE__ */ React.createElement("h3", null, f.title), /* @__PURE__ */ React.createElement("p", { className: "reveal-body" }, f.body), /* @__PURE__ */ React.createElement("ul", { className: "reveal-body focus-deliverables" }, f.deliverables.map((d, i) => /* @__PURE__ */ React.createElement("li", { key: i }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, "+"), " ", d)))), /* @__PURE__ */ React.createElement("div", { className: "footer-mark" }, /* @__PURE__ */ React.createElement("span", null, "In-house engineering"), /* @__PURE__ */ React.createElement("span", null, "+"))))))), /* @__PURE__ */ React.createElement("section", { className: "section reveal", style: { background: "var(--panel-dark)", color: "var(--on-dark)" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "section-head", style: { borderColor: "rgba(255,255,255,0.1)" } }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "mono", style: { color: "rgba(244,244,241,0.6)" } }, "Engineering workflow")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", { style: { color: "var(--bg)" } }, "How a Dynalektric project moves."))), /* @__PURE__ */ React.createElement("div", { className: "process-flow" }, PROCESS.map((s) => /* @__PURE__ */ React.createElement("div", { className: "process-step", key: s.num }, /* @__PURE__ */ React.createElement("div", { className: "num" }, s.num), /* @__PURE__ */ React.createElement("h4", null, s.title), /* @__PURE__ */ React.createElement("p", null, s.body)))))), /* @__PURE__ */ React.createElement("section", { className: "section reveal" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "mono", style: { color: "var(--accent)" } }, "Custom engineering"), /* @__PURE__ */ React.createElement("h2", { style: { marginTop: 16 } }, "Have a non-standard requirement?"), /* @__PURE__ */ React.createElement("p", { className: "lead", style: { marginTop: 24 } }, "Our engineering team supports customer-specific requirements with technical review, product customization and manufacturing support for industrial, railway and power applications."), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 16, marginTop: 32, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary", onClick: () => navigate("contact") }, "Submit RFQ ", /* @__PURE__ */ React.createElement("span", { className: "arrow" }, "\u2192")), /* @__PURE__ */ React.createElement("button", { className: "btn btn-secondary", onClick: () => navigate("products") }, "Browse products"))), /* @__PURE__ */ React.createElement("div", { style: { aspectRatio: "1517/1037" } }, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: "./assets/custom-eng.png",
        alt: "Dynalektric engineering and manufacturing",
        width: "1517",
        height: "1037",
        loading: "lazy",
        decoding: "async",
        style: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "0"
        }
      }
    ))))), /* @__PURE__ */ React.createElement(Footer, { navigate }));
  }
  var FOCUS_AREAS, PROCESS, Innovation_default;
  var init_Innovation = __esm({
    "src/pages/Innovation/index.jsx"() {
      FOCUS_AREAS = [
        {
          num: "01",
          title: "Traction Product Development",
          body: "Engineering and development of traction and auxiliary power products supporting railway and mobility applications.",
          deliverables: [
            "Locomotive Transformer",
            "Metro Coach Traction Transformer",
            "Vande Bharat Traction Transformer",
            "Battery Charger",
            "Converter (Traction, Auxiliary & Hotel)"
          ]
        },
        {
          num: "02",
          title: "Renewable Product Development",
          body: "Power products and grid interface solutions supporting renewable energy and battery storage applications.",
          deliverables: [
            "Inverter Duty Transformer",
            "BESS Power Pack \u2013 Pre-Engineered Grid Interface for BESS Container Deployment"
          ]
        },
        {
          num: "03",
          title: "IoT & Communication Systems",
          body: "Monitoring and communication platforms enabling intelligent power management and remote diagnostics.",
          deliverables: [
            "Distributed Power with Communication System",
            "On-board Remote Monitoring System",
            "CAN Bus & IoT for MHE Chargers"
          ]
        },
        {
          num: "04",
          title: "Power Modules & Integrated Power Systems",
          body: "Integrated power conversion modules and power supply systems for industrial and mobility applications.",
          deliverables: [
            "SMPS Power Supplies",
            "Redundant Power Supplies",
            "Converters",
            "DC-DC Converters"
          ]
        }
      ];
      PROCESS = [
        { num: "01", title: "Brief and specification", body: "Application, load profile, environment and compliance requirements." },
        { num: "02", title: "Technical review and proposal", body: "Engineering review, technical feasibility and commercial proposal based on customer requirements." },
        { num: "03", title: "Design and engineering", body: "Electrical, mechanical and application-specific engineering based on customer requirements." },
        { num: "04", title: "Prototype and test", body: "Manufacturing, assembly, inspection and testing according to project requirements." },
        { num: "05", title: "Series production", body: "Production, documentation, dispatch and after-sales support." }
      ];
      window.PageRnd = PageRnd;
      Innovation_default = PageRnd;
    }
  });

  // src/pages/Export/index.jsx
  function ExportCapabilityTabs() {
    const [tab, setTab] = React.useState(0);
    const TABS = ["Quality & Manufacturing", "Trade Compliance", "ESG & Carbon Readiness"];
    return /* @__PURE__ */ React.createElement("div", { className: "exp-tabs-wrap" }, /* @__PURE__ */ React.createElement("div", { className: "exp-tabs", role: "tablist", "aria-label": "Export capability overview" }, TABS.map((t, i) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: i,
        role: "tab",
        "aria-selected": tab === i,
        "aria-controls": `exp-tabpanel-cap-${i}`,
        id: `exp-tab-cap-${i}`,
        className: `exp-tab-btn ${tab === i ? "is-active" : ""}`,
        onClick: () => {
          setTab(i);
          exportTrack("capability_tab_select", { tab: t });
        }
      },
      t
    ))), /* @__PURE__ */ React.createElement(
      "div",
      {
        id: "exp-tabpanel-cap-0",
        role: "tabpanel",
        "aria-labelledby": "exp-tab-cap-0",
        hidden: tab !== 0,
        className: "exp-tab-panel"
      },
      /* @__PURE__ */ React.createElement("div", { className: "exp-tab-cols" }, /* @__PURE__ */ React.createElement("div", { className: "export-quality-list" }, /* @__PURE__ */ React.createElement("ul", { className: "export-tick-list" }, EXP_QUALITY.map((q, i) => /* @__PURE__ */ React.createElement("li", { key: i }, /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true" }, "\u203A"), /* @__PURE__ */ React.createElement("span", null, q)))), /* @__PURE__ */ React.createElement("div", { className: "export-inspect-callout", style: { marginTop: 24 } }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, "Inspection"), /* @__PURE__ */ React.createElement("p", null, "We welcome customer inspection, third-party inspection and Factory Acceptance Tests based on agreed project requirements."))), /* @__PURE__ */ React.createElement("div", { className: "export-doc-cards" }, EXP_QUALITY_DOCS.map((d) => /* @__PURE__ */ React.createElement("div", { className: "export-doc-card2", key: d.code }, /* @__PURE__ */ React.createElement("div", { className: "mono num" }, d.code), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", null, d.title), /* @__PURE__ */ React.createElement("p", null, d.note))))))
    ), /* @__PURE__ */ React.createElement(
      "div",
      {
        id: "exp-tabpanel-cap-1",
        role: "tabpanel",
        "aria-labelledby": "exp-tab-cap-1",
        hidden: tab !== 1,
        className: "exp-tab-panel"
      },
      /* @__PURE__ */ React.createElement("div", { className: "export-status-list exp-status-list-narrow" }, EXP_TRADE.map((item) => /* @__PURE__ */ React.createElement("div", { className: "export-status-row", key: item.k }, /* @__PURE__ */ React.createElement("span", { style: { display: "flex", gap: 12, alignItems: "center" } }, /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true", style: { color: "var(--accent)", fontWeight: 700, flexShrink: 0 } }, "\u203A"), item.k), /* @__PURE__ */ React.createElement("span", { className: `export-chip ${EXP_STATUS_CHIP[item.s].cls}` }, EXP_STATUS_CHIP[item.s].label))))
    ), /* @__PURE__ */ React.createElement(
      "div",
      {
        id: "exp-tabpanel-cap-2",
        role: "tabpanel",
        "aria-labelledby": "exp-tab-cap-2",
        hidden: tab !== 2,
        className: "exp-tab-panel"
      },
      /* @__PURE__ */ React.createElement("div", { className: "export-status-list exp-status-list-narrow" }, EXP_ESG.map((item) => /* @__PURE__ */ React.createElement("div", { className: "export-status-row", key: item.k }, /* @__PURE__ */ React.createElement("span", { style: { display: "flex", gap: 12, alignItems: "center" } }, /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true", style: { color: "var(--accent)", fontWeight: 700, flexShrink: 0 } }, "\u203A"), item.k), /* @__PURE__ */ React.createElement("span", { className: `export-chip ${EXP_STATUS_CHIP[item.s].cls}` }, EXP_STATUS_CHIP[item.s].label))))
    ));
  }
  function ResourcesTabs() {
    const [tab, setTab] = React.useState(0);
    const TABS = ["Documentation", "Logistics & Incoterms", "Warranty & Support"];
    return /* @__PURE__ */ React.createElement("div", { className: "exp-tabs-wrap" }, /* @__PURE__ */ React.createElement("div", { className: "exp-tabs", role: "tablist", "aria-label": "Resources" }, TABS.map((t, i) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: i,
        role: "tab",
        "aria-selected": tab === i,
        "aria-controls": `exp-tabpanel-res-${i}`,
        id: `exp-tab-res-${i}`,
        className: `exp-tab-btn ${tab === i ? "is-active" : ""}`,
        onClick: () => setTab(i)
      },
      t
    ))), /* @__PURE__ */ React.createElement(
      "div",
      {
        id: "exp-tabpanel-res-0",
        role: "tabpanel",
        "aria-labelledby": "exp-tab-res-0",
        hidden: tab !== 0,
        className: "exp-tab-panel"
      },
      /* @__PURE__ */ React.createElement("div", { className: "exp-resources-cols" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "export-doc-subhead" }, "Standard documents"), /* @__PURE__ */ React.createElement("ul", { className: "export-tick-list" }, EXP_DOCS_STD.map((d, i) => /* @__PURE__ */ React.createElement("li", { key: i }, /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true" }, "\u203A"), /* @__PURE__ */ React.createElement("span", null, d))))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "export-doc-subhead" }, "Applicable documents"), /* @__PURE__ */ React.createElement("ul", { className: "export-tick-list" }, EXP_DOCS_APP.map((d, i) => /* @__PURE__ */ React.createElement("li", { key: i }, /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true" }, "\u203A"), /* @__PURE__ */ React.createElement("span", null, d))))))
    ), /* @__PURE__ */ React.createElement(
      "div",
      {
        id: "exp-tabpanel-res-1",
        role: "tabpanel",
        "aria-labelledby": "exp-tab-res-1",
        hidden: tab !== 1,
        className: "exp-tab-panel"
      },
      /* @__PURE__ */ React.createElement("div", { className: "exp-resources-cols" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "export-doc-subhead" }, "Supported Incoterms"), /* @__PURE__ */ React.createElement("div", { className: "export-incoterm-row" }, EXP_INCOTERMS.map((t) => /* @__PURE__ */ React.createElement("span", { className: "export-incoterm exp-incoterm-light", key: t }, t))), /* @__PURE__ */ React.createElement("p", { className: "exp-fineprint" }, "Final Incoterms, payment terms and delivery responsibilities are confirmed in the quotation.")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "export-doc-subhead" }, "Logistics support"), /* @__PURE__ */ React.createElement("ul", { className: "export-tick-list" }, EXP_LOGISTICS2.map((d, i) => /* @__PURE__ */ React.createElement("li", { key: i }, /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true" }, "\u203A"), /* @__PURE__ */ React.createElement("span", null, d)))), /* @__PURE__ */ React.createElement("p", { className: "exp-fineprint" }, "Indicative lead time is shared by product family. Fixed dates are confirmed at order.")))
    ), /* @__PURE__ */ React.createElement(
      "div",
      {
        id: "exp-tabpanel-res-2",
        role: "tabpanel",
        "aria-labelledby": "exp-tab-res-2",
        hidden: tab !== 2,
        className: "exp-tab-panel"
      },
      /* @__PURE__ */ React.createElement("ul", { className: "export-tick-list" }, EXP_AFTERSALES.map((a, i) => /* @__PURE__ */ React.createElement("li", { key: i }, /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true" }, "\u203A"), /* @__PURE__ */ React.createElement("span", null, a))))
    ));
  }
  function PageExport({ navigate }) {
    useReveal();
    React.useEffect(() => {
      const fired = {};
      function onScroll() {
        const sc = document.scrollingElement || document.documentElement;
        const pct = (sc.scrollTop + sc.clientHeight) / sc.scrollHeight;
        if (pct >= 0.5 && !fired["50"]) {
          fired["50"] = 1;
          exportTrack("export_page_scroll_50");
        }
        if (pct >= 0.9 && !fired["90"]) {
          fired["90"] = 1;
          exportTrack("export_page_scroll_90");
        }
      }
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return /* @__PURE__ */ React.createElement("main", { className: "page-enter", "data-screen-label": "Export" }, /* @__PURE__ */ React.createElement("section", { className: "page-hero export-hero" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "export-hero-grid" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "mono" }, "EXPORT CAPABILITY"), /* @__PURE__ */ React.createElement("h1", null, "Engineered in India. Prepared for global industrial requirements."), /* @__PURE__ */ React.createElement("p", { className: "lead" }, "Dynalektric supplies magnetics, DC power systems, control panels and engineered assemblies with structured documentation, testing coordination and export support for international industrial buyers."), /* @__PURE__ */ React.createElement("div", { className: "export-hero-cta" }, /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary", onClick: () => {
      exportTrack("export_rfq_start", { from: "hero" });
      navigate("contact");
    } }, "Request an Export Quote ", /* @__PURE__ */ React.createElement("span", { className: "arrow", "aria-hidden": "true" }, "\u2192")), /* @__PURE__ */ React.createElement("button", { className: "btn btn-secondary", onClick: () => {
      exportTrack("supplier_qualification_click");
      navigate("contact");
    } }, "Start Supplier Qualification")), /* @__PURE__ */ React.createElement("div", { className: "export-trust-row" }, EXP_TRUST.map((t) => /* @__PURE__ */ React.createElement("span", { className: `export-trust-chip ${t.state === "cond" ? "is-cond" : ""}`, key: t.label }, /* @__PURE__ */ React.createElement("span", { className: "export-trust-mark", "aria-hidden": "true" }), /* @__PURE__ */ React.createElement("span", { className: "export-trust-label" }, t.label), /* @__PURE__ */ React.createElement("span", { className: "export-trust-note" }, t.note))))), /* @__PURE__ */ React.createElement("div", { className: "page-hero-visual export-hero-visual" }, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: "./assets/export-hero.png",
        alt: "Dynalektric export - global delivery of engineered power systems",
        decoding: "async",
        fetchpriority: "high"
      }
    ))))), /* @__PURE__ */ React.createElement("section", { className: "section reveal" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "section-head" }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, "Global reach")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Global Reach & Industries Served"), /* @__PURE__ */ React.createElement("p", { className: "export-sub" }, "Dynalektric supports industrial customers across multiple regions and sectors with engineered products and export coordination."))), /* @__PURE__ */ React.createElement("div", { className: "exp-reach-grid" }, /* @__PURE__ */ React.createElement("div", { className: "exp-reach-panel" }, /* @__PURE__ */ React.createElement("div", { className: "exp-reach-title" }, "Regions served"), /* @__PURE__ */ React.createElement("div", { className: "exp-reach-chips" }, EXP_REGIONS.map((r) => /* @__PURE__ */ React.createElement("span", { className: "exp-reach-chip", key: r }, r)))), /* @__PURE__ */ React.createElement("div", { className: "exp-reach-panel" }, /* @__PURE__ */ React.createElement("div", { className: "exp-reach-title" }, "Industries served"), /* @__PURE__ */ React.createElement("div", { className: "exp-reach-chips" }, EXP_SECTORS.map((s) => /* @__PURE__ */ React.createElement("span", { className: "exp-reach-chip exp-reach-chip-ind", key: s }, s))))))), /* @__PURE__ */ React.createElement("section", { className: "section reveal", style: { background: "var(--bg-alt)" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "section-head" }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, "Product portfolio")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Export Product Portfolio"), /* @__PURE__ */ React.createElement("p", { className: "export-sub" }, "Core product groups prepared for international industrial applications."))), /* @__PURE__ */ React.createElement("div", { className: "exp-ptable-wrap" }, /* @__PURE__ */ React.createElement("table", { className: "exp-ptable" }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Product Group"), /* @__PURE__ */ React.createElement("th", null, "Indicative HS Heading"), /* @__PURE__ */ React.createElement("th", null, "Rating Range"), /* @__PURE__ */ React.createElement("th", null, "Documentation"), /* @__PURE__ */ React.createElement("th", null, "Customisation Capability"))), /* @__PURE__ */ React.createElement("tbody", null, EXP_PORTFOLIO.map((g) => /* @__PURE__ */ React.createElement("tr", { key: g.id }, /* @__PURE__ */ React.createElement("td", { className: "exp-ptable-group" }, /* @__PURE__ */ React.createElement("span", { className: "exp-ptable-name" }, g.group), /* @__PURE__ */ React.createElement("ul", { className: "exp-ptable-items" }, g.items.map((item) => /* @__PURE__ */ React.createElement("li", { key: item }, item)))), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("span", { className: "mono exp-ptable-hs" }, "HS ", g.hs)), /* @__PURE__ */ React.createElement("td", null, g.rating), /* @__PURE__ */ React.createElement("td", null, g.docs), /* @__PURE__ */ React.createElement("td", null, g.custom)))))), /* @__PURE__ */ React.createElement("div", { className: "exp-pmobile" }, EXP_PORTFOLIO.map((g) => /* @__PURE__ */ React.createElement("div", { className: "exp-pmobile-card", key: g.id }, /* @__PURE__ */ React.createElement("div", { className: "exp-pmobile-head" }, /* @__PURE__ */ React.createElement("span", { className: "exp-ptable-name" }, g.group), /* @__PURE__ */ React.createElement("span", { className: "mono exp-ptable-hs" }, "HS ", g.hs)), /* @__PURE__ */ React.createElement("ul", { className: "exp-ptable-items exp-pmobile-items" }, g.items.map((item) => /* @__PURE__ */ React.createElement("li", { key: item }, item))), /* @__PURE__ */ React.createElement("div", { className: "exp-pmobile-meta" }, /* @__PURE__ */ React.createElement("div", { className: "exp-pmobile-row" }, /* @__PURE__ */ React.createElement("span", { className: "exp-pmobile-k" }, "Rating range"), /* @__PURE__ */ React.createElement("span", { className: "exp-pmobile-v" }, g.rating)), /* @__PURE__ */ React.createElement("div", { className: "exp-pmobile-row" }, /* @__PURE__ */ React.createElement("span", { className: "exp-pmobile-k" }, "Documentation"), /* @__PURE__ */ React.createElement("span", { className: "exp-pmobile-v" }, g.docs)), /* @__PURE__ */ React.createElement("div", { className: "exp-pmobile-row" }, /* @__PURE__ */ React.createElement("span", { className: "exp-pmobile-k" }, "Customisation"), /* @__PURE__ */ React.createElement("span", { className: "exp-pmobile-v" }, g.custom)))))), /* @__PURE__ */ React.createElement("p", { className: "exp-fineprint" }, "Indicative HS headings are confirmed per product and destination. Final classification is set at quotation."))), /* @__PURE__ */ React.createElement("section", { className: "section reveal", style: { background: "var(--panel-dark)", color: "var(--on-dark)" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "section-head", style: { borderColor: "rgba(255,255,255,0.12)" } }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "mono", style: { color: "rgba(244,244,241,0.6)" } }, "Trust and verification")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", { style: { color: "var(--on-dark)" } }, "Trust & Verification"), /* @__PURE__ */ React.createElement("p", { className: "export-sub", style: { color: "rgba(244,244,241,0.72)" } }, "Legal identity, independent verification and financial readiness for procurement onboarding. Values shown as placeholders are confirmed with client-approved data."))), /* @__PURE__ */ React.createElement("div", { className: "export-verify-grid" }, /* @__PURE__ */ React.createElement("div", { className: "export-verify-panel" }, /* @__PURE__ */ React.createElement("div", { className: "mono export-verify-title" }, "Legal identity"), /* @__PURE__ */ React.createElement("div", { className: "exp-spec-rows on-dark" }, EXP_LEGAL.map((f) => /* @__PURE__ */ React.createElement("div", { className: "exp-spec-row", key: f.k }, /* @__PURE__ */ React.createElement("span", { className: "exp-label" }, f.k), /* @__PURE__ */ React.createElement("span", { className: "exp-spec-val" }, f.cta ? /* @__PURE__ */ React.createElement(
      "a",
      {
        href: f.url || "#",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "exp-cert-cta-btn",
        onClick: (e) => {
          if (typeof exportTrack === "function") exportTrack("iec_certificate_view");
          if (!f.url || f.url === "#") {
            e.preventDefault();
            alert("IEC Certificate is on file and available upon request.");
          }
        }
      },
      /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", width: "14", height: "14", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }), /* @__PURE__ */ React.createElement("polyline", { points: "14 2 14 8 20 8" }), /* @__PURE__ */ React.createElement("line", { x1: "16", y1: "13", x2: "8", y2: "13" }), /* @__PURE__ */ React.createElement("line", { x1: "16", y1: "17", x2: "8", y2: "17" })),
      /* @__PURE__ */ React.createElement("span", null, f.ctaText || "View Certificate"),
      /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true" }, "\u2192")
    ) : typeof f.v === "string" && f.v.includes("\n") ? f.v.split("\n").map((line, idx) => /* @__PURE__ */ React.createElement(React.Fragment, { key: idx }, idx > 0 && /* @__PURE__ */ React.createElement("br", null), line)) : f.v)))), /* @__PURE__ */ React.createElement("div", { className: "export-map" }, /* @__PURE__ */ React.createElement(
      "iframe",
      {
        title: "Dynalektric Registered Address",
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7782.2830804704245!2d77.62583052848488!3d12.769318741084197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae69fde1bc74cd%3A0x9dbf3aaa6f14c1c7!2sDynalektric%20Equipment%20Private%20Limited!5e0!3m2!1sen!2sin!4v1781670618586!5m2!1sen!2sin",
        width: "100%",
        height: "100%",
        style: { border: 0 },
        loading: "lazy",
        allowFullScreen: true,
        referrerPolicy: "no-referrer-when-downgrade"
      }
    ))), /* @__PURE__ */ React.createElement("div", { className: "export-verify-side" }, /* @__PURE__ */ React.createElement("div", { className: "export-verify-panel" }, /* @__PURE__ */ React.createElement("div", { className: "mono export-verify-title" }, "Financial readiness"), /* @__PURE__ */ React.createElement("div", { className: "exp-spec-rows on-dark" }, EXP_FINANCIAL.map((f) => /* @__PURE__ */ React.createElement("div", { className: "exp-spec-row", key: f.k }, /* @__PURE__ */ React.createElement("span", { className: "exp-label" }, f.k), /* @__PURE__ */ React.createElement("span", { className: "exp-spec-val" }, f.v))))), /* @__PURE__ */ React.createElement("div", { className: "export-verify-panel" }, /* @__PURE__ */ React.createElement("div", { className: "mono export-verify-title" }, "Social proof"), /* @__PURE__ */ React.createElement("p", { className: "export-verify-p" }, "Approved customer logos, anonymous case studies and approved testimonials are shared once the supplier qualification request is reviewed."), /* @__PURE__ */ React.createElement("div", { className: "export-logo-row" }, EXPORT_CUSTOMER_LOGOS.map((logo, index) => /* @__PURE__ */ React.createElement("div", { className: "export-logo-slot", key: index }, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: logo,
        alt: `Customer logo ${index + 1}`,
        loading: "lazy",
        decoding: "async",
        onError: (e) => {
          if (e.target.src.indexOf("Logo%207.png") !== -1 || e.target.src.indexOf("Logo%207") !== -1) {
            e.target.src = "./assets/Logo7.png";
          } else if (e.target.src.indexOf("Logo7.png") !== -1) {
            e.target.src = "./assets/Logo7.webp";
          }
        }
      }
    ))))), /* @__PURE__ */ React.createElement("div", { className: "export-verify-actions" }, /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost on-dark", onClick: () => {
      exportTrack("clearance_scheme_view", { action: "view_address" });
      navigate("contact", "map");
    } }, "View Registered Address"), /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost on-dark", onClick: () => {
      exportTrack("supplier_qualification_click");
      navigate("contact");
    } }, "Submit Supplier Qualification Request")))))), /* @__PURE__ */ React.createElement("section", { className: "section reveal", style: { background: "var(--bg-alt)" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "section-head" }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, "Certifications and standards")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Certifications and Standards"), /* @__PURE__ */ React.createElement("p", { className: "export-sub" }, "A three-status view across management systems and product or market standards. Status reflects current position and is confirmed with certificate references on request."))), /* @__PURE__ */ React.createElement(CertMatrix, null))), /* @__PURE__ */ React.createElement("section", { className: "section reveal" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "section-head" }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, "Destination-market clearance")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Destination Market Clearance Schemes"), /* @__PURE__ */ React.createElement("p", { className: "export-sub" }, "Select a destination country and product group to view a likely compliance path. Schemes shown are indicative and confirmed per product and order."))), /* @__PURE__ */ React.createElement(ClearanceSelector, { navigate }), /* @__PURE__ */ React.createElement("div", { className: "export-testing-note" }, /* @__PURE__ */ React.createElement("div", { className: "mono export-verify-title", style: { color: "var(--accent-2)" } }, "Testing support"), /* @__PURE__ */ React.createElement("ul", { className: "export-tick-list export-tick-blue" }, EXP_TESTING_SUPPORT.map((t, i) => /* @__PURE__ */ React.createElement("li", { key: i }, /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true" }, "\u203A"), /* @__PURE__ */ React.createElement("span", null, t))))))), /* @__PURE__ */ React.createElement("section", { className: "section reveal", style: { background: "var(--bg-alt)" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "section-head" }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, "Capability overview")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Export Capability Overview"), /* @__PURE__ */ React.createElement("p", { className: "export-sub" }, "Structured quality systems, trade compliance processes and sustainability readiness support international customer requirements."))), /* @__PURE__ */ React.createElement(ExportCapabilityTabs, null))), /* @__PURE__ */ React.createElement("section", { className: "section reveal", style: { background: "var(--bg-alt)" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "section-head" }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, "From RFQ to after-sales")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Export Process Journey"), /* @__PURE__ */ React.createElement("p", { className: "export-sub" }, "Eight structured steps across four phases \u2014 from initial enquiry to delivery and after-sales support."))), /* @__PURE__ */ React.createElement("div", { className: "exp-roadmap", role: "list", "aria-label": "Export process phases" }, JOURNEY_PHASES.map((phase) => /* @__PURE__ */ React.createElement("div", { className: "exp-phase", key: phase.phase, role: "listitem" }, /* @__PURE__ */ React.createElement("div", { className: "exp-phase-hd" }, /* @__PURE__ */ React.createElement("span", { className: "exp-phase-num" }, phase.phase), /* @__PURE__ */ React.createElement("span", { className: "exp-phase-name" }, phase.name)), /* @__PURE__ */ React.createElement("div", { className: "exp-phase-body" }, phase.steps.map((step, idx) => /* @__PURE__ */ React.createElement("div", { className: `exp-phase-step ${idx === 0 ? "process-detail-primary" : ""}`, key: step.n }, /* @__PURE__ */ React.createElement("div", { className: "exp-step-hd" }, /* @__PURE__ */ React.createElement("span", { className: "exp-step-n" }, step.n), /* @__PURE__ */ React.createElement("span", { className: "exp-step-title" }, step.title)), /* @__PURE__ */ React.createElement("p", { className: "exp-step-desc" }, step.desc), /* @__PURE__ */ React.createElement("ul", { className: "exp-step-items" }, step.items.map((item, i) => /* @__PURE__ */ React.createElement("li", { key: i }, item))))))))), /* @__PURE__ */ React.createElement("p", { className: "exp-fineprint", style: { marginTop: 24 } }, "Indicative sequence. Specific milestones are aligned with customer project requirements and confirmed at order."))), /* @__PURE__ */ React.createElement("section", { className: "section reveal" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "section-head" }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, "Documentation, logistics and support")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Resources"), /* @__PURE__ */ React.createElement("p", { className: "export-sub" }, "Documentation packages, Incoterms, logistics support and after-sales terms for international orders."))), /* @__PURE__ */ React.createElement(ResourcesTabs, null))), /* @__PURE__ */ React.createElement("section", { className: "section reveal", style: { background: "var(--bg-alt)" } }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "section-head" }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, "Common questions")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Frequently Asked Questions"))), /* @__PURE__ */ React.createElement(ExportFaq, null))), /* @__PURE__ */ React.createElement(Footer, { navigate }));
  }
  var JOURNEY_PHASES, EXPORT_CUSTOMER_LOGOS, Export_default;
  var init_Export = __esm({
    "src/pages/Export/index.jsx"() {
      JOURNEY_PHASES = [
        {
          phase: "01",
          name: "Enquiry & Proposal",
          steps: [
            {
              n: "01.1",
              title: "Technical Review",
              desc: "Customer drawings, application requirements and compliance expectations reviewed.",
              items: ["Drawings review", "Technical clarification", "Customer discussions"]
            },
            {
              n: "01.2",
              title: "Commercial Proposal",
              desc: "Commercial offer prepared with delivery schedule, Incoterms and lead time commitments.",
              items: ["Commercial offer", "Incoterms", "Lead time estimation"]
            }
          ]
        },
        {
          phase: "02",
          name: "Engineering & Production",
          steps: [
            {
              n: "02.1",
              title: "Engineering & Manufacturing",
              desc: "Design, planning and manufacturing executed for the confirmed order.",
              items: ["Transformers", "Control Panels", "Battery Chargers", "Custom assemblies"]
            },
            {
              n: "02.2",
              title: "Testing & FAT",
              desc: "Routine quality tests and Factory Acceptance Tests conducted before dispatch.",
              items: ["Routine tests", "Factory Acceptance Test", "Third-party inspection"]
            }
          ]
        },
        {
          phase: "03",
          name: "Documentation & Logistics",
          steps: [
            {
              n: "03.1",
              title: "Documentation",
              desc: "Export documentation prepared and verified for international shipment compliance.",
              items: ["Packing List", "Commercial Invoice", "Certificate of Origin", "Test Certificates"]
            },
            {
              n: "03.2",
              title: "Shipping & Customs",
              desc: "Export clearance and freight coordination managed end-to-end.",
              items: ["Export clearance", "Freight coordination", "Customs support"]
            }
          ]
        },
        {
          phase: "04",
          name: "Delivery & Support",
          steps: [
            {
              n: "04.1",
              title: "Delivery",
              desc: "Shipment dispatched on schedule with material handling and customer coordination.",
              items: ["On-time shipment", "Material handling", "Customer coordination"]
            },
            {
              n: "04.2",
              title: "After-Sales Support",
              desc: "Technical assistance, spare part guidance and responsive customer communication post-delivery.",
              items: ["Technical support", "Spare assistance", "Customer communication"]
            }
          ]
        }
      ];
      EXPORT_CUSTOMER_LOGOS = [
        "./assets/Logo1.png",
        "./assets/Logo2.webp",
        "./assets/Logo3.png",
        "./assets/Logo4.1.png",
        "./assets/Logo5.webp",
        "./assets/Logo6.jpg",
        "./assets/Logo 7.png",
        "./assets/Logo8.png",
        "./assets/Logo9.webp"
      ];
      window.PageExport = PageExport;
      Export_default = PageExport;
    }
  });

  // src/pages/Contact/index.jsx
  function PageContact({ navigate, focusId }) {
    useReveal();
    React.useEffect(() => {
      const hash = window.location.hash;
      const searchFocus = focusId || new URLSearchParams(window.location.search).get("focus");
      if (searchFocus === "map" || searchFocus === "address" || hash === "#map" || hash === "#contact-map") {
        setTimeout(() => {
          const el = document.getElementById("contact-map") || document.querySelector(".contact-map");
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }, 300);
      }
    }, [focusId]);
    const [submitted, setSubmitted] = React.useState(false);
    React.useEffect(() => {
      if (!submitted) return;
      const t = setTimeout(() => {
        const el = document.querySelector(".success-summary");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
      return () => clearTimeout(t);
    }, [submitted]);
    const [form, setForm] = React.useState({
      name: "",
      company: "",
      email: "",
      phone: "",
      country: "",
      product: "",
      industry: "",
      reqType: "",
      qty: "",
      message: ""
    });
    const [file, setFile] = React.useState(null);
    const [fileError, setFileError] = React.useState("");
    const [errors, setErrors] = React.useState({});
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitError, setSubmitError] = React.useState("");
    const [leadId, setLeadId] = React.useState("");
    const submissionIdRef = React.useRef(
      crypto.randomUUID()
    );
    const set = (k, v) => setForm((f) => __spreadProps(__spreadValues({}, f), { [k]: v }));
    const fileToBase64 = (selectedFile) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          try {
            const result = String(reader.result || "");
            const base64Data = result.split(",")[1];
            if (!base64Data) {
              reject(new Error("Unable to process the selected document."));
              return;
            }
            resolve(base64Data);
          } catch (error) {
            reject(new Error("Unable to process the selected document."));
          }
        };
        reader.onerror = () => {
          reject(new Error("Unable to read the selected document."));
        };
        reader.readAsDataURL(selectedFile);
      });
    };
    const onFileChange = (e) => {
      const f = e.target.files && e.target.files[0];
      if (!f) {
        setFile(null);
        setFileError("");
        return;
      }
      const okTypes = ["pdf", "doc", "docx", "xls", "xlsx"];
      const ext = (f.name.split(".").pop() || "").toLowerCase();
      if (!okTypes.includes(ext)) {
        setFileError("Please upload a PDF, Word or Excel file.");
        setFile(null);
        e.target.value = "";
        return;
      }
      if (f.size > 8 * 1024 * 1024) {
        setFileError("Please keep the file under 8 MB.");
        setFile(null);
        e.target.value = "";
        return;
      }
      setFile(f);
      setFileError("");
    };
    const clearFile = () => {
      setFile(null);
      setFileError("");
      const input = document.getElementById("rfq-file-input");
      if (input) input.value = "";
    };
    const submit = async (e) => {
      e.preventDefault();
      if (isSubmitting) {
        return;
      }
      const errs = {};
      if (!form.name.trim()) {
        errs.name = "Required";
      }
      if (!form.company.trim()) {
        errs.company = "Required";
      }
      if (!form.email.trim()) {
        errs.email = "Required";
      } else if (!/.+@.+\..+/.test(form.email)) {
        errs.email = "Invalid email";
      }
      const phoneDigits = form.phone.replace(/\D/g, "");
      if (!form.phone.trim()) {
        errs.phone = "Required";
      } else if (!/^[+\d\s\-()]{7,25}$/.test(form.phone.trim()) || phoneDigits.length < 7) {
        errs.phone = "Invalid phone number";
      }
      if (!form.country.trim()) {
        errs.country = "Required";
      }
      setErrors(errs);
      setSubmitError("");
      if (Object.keys(errs).length > 0) {
        setTimeout(() => {
          const firstErrEl = document.querySelector(".form-row.has-err, .form-err");
          if (firstErrEl) {
            firstErrEl.scrollIntoView({ behavior: "smooth", block: "center" });
            const inputEl = firstErrEl.querySelector("input, select, textarea");
            if (inputEl && typeof inputEl.focus === "function") {
              try {
                inputEl.focus({ preventScroll: true });
              } catch (err) {
              }
            }
          } else {
            const formElement = document.querySelector(".contact-form");
            if (formElement) {
              formElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }
        }, 50);
        return;
      }
      setIsSubmitting(true);
      let uploadedDocument = null;
      try {
        if (file) {
          const base64Data = await fileToBase64(file);
          uploadedDocument = {
            name: file.name,
            size: file.size,
            type: file.type,
            data: base64Data
          };
        }
      } catch (error) {
        console.error("File processing error:", error);
        setSubmitError(error.message || "Unable to process the selected document.");
        setIsSubmitting(false);
        return;
      }
      const payload = {
        submissionId: submissionIdRef.current,
        leadSource: "Website RFQ",
        name: form.name.trim(),
        company: form.company.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        country: form.country.trim(),
        productInterest: form.product,
        industry: form.industry,
        requirementType: form.reqType,
        quantityRange: form.qty,
        message: form.message.trim(),
        uploadedDocument,
        receivedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      setIsSubmitting(false);
      setSubmitted(true);
      submitInBackground(payload);
    };
    const submitInBackground = async (payload) => {
      const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwJ-_zxHK3TsfBNDv--ecQvNgiqenFzFgt0C3S37vvB0eFkK8dKLvzdfObkSLjj5BsYCQ/exec";
      try {
        const response = await fetch(
          APPS_SCRIPT_URL,
          {
            method: "POST",
            body: JSON.stringify(payload)
          }
        );
        const raw = await response.text();
        let result;
        try {
          result = JSON.parse(raw);
        } catch (e) {
          console.error("NOT JSON", raw);
          throw e;
        }
        if (!result.success) {
          throw new Error(result.message || "Unable to submit your requirement.");
        }
        setLeadId(result.leadId || "");
      } catch (error) {
        console.error("Background submission failed, saving locally for recovery:", error);
        try {
          const pending = JSON.parse(localStorage.getItem("dynalektric_pending_rfq") || "[]");
          pending.push(payload);
          localStorage.setItem("dynalektric_pending_rfq", JSON.stringify(pending));
        } catch (storageError) {
          console.error("Unable to persist failed submission:", storageError);
        }
      }
    };
    if (submitted) {
      return /* @__PURE__ */ React.createElement("main", { className: "page-enter" }, /* @__PURE__ */ React.createElement("section", { className: "page-hero page-hero--split" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "page-hero-copy" }, /* @__PURE__ */ React.createElement("div", { className: "mono" }, "CONTACT DYNALEKTRIC"), /* @__PURE__ */ React.createElement("h1", null, "Thank you. Your requirement has been received.")), /* @__PURE__ */ React.createElement("div", { className: "page-hero-visual" }, /* @__PURE__ */ React.createElement(
        "img",
        {
          src: "./assets/contact-hero.png",
          alt: "Dynalektric precision magnetics and transformer manufacturing",
          width: "720",
          height: "540",
          decoding: "async",
          fetchpriority: "high"
        }
      )))), /* @__PURE__ */ React.createElement("section", { className: "section" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "success-state" }, /* @__PURE__ */ React.createElement("div", { className: "check" }, "\u2713"), /* @__PURE__ */ React.createElement("h2", { style: { marginBottom: 16 } }, "Your requirement has been received."), /* @__PURE__ */ React.createElement("p", { className: "lead", style: { margin: "0 auto 24px" } }, "Thank you. Our team will review the details and respond with the next steps within one business day."), /* @__PURE__ */ React.createElement("div", { className: "success-summary" }, /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "mono",
          style: {
            color: "var(--ink-muted)",
            marginBottom: 12
          }
        },
        "Submission reference"
      ), leadId && /* @__PURE__ */ React.createElement("div", { className: "success-row" }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, "RFQ Reference"), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("strong", null, leadId))), form.product && /* @__PURE__ */ React.createElement("div", { className: "success-row" }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, "Product interest"), /* @__PURE__ */ React.createElement("span", null, (PRODUCTS.find((p) => p.id === form.product) || {}).name || form.product)), form.industry && /* @__PURE__ */ React.createElement("div", { className: "success-row" }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, "Industry"), /* @__PURE__ */ React.createElement("span", null, (INDUSTRY_OPTS.find((i) => i.id === form.industry) || {}).label || form.industry)), form.reqType && /* @__PURE__ */ React.createElement("div", { className: "success-row" }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, "Requirement type"), /* @__PURE__ */ React.createElement("span", null, form.reqType)), form.qty && /* @__PURE__ */ React.createElement("div", { className: "success-row" }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, "Quantity range"), /* @__PURE__ */ React.createElement("span", null, form.qty)), file && /* @__PURE__ */ React.createElement("div", { className: "success-row" }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, "Document"), /* @__PURE__ */ React.createElement("span", null, file.name)))))), /* @__PURE__ */ React.createElement(Footer, { navigate }));
    }
    return /* @__PURE__ */ React.createElement("main", { className: "page-enter" }, /* @__PURE__ */ React.createElement("section", { className: "page-hero page-hero--split contact-hero" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "page-hero-copy" }, /* @__PURE__ */ React.createElement("div", { className: "mono" }, "CONTACT DYNALEKTRIC"), /* @__PURE__ */ React.createElement("h1", null, "Discuss your engineering requirement."), /* @__PURE__ */ React.createElement("p", { className: "lead" }, "Share your product requirement, application details and a supporting document. Our team will review and respond with the next steps.")), /* @__PURE__ */ React.createElement("div", { className: "page-hero-visual" }, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: "./assets/contact-hero.png",
        alt: "Dynalektric precision magnetics and transformer manufacturing",
        width: "720",
        height: "540",
        decoding: "async",
        fetchpriority: "high"
      }
    )))), /* @__PURE__ */ React.createElement("section", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "contact-grid" }, /* @__PURE__ */ React.createElement("form", { className: "contact-form reveal", onSubmit: submit, noValidate: true }, /* @__PURE__ */ React.createElement("div", { className: "who-you-are-block" }, /* @__PURE__ */ React.createElement("div", { className: "form-section-head" }, /* @__PURE__ */ React.createElement("div", { className: "mono", style: { color: "var(--red)", fontWeight: 600 } }, "Contact"), /* @__PURE__ */ React.createElement("h2", null, "Tell us who you are.")), /* @__PURE__ */ React.createElement("div", { className: "contact-form-row" }, /* @__PURE__ */ React.createElement("div", { className: `form-row ${errors.name ? "has-err" : ""}` }, /* @__PURE__ */ React.createElement("label", null, "Name *"), /* @__PURE__ */ React.createElement("input", { value: form.name, onChange: (e) => set("name", e.target.value), placeholder: "Full name" }), errors.name && /* @__PURE__ */ React.createElement("span", { className: "form-err" }, errors.name)), /* @__PURE__ */ React.createElement("div", { className: `form-row ${errors.company ? "has-err" : ""}` }, /* @__PURE__ */ React.createElement("label", null, "Company *"), /* @__PURE__ */ React.createElement("input", { value: form.company, onChange: (e) => set("company", e.target.value), placeholder: "Organisation name" }), errors.company && /* @__PURE__ */ React.createElement("span", { className: "form-err" }, errors.company))), /* @__PURE__ */ React.createElement("div", { className: "contact-form-row" }, /* @__PURE__ */ React.createElement("div", { className: `form-row ${errors.email ? "has-err" : ""}` }, /* @__PURE__ */ React.createElement("label", null, "Email *"), /* @__PURE__ */ React.createElement("input", { type: "email", value: form.email, onChange: (e) => set("email", e.target.value), placeholder: "you@company.com" }), errors.email && /* @__PURE__ */ React.createElement("span", { className: "form-err" }, errors.email)), /* @__PURE__ */ React.createElement("div", { className: `form-row ${errors.phone ? "has-err" : ""}` }, /* @__PURE__ */ React.createElement("label", null, "Phone *"), /* @__PURE__ */ React.createElement("input", { type: "tel", value: form.phone, onChange: (e) => set("phone", e.target.value), placeholder: "+ country code, number" }), errors.phone && /* @__PURE__ */ React.createElement("span", { className: "form-err" }, errors.phone))), /* @__PURE__ */ React.createElement("div", { className: `form-row ${errors.country ? "has-err" : ""}` }, /* @__PURE__ */ React.createElement("label", null, "Country *"), /* @__PURE__ */ React.createElement("input", { value: form.country, onChange: (e) => set("country", e.target.value), placeholder: "e.g. Germany, UAE, USA, India" }), errors.country && /* @__PURE__ */ React.createElement("span", { className: "form-err" }, errors.country))), /* @__PURE__ */ React.createElement("div", { className: "form-section-head req-head" }, /* @__PURE__ */ React.createElement("div", { className: "mono", style: { color: "var(--accent)", fontWeight: 600 } }, "Requirement"), /* @__PURE__ */ React.createElement("h2", null, "Tell us what you need.")), /* @__PURE__ */ React.createElement("div", { className: "contact-form-row" }, /* @__PURE__ */ React.createElement("div", { className: "form-row" }, /* @__PURE__ */ React.createElement("label", null, "Product interest"), /* @__PURE__ */ React.createElement("select", { value: form.product, onChange: (e) => set("product", e.target.value) }, /* @__PURE__ */ React.createElement("option", { value: "" }, "Select a product group"), PRODUCTS.map((p) => /* @__PURE__ */ React.createElement("option", { key: p.id, value: p.id }, p.name)), /* @__PURE__ */ React.createElement("option", { value: "notsure" }, "Not sure"))), /* @__PURE__ */ React.createElement("div", { className: "form-row" }, /* @__PURE__ */ React.createElement("label", null, "Industry or application"), /* @__PURE__ */ React.createElement("select", { value: form.industry, onChange: (e) => set("industry", e.target.value) }, /* @__PURE__ */ React.createElement("option", { value: "" }, "Select an industry"), INDUSTRY_OPTS.map((i) => /* @__PURE__ */ React.createElement("option", { key: i.id, value: i.id }, i.label))))), /* @__PURE__ */ React.createElement("div", { className: "contact-form-row" }, /* @__PURE__ */ React.createElement("div", { className: "form-row" }, /* @__PURE__ */ React.createElement("label", null, "Requirement type"), /* @__PURE__ */ React.createElement("select", { value: form.reqType, onChange: (e) => set("reqType", e.target.value) }, /* @__PURE__ */ React.createElement("option", { value: "" }, "Select requirement type"), REQ_TYPES.map((r) => /* @__PURE__ */ React.createElement("option", { key: r, value: r }, r)))), /* @__PURE__ */ React.createElement("div", { className: "form-row" }, /* @__PURE__ */ React.createElement("label", null, "Quantity range"), /* @__PURE__ */ React.createElement("select", { value: form.qty, onChange: (e) => set("qty", e.target.value) }, /* @__PURE__ */ React.createElement("option", { value: "" }, "Select quantity range"), QTY_RANGES.map((q) => /* @__PURE__ */ React.createElement("option", { key: q, value: q }, q))))), /* @__PURE__ */ React.createElement("div", { className: "form-row" }, /* @__PURE__ */ React.createElement("label", null, "Message or requirement details"), /* @__PURE__ */ React.createElement(
      "textarea",
      {
        rows: "5",
        value: form.message,
        onChange: (e) => set("message", e.target.value),
        placeholder: "Application, specification, ratings, environment, timeline."
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "form-row" }, /* @__PURE__ */ React.createElement("label", null, "Supporting document"), /* @__PURE__ */ React.createElement("div", { className: "rfq-upload" }, /* @__PURE__ */ React.createElement(
      "input",
      {
        id: "rfq-file-input",
        type: "file",
        accept: ACCEPTED_FILE_TYPES,
        onChange: onFileChange,
        hidden: true
      }
    ), !file ? /* @__PURE__ */ React.createElement("label", { htmlFor: "rfq-file-input", className: "rfq-upload-btn" }, /* @__PURE__ */ React.createElement("span", { className: "mono" }, "+"), /* @__PURE__ */ React.createElement("span", null, "Choose a file")) : /* @__PURE__ */ React.createElement("div", { className: "rfq-upload-file" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 500 } }, file.name), /* @__PURE__ */ React.createElement("div", { className: "mono", style: { color: "var(--ink-muted)", marginTop: 2 } }, Math.ceil(file.size / 1024), " KB")), /* @__PURE__ */ React.createElement("button", { type: "button", className: "rfq-upload-remove", onClick: clearFile, "aria-label": "Remove file" }, "Remove"))), /* @__PURE__ */ React.createElement("p", { className: "rfq-upload-note" }, "Please upload one supporting document in PDF, Word or Excel format. Large drawing files are not required at this stage."), fileError && /* @__PURE__ */ React.createElement("span", { className: "form-err" }, fileError)), submitError && /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "form-err",
        style: {
          marginTop: 16,
          marginBottom: 16
        }
      },
      submitError
    ), /* @__PURE__ */ React.createElement("div", { className: "form-footer" }, /* @__PURE__ */ React.createElement("p", { className: "contact-privacy-text", style: { maxWidth: "46ch" } }, "Your details are used only to respond to this enquiry. They are not shared with third parties. Final supply terms are subject to engineering review."), /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "submit",
        className: "btn btn-primary",
        disabled: isSubmitting
      },
      isSubmitting ? "Submitting..." : /* @__PURE__ */ React.createElement(React.Fragment, null, "Submit RFQ", " ", /* @__PURE__ */ React.createElement("span", { className: "arrow" }, "\u2192"))
    ))), /* @__PURE__ */ React.createElement("aside", { className: "contact-info reveal" }, /* @__PURE__ */ React.createElement("div", { className: "contact-info-block" }, /* @__PURE__ */ React.createElement("div", { className: "label" }, "Sales enquiries"), /* @__PURE__ */ React.createElement("div", { className: "value" }, "sales01@dynalektric.com")), /* @__PURE__ */ React.createElement("div", { className: "contact-info-block" }, /* @__PURE__ */ React.createElement("div", { className: "label" }, "General email"), /* @__PURE__ */ React.createElement("div", { className: "value" }, "cs@dynalektric.com")), /* @__PURE__ */ React.createElement("div", { className: "contact-info-block" }, /* @__PURE__ */ React.createElement("div", { className: "label" }, "Phone"), /* @__PURE__ */ React.createElement("div", { className: "value" }, "+91-903 554 2821"), /* @__PURE__ */ React.createElement("div", { className: "value" }, "+91-903 554 2827")), /* @__PURE__ */ React.createElement("div", { className: "contact-info-block" }, /* @__PURE__ */ React.createElement("div", { className: "label" }, "Address"), /* @__PURE__ */ React.createElement("div", { className: "value" }, "Dynalektric Equipment Pvt. Ltd.", /* @__PURE__ */ React.createElement("br", null), "Manufacturing facility,", /* @__PURE__ */ React.createElement("br", null), "No-49/2 Vaderamanchanahalli Village, Kallubalu, Anekal Taluk, Jigani Hobli, Bangalore, India- 560105")), /* @__PURE__ */ React.createElement("div", { className: "contact-info-block" }, /* @__PURE__ */ React.createElement("div", { className: "label" }, "Working hours"), /* @__PURE__ */ React.createElement("div", { className: "value" }, "Mon to Sat, 09:00 to 21:00 IST")), /* @__PURE__ */ React.createElement("div", { className: "contact-info-block" }, /* @__PURE__ */ React.createElement("div", { className: "label" }, "For procurement teams"), /* @__PURE__ */ React.createElement("div", { className: "value" }, "Request our supplier qualification pack, ISO certificates and sample test reports by email.")), /* @__PURE__ */ React.createElement("div", { className: "contact-info-block" }, /* @__PURE__ */ React.createElement("div", { className: "label" }, "Response window"), /* @__PURE__ */ React.createElement("div", { className: "value" }, "One business day for complete specifications. Larger scopes may take longer, subject to engineering review.")), /* @__PURE__ */ React.createElement("div", { className: "contact-map", id: "contact-map" }, /* @__PURE__ */ React.createElement(
      "iframe",
      {
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7782.2830804704245!2d77.62583052848488!3d12.769318741084197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae69fde1bc74cd%3A0x9dbf3aaa6f14c1c7!2sDynalektric%20Equipment%20Private%20Limited!5e0!3m2!1sen!2sin!4v1781670618586!5m2!1sen!2sin",
        width: "100%",
        height: "400",
        style: {
          border: 0,
          borderRadius: "0"
        },
        allowFullScreen: "",
        loading: "lazy",
        referrerPolicy: "no-referrer-when-downgrade",
        title: "Dynalektric Equipment Private Limited"
      }
    ))))), /* @__PURE__ */ React.createElement(Footer, { navigate }));
  }
  var REQ_TYPES, QTY_RANGES, INDUSTRY_OPTS, ACCEPTED_FILE_TYPES, Contact_default;
  var init_Contact = __esm({
    "src/pages/Contact/index.jsx"() {
      REQ_TYPES = [
        "New requirement",
        "Replacement",
        "Custom modification",
        "Technical clarification",
        "Supplier qualification",
        "Export enquiry"
      ];
      QTY_RANGES = [
        "Prototype",
        "Small batch",
        "Production scale",
        "Not confirmed"
      ];
      INDUSTRY_OPTS = [
        { id: "railways", label: "Railway & Traction" },
        { id: "renewables", label: "Renewable Sectors" },
        { id: "powergrid", label: "Power & Utilities" },
        { id: "heavy", label: "Heavy Industries" },
        { id: "mhe", label: "Material Handling & Warehousing" },
        { id: "datacenter", label: "Data Centers" },
        { id: "other", label: "Other" }
      ];
      ACCEPTED_FILE_TYPES = ".pdf,.doc,.docx,.xls,.xlsx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
      window.PageContact = PageContact;
      Contact_default = PageContact;
    }
  });

  // src/app.jsx
  var require_app = __commonJS({
    "src/app.jsx"() {
      init_config();
      init_useTweaks();
      init_Header();
      init_TweaksPanel();
      init_Home();
      init_About();
      init_Products();
      init_Industries();
      init_Innovation();
      init_Export();
      init_Contact();
      var PAGE_ID = document.body.dataset.page || "home";
      var focusId = new URLSearchParams(window.location.search).get("focus") || null;
      var navigate = (id, focus = null) => {
        const base = PAGE_URLS[id] || PAGE_URLS.home;
        window.location.href = focus ? base + "?focus=" + encodeURIComponent(focus) : base;
      };
      window.__navigate = navigate;
      function App() {
        const tw = useTweaks(TWEAK_DEFAULTS);
        const t = tw.values;
        const setTweak = tw.set;
        React.useEffect(() => {
          const accent = ACCENT_OPTIONS[t.accent] || ACCENT_OPTIONS[0];
          const root = document.documentElement;
          if (typeof t.accent === "number") {
            root.style.setProperty("--accent", accent[0]);
            root.style.setProperty("--accent-2", accent[1]);
          } else if (typeof t.accent === "string") {
            root.style.setProperty("--accent", t.accent);
          }
          document.body.dataset.texture = t.texture || "clean";
          document.body.dataset.density = t.density || "comfortable";
          root.style.setProperty("--font-display", "'Montserrat', 'Helvetica Neue', Arial, sans-serif");
          root.style.setProperty("--font-body", "'Montserrat', 'Helvetica Neue', Arial, sans-serif");
          root.style.setProperty("--font-mono", "'Montserrat', 'Helvetica Neue', Arial, sans-serif");
        }, [t.accent, t.texture, t.density]);
        const renderPage = () => {
          const props = { navigate, focusId, tweaks: t };
          switch (PAGE_ID) {
            case "home":
              return /* @__PURE__ */ React.createElement(Home_default, __spreadValues({}, props));
            case "about":
              return /* @__PURE__ */ React.createElement(About_default, __spreadValues({}, props));
            case "products":
              return /* @__PURE__ */ React.createElement(Products_default, __spreadValues({}, props));
            case "industries":
              return /* @__PURE__ */ React.createElement(Industries_default, __spreadValues({}, props));
            case "rnd":
              return /* @__PURE__ */ React.createElement(Innovation_default, __spreadValues({}, props));
            case "export":
              return /* @__PURE__ */ React.createElement(Export_default, __spreadValues({}, props));
            case "contact":
              return /* @__PURE__ */ React.createElement(Contact_default, __spreadValues({}, props));
            default:
              return /* @__PURE__ */ React.createElement(Home_default, __spreadValues({}, props));
          }
        };
        return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header_default, null), renderPage(), /* @__PURE__ */ React.createElement(DynaTweaksPanel, { t, setTweak }));
      }
      function DynaTweaksPanel({ t, setTweak }) {
        return /* @__PURE__ */ React.createElement(TweaksPanel_default, { title: "Tweaks" }, /* @__PURE__ */ React.createElement(TweakSection, { title: "Accent palette" }, /* @__PURE__ */ React.createElement(
          TweakColor,
          {
            label: "Accent pair",
            value: typeof t.accent === "number" ? t.accent : 0,
            options: ACCENT_OPTIONS,
            onChange: (v) => setTweak("accent", v)
          }
        )), /* @__PURE__ */ React.createElement(TweakSection, { title: "Background texture" }, /* @__PURE__ */ React.createElement(
          TweakRadio,
          {
            label: "Surface",
            value: t.texture,
            options: [
              { label: "Clean", value: "clean" },
              { label: "Grid", value: "grid" },
              { label: "Dots", value: "dots" }
            ],
            onChange: (v) => setTweak("texture", v)
          }
        )), /* @__PURE__ */ React.createElement(TweakSection, { title: "Density" }, /* @__PURE__ */ React.createElement(
          TweakRadio,
          {
            label: "Spacing",
            value: t.density,
            options: [
              { label: "Comfortable", value: "comfortable" },
              { label: "Compact", value: "compact" }
            ],
            onChange: (v) => setTweak("density", v)
          }
        )));
      }
      ReactDOM.createRoot(document.getElementById("app")).render(/* @__PURE__ */ React.createElement(App, null));
    }
  });
  require_app();
})();
