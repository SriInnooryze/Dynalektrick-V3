const NAV_LINKS = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About", href: "about" },
  { id: "products", label: "Products & Solutions", href: "products-solutions" },
  { id: "rnd", label: "Innovation Portfolio", href: "innovation-rd" },
  { id: "industries", label: "Industries & Applications", href: "industries-applications" },
  { id: "export", label: "Export", href: "export" },
  { id: "contact", label: "Contact", href: "contact" }
];
function Header() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const currentPage = document.body.dataset.page || "home";
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("header", { className: "topbar", role: "banner" }, /* @__PURE__ */ React.createElement("div", { className: "topbar-inner" }, /* @__PURE__ */ React.createElement("a", { className: "topbar-logo", href: "/", "aria-label": "Dynalektric home" }, /* @__PURE__ */ React.createElement("img", { src: window.__resources && window.__resources.dynaLogo || "assets/dynalektric-logo.png", alt: "Dynalektric, Power Motion Safety", width: "350", height: "150", decoding: "async" })), /* @__PURE__ */ React.createElement("nav", { className: "topbar-nav", "aria-label": "Main navigation" }, NAV_LINKS.map((n) => /* @__PURE__ */ React.createElement(
    "a",
    {
      key: n.id,
      className: "nav-link",
      href: n.href,
      "aria-current": currentPage === n.id ? "page" : void 0
    },
    n.label
  ))), /* @__PURE__ */ React.createElement("div", { className: "topbar-cta" }, /* @__PURE__ */ React.createElement("a", { className: "btn btn-primary", href: "contact", "aria-label": "Submit RFQ on contact page" }, "Submit RFQ ", /* @__PURE__ */ React.createElement("span", { className: "arrow", "aria-hidden": "true" }, "\u2192")), /* @__PURE__ */ React.createElement("button", { className: "menu-btn", onClick: () => setDrawerOpen(true), "aria-label": "Open menu" }, "Menu")))), /* @__PURE__ */ React.createElement("div", { className: `mobile-drawer ${drawerOpen ? "is-open" : ""}`, role: "dialog", "aria-label": "Mobile navigation", "aria-hidden": !drawerOpen }, /* @__PURE__ */ React.createElement("button", { className: "menu-btn close-btn", onClick: () => setDrawerOpen(false), "aria-label": "Close menu" }, "Close"), NAV_LINKS.map((n) => /* @__PURE__ */ React.createElement(
    "a",
    {
      key: n.id,
      className: "nav-link",
      href: n.href,
      "aria-current": currentPage === n.id ? "page" : void 0
    },
    n.label
  )), /* @__PURE__ */ React.createElement("a", { className: "btn btn-primary", href: "contact", style: { marginTop: 24, alignSelf: "flex-start" } }, "Submit RFQ ", /* @__PURE__ */ React.createElement("span", { className: "arrow", "aria-hidden": "true" }, "\u2192"))));
}
window.Header = Header;

