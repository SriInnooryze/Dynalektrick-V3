/* CaseStudyGrid.jsx — Reusable CaseStudyGrid component */

function CaseStudyGrid({ items = CASE_STUDIES, limit }) {
  const data = limit ? items.slice(0, limit) : items;
  return (
    <div className="case-grid">
      {data.map((c, i) => (
        <article className="case-card" key={i}>
          <div className="case-tag">{c.tag}</div>
          <h3>{c.title}</h3>
          <div className="case-section">
            <div className="case-label">Product group</div>
            <div className="case-value">{c.productGroup}</div>
          </div>
          <div className="case-section">
            <div className="case-label">Buyer need</div>
            <div className="case-value">{c.buyerNeed}</div>
          </div>
          <div className="case-section">
            <div className="case-label">Quality or documentation consideration</div>
            <div className="case-value">{c.quality}</div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default CaseStudyGrid;
