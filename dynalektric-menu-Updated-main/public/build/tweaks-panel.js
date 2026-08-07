var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
const __TWEAKS_STYLE = `
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
function useTweaks(defaults) {
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
const __TwkCheck = ({ light }) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 14 14", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement(
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
Object.assign(window, {
  useTweaks,
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


