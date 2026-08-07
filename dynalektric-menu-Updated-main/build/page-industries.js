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
window.PageIndustries = PageIndustries;

