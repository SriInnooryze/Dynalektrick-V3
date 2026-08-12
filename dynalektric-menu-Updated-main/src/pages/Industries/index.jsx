/* Industries page component */

function PageIndustries({ navigate, focusId }) {
  useReveal();
  const [activeRow, setActiveRow] = React.useState(focusId || INDUSTRIES[0].id);
  const [activeCol, setActiveCol] = React.useState(null);

  React.useEffect(() => {
    if (focusId) setActiveRow(focusId);
  }, [focusId]);

  const activeIndustry = INDUSTRIES.find(i => i.id === activeRow) || INDUSTRIES[0];

  return (
    <main className="page-enter">
      <section className="page-hero page-hero--split">
        <div className="container">
          <div className="page-hero-copy">
            <div className="mono">INDUSTRIES AND APPLICATIONS</div>
            <h1>Applications across railways, renewables, utilities and industrial sectors.</h1>
            <p className="lead">
              Six sectors served across Power, Motion and Safety. Use the matrix to see which product groups apply to each industry, then jump into a detailed view of applications and buyer profile.
            </p>
          </div>
          <div className="page-hero-visual industries-hero-visual">
            <img
              src="./assets/Industries-hero.png"
              alt="Railway infrastructure — Dynalektric traction and industrial applications"
              width="800"
              height="800"
              decoding="async"
              fetchpriority="high"
            />
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="mono">Capability matrix</span></div>
            <div>
              <h2>Product group to industry fit.</h2>
            </div>
          </div>

          <div className="matrix-intro">
            <div className="matrix-intro-copy">
              <h3>Interactive capability map</h3>
              <p>Select an industry row to see relevant product groups and applications. Hover a product group column to see all industries it covers.</p>
            </div>
            <div className="matrix-legend">
              <div className="matrix-legend-item">
                <span className="mark filled"></span>
                <span>Active fit</span>
              </div>
              <div className="matrix-legend-item">
                <span className="mark"></span>
                <span>Not currently mapped</span>
              </div>
            </div>
          </div>

          <div className="matrix-wrap">
            <div className="matrix-table-wrap">
            <div className="matrix-table matrix-4col">
              <div className="matrix-cell head">Industry · Product group</div>
              {PRODUCTS.map(p => (
                <div
                  key={p.id}
                  className={`matrix-cell head ${activeCol === p.id ? 'is-active-col' : ''}`}
                  onMouseEnter={() => setActiveCol(p.id)}
                  onMouseLeave={() => setActiveCol(null)}
                  style={{ cursor: 'pointer' }}
                >
                  {p.num}<br />{p.name}
                </div>
              ))}

              {INDUSTRIES.map(ind => (
                <React.Fragment key={ind.id}>
                  <div
                    className={`matrix-cell row-head ${activeRow === ind.id ? 'is-active-row' : ''}`}
                    onClick={() => setActiveRow(ind.id)}
                  >
                    <span className="num">{ind.num}</span>
                    <span>{ind.name}</span>
                  </div>
                  {PRODUCTS.map(p => {
                    const on = p.industries.includes(ind.id);
                    return (
                      <div
                        key={`${ind.id}-${p.id}`}
                        className={`matrix-cell ${on ? 'is-on' : ''} ${activeRow === ind.id ? 'is-active-row' : ''} ${activeCol === p.id ? 'is-active-col' : ''}`}
                        onClick={() => { setActiveRow(ind.id); setActiveCol(p.id); }}
                      >
                        <span className="mark"></span>
                      </div>
                    );
                  })}
                </React.Fragment>
              ))}
            </div>
            </div>

            <aside className="industry-detail">
              <div className="industry-detail-header">
                <div className="num">Selected industry</div>
                <h3>{activeIndustry.name}</h3>
                <p className="industry-desc">{activeIndustry.body}</p>
              </div>

              <div className="industry-detail-section">
                <div className="apps-label">Application examples</div>
                <ul className="apps">
                  {activeIndustry.applications.map((a, i) => <li key={i}>{a}</li>)}
                </ul>
              </div>

              <div className="industry-info-row">
                <div className="industry-info-col">
                  <div className="apps-label">Typical buyer need</div>
                  <p className="industry-info-text">{activeIndustry.buyer}</p>
                </div>
                {activeIndustry.qa && (
                  <div className="industry-info-col">
                    <div className="apps-label">Quality or testing consideration</div>
                    <p className="industry-info-text">{activeIndustry.qa}</p>
                  </div>
                )}
              </div>

              <div className="industry-detail-section" style={{ marginTop: 28 }}>
                <div className="apps-label">Relevant product groups</div>
                <div className="industry-chips-container">
                  {PRODUCTS.filter(p => p.industries.includes(activeRow)).map(p => (
                    <button
                      key={p.id}
                      className="industry-chip"
                      onClick={() => navigate('products', p.id)}
                    >
                      {p.name}
                    </button>
                  ))}
                </div>
              </div>

              <button className="btn btn-primary" style={{ marginTop: 28, width: '100%', justifyContent: 'center' }} onClick={() => navigate('contact')}>
                Submit RFQ for this application <span className="arrow">→</span>
              </button>
            </aside>
          </div>
        </div>
      </section>

      <section className="section reveal" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="mono">Industry deep dive</span></div>
            <div>
              <h2>Six sectors, one engineering approach.</h2>
              <p style={{ marginTop: 16, fontSize: 15, color: 'var(--ink-soft)' }}>
                Detailed view of each industry served: applications, relevant product groups and how to start a conversation.
              </p>
            </div>
          </div>

          <div className="industry-cards">
            {INDUSTRIES.map(ind => (
              <article className="industry-card reveal" key={ind.id} id={`industry-${ind.id}`}>
                <div className="num">{ind.num}</div>
                <div>
                  <h3>{ind.name}</h3>
                  <p className="body" style={{ marginTop: 12 }}>{ind.body}</p>
                  <div className="apps-label" style={{ marginTop: 20 }}>Typical buyer need</div>
                  <p className="body" style={{ marginTop: 4 }}>{ind.buyer}</p>
                  {ind.qa && (
                    <div className="qa-note">
                      <div className="case-label">Quality or testing consideration</div>
                      <div className="case-value">{ind.qa}</div>
                    </div>
                  )}
                </div>
                <div>
                  <div className="apps-label">Application examples</div>
                  <ul className="apps">
                    {ind.applications.map((a, i) => <li key={i}>{a}</li>)}
                  </ul>
                </div>
                <div className="cta-col">
                  <div className="apps-label">Relevant product groups</div>
                  {PRODUCTS.filter(p => p.industries.includes(ind.id)).map(p => (
                    <button key={p.id} className="industry-product-link" onClick={() => navigate('products', p.id)}>
                      {p.name} →
                    </button>
                  ))}
                  <button className="btn btn-primary" style={{ marginTop: 16, width: '100%', justifyContent: 'center' }} onClick={() => navigate('contact')}>
                    Submit RFQ <span className="arrow">→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA navigate={navigate} />
      <Footer navigate={navigate} />
    </main>
  );
}

window.PageIndustries = PageIndustries;
export default PageIndustries;
