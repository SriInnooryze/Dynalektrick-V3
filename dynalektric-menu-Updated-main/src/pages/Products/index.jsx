/* Products page component */

const GROUP_IMG_FILENAME = {
  'control-panels': 'Control-hero.png',
  'cross-segment': 'card-integrated-optimized.png'
};
const SUBCAT_IMG_FILENAME = {
  '02.3': '02.3.png',
  '02.4': '02.4.png',
  '03.3': '03.3.png',
  '04.4': '04.4.png',
  '01.7': '01.7.jpeg',
  '01.8': '01.8.jpeg',
};
const SUBCAT_IMG_SET = new Set([
  '01.1','01.2','01.3','01.4','01.5','01.6','01.7','01.8',
  '02.1','02.2','02.3','02.4',
  '03.1','03.2','03.3',
  '04.1','04.2','04.3','04.4','04.5','04.6','04.7','04.8',
]);

function PageProducts({ navigate, focusId }) {
  useReveal();

  const initialGroup = (focusId && PRODUCTS.find(p => p.id === focusId)) ? focusId : PRODUCTS[0].id;
  const [activeGroup, setActiveGroup] = React.useState(initialGroup);
  const [activeSubByGroup, setActiveSubByGroup] = React.useState(() =>
    PRODUCTS.reduce((acc, p) => { acc[p.id] = p.subcategories[0].code; return acc; }, {})
  );

  const group = PRODUCTS.find(p => p.id === activeGroup) || PRODUCTS[0];
  const activeSubCode = activeSubByGroup[group.id];
  const sub = group.subcategories.find(s => s.code === activeSubCode) || group.subcategories[0];
  const subDetail = (window.SUBCAT_DETAIL || SUBCAT_DETAIL)[sub.code] || {};

  React.useEffect(() => {
    if (focusId && focusId !== activeGroup && PRODUCTS.find(p => p.id === focusId)) {
      setActiveGroup(focusId);
    }
  }, [focusId]);

  const detailRef = React.useRef(null);
  const [detailAnimKey, setDetailAnimKey] = React.useState(0);

  React.useEffect(() => {
    if (detailAnimKey === 0) return;
    const el = detailRef.current;
    if (!el) return;
    el.classList.remove('is-refreshed');
    void el.offsetWidth;
    el.classList.add('is-refreshed');
    const t = setTimeout(() => {
      if (detailRef.current) detailRef.current.classList.remove('is-refreshed');
    }, 600);
    return () => clearTimeout(t);
  }, [detailAnimKey]);

  const selectGroup = (id) => {
    setActiveGroup(id);
    const el = document.getElementById('product-explorer');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const selectSub = (code) => {
    setActiveSubByGroup(s => ({ ...s, [group.id]: code }));
    setDetailAnimKey(k => k + 1);
    setTimeout(() => {
      if (detailRef.current) {
        const top = detailRef.current.getBoundingClientRect().top + window.scrollY - 80 - 16;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 60);
  };

  return (
    <main className="page-enter">
      <section className="page-hero page-hero--split">
        <div className="container">
          <div className="page-hero-copy">
            <div className="mono">PRODUCTS AND SOLUTIONS</div>
            <h1>Electrical and electronics products for industrial applications.</h1>
            <p className="lead">
              Custom magnetics, power systems, control panels and integrated assemblies, engineered for industrial requirements across six sectors. Select a product group to explore specifications.
            </p>
          </div>
          <div className="page-hero-visual">
            <img
              src="./assets/Product_hero.png"
              alt="Dynalektric control panel and power electronics manufacturing"
              width="720"
              height="540"
              decoding="async"
              fetchpriority="high"
            />
          </div>
        </div>
      </section>

      <section className="section" id="product-explorer">
        <div className="container">

          <nav className="prodx-tabs" aria-label="Select product group">
            {PRODUCTS.map(p => (
              <button
                key={p.id}
                className={`prodx-tab ${activeGroup === p.id ? 'is-active' : ''}`}
                onClick={() => selectGroup(p.id)}
                aria-current={activeGroup === p.id ? 'true' : undefined}
              >
                <span className="mono num">{p.num}</span>
                <span>{p.name}</span>
              </button>
            ))}
          </nav>

          <div className="prodx-layout">

            <aside className="prodx-rail" aria-label="Product groups">
              <div className="prodx-rail-head">
                <div className="mono" style={{ color: 'var(--ink-muted)' }}>Product groups</div>
                <div className="mono" style={{ color: 'var(--accent)', fontWeight: 600 }}>{PRODUCTS.length}</div>
              </div>
              {PRODUCTS.map(p => (
                <button
                  key={p.id}
                  className={`prodx-rail-item ${activeGroup === p.id ? 'is-active' : ''}`}
                  onClick={() => selectGroup(p.id)}
                  aria-current={activeGroup === p.id ? 'true' : undefined}
                >
                  <span className="num">{p.num}</span>
                  <span className="name">{p.name}</span>
                  <span className="count mono">{p.subcategories.length}</span>
                </button>
              ))}

              <div className="prodx-rail-cta">
                <div className="mono" style={{ color: 'var(--ink-muted)', marginBottom: 8 }}>Need help choosing?</div>
                <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => navigate('contact')}>
                  Talk to engineering
                </button>
              </div>
            </aside>

            <div className="prodx-main">

              <header className="prodx-group-head">
                <div className="prodx-group-num">{group.num}</div>
                <div className="prodx-group-meta">
                  <h2>{group.name}</h2>
                  <p className="lead">{group.tagline}</p>
                </div>
              </header>

              <div className="prodx-group-body">
                <div className="prodx-group-overview">
                  <div className="mono" style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: 8 }}>Overview</div>
                  <p>{group.overview}</p>
                </div>
                <div className="prodx-group-image">
                 <img
                  src={`./assets/${GROUP_IMG_FILENAME[group.id] || group.id + '.jpg'}`}
                 alt={group.name}
                 width="720"
                 height="540"
                 loading="lazy"
                 decoding="async"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                    borderRadius: "0",
                    display: "block"
                    }}
                 />
               </div>
              </div>

              <div className="prodx-group-specs">
                <div className="mono" style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: 16 }}>Specification placeholders for {group.name}</div>
                <div className="prodx-spec-row">
                  {group.placeholders.map(s => (
                    <div className="prodx-spec-cell" key={s.k}>
                      <div className="k">{s.k}</div>
                      <div className="v">{s.v}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="prodx-subcat">
                <div className="prodx-subcat-head">
                  <div>
                    <div className="mono" style={{ color: 'var(--ink-muted)' }}>Sub-category explorer</div>
                    <h3 style={{ marginTop: 6 }}>Select a sub-category</h3>
                  </div>
                  <div className="mono" style={{ color: 'var(--ink-muted)' }}>
                    {group.subcategories.length} items in {group.name}
                  </div>
                </div>

                <div className="prodx-subcat-grid">
                  {group.subcategories.map(s => {
                    const isActive = s.code === activeSubCode;
                    return (
                      <button
                        key={s.code}
                        className={`prodx-subcat-card ${isActive ? 'is-active' : ''}`}
                        onClick={() => selectSub(s.code)}
                        aria-pressed={isActive}
                      >
                        <div className="code mono">{s.code}</div>
                        <div className="name">{s.name}</div>
                        <div className="detail">{s.detail}</div>
                        <div className="card-foot">
                          <span className="mono">{isActive ? 'Showing' : 'View details'}</span>
                          <span className="arrow">→</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <article ref={detailRef} id="subcat-detail" className="prodx-detail" aria-live="polite">
                <header
                  className="prodx-detail-head"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 350px",
                    gap: "40px",
                    alignItems: "center"
                  }}
                >
                  <div>
                    <h3>{sub.name}</h3>
                    <p>{subDetail.description || sub.detail}</p>
                  </div>

                  <div className="prodx-detail-img-wrap">
                    {SUBCAT_IMG_SET.has(sub.code) ? (
                      <img
                        src={`./assets/${SUBCAT_IMG_FILENAME[sub.code] || sub.code + '.jpg'}`}
                        alt={sub.name}
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          if (e.target.src.indexOf('.png') !== -1) {
                            e.target.src = `./assets/${sub.code}.jpg`;
                          }
                        }}
                        style={{
                          width: "100%",
                          height: "auto",
                          objectFit: "contain",
                          display: "block"
                        }}
                      />
                    ) : (
                      <div
                        className="prodx-img-placeholder"
                        role="img"
                        aria-label={`${sub.name} — image placeholder, official product photo to be added`}
                      >
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <path d="m21 15-5-5L5 21" />
                        </svg>
                        <span>{`Replace with ${sub.name} image`}</span>
                      </div>
                    )}
                  </div>

                </header>

                <div className="prodx-detail-body">
                  <section className="prodx-detail-block">
                    <h4>Typical applications</h4>
                    <ul className="prodx-list">
                      {(subDetail.applications || []).map((a, i) => (
                        <li key={i}><span className="mono">+</span> <span>{a}</span></li>
                      ))}
                    </ul>
                  </section>

                  <section className="prodx-detail-block prodx-detail-specs">
                    <h4>Specification placeholders</h4>
                    {sub.code === '03.1' ? (
                      <>
                        <div className="prodx-spec-row-pair">
                          {(subDetail.specs || []).slice(0, 4).map(s => (
                            <div className="prodx-spec-cell" key={s.k}>
                              <div className="k">{s.k}</div>
                              <div className="v">{s.v}</div>
                            </div>
                          ))}
                        </div>
                        <div className="prodx-spec-row prodx-spec-row-dense" style={{ marginTop: 16 }}>
                          {(subDetail.specs || []).slice(4).map(s => (
                            <div className="prodx-spec-cell" key={s.k}>
                              <div className="k">{s.k}</div>
                              <div className="v">{s.v}</div>
                            </div>
                          ))}
                        </div>
                      </>
                    ) : (
                      <div className="prodx-spec-row prodx-spec-row-dense">
                        {(subDetail.specs || []).map(s => (
                          <div className="prodx-spec-cell" key={s.k}>
                            <div className="k">{s.k}</div>
                            <div className="v">{s.v}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </section>

                  <section className="prodx-detail-block">
                    <h4>Relevant industries</h4>
                    <div className="prodx-ind-chips">
                      {(subDetail.industries || []).map(iid => {
                        const ind = INDUSTRIES.find(x => x.id === iid);
                        if (!ind) return null;
                        return (
                          <button
                            key={iid}
                            className="prodx-ind-chip"
                            onClick={() => navigate('industries', iid)}
                          >
                            {ind.name} →
                          </button>
                        );
                      })}
                    </div>
                  </section>
                </div>

                <footer className="prodx-detail-cta">
                  <button className="btn btn-primary" onClick={() => navigate('contact')}>
                    Submit RFQ for {sub.name} <span className="arrow">→</span>
                  </button>
                  <button className="btn btn-secondary" onClick={() => navigate('contact')}>
                    Request datasheet
                  </button>
                  <span className="mono prodx-detail-note">Datasheet on request. Final specification subject to engineering review.</span>
                </footer>
              </article>

              <div className="prodx-links">
                <div>
                  <div className="mono" style={{ color: 'var(--ink-muted)', marginBottom: 8 }}>Where it is used</div>
                  <div className="prodx-link-row">
                    {group.industries.slice(0, 4).map(iid => {
                      const ind = INDUSTRIES.find(x => x.id === iid);
                      return ind ? (
                        <a key={iid} onClick={() => navigate('industries', iid)} className="prodx-link">
                          {ind.name} <span className="arrow">→</span>
                        </a>
                      ) : null;
                    })}
                  </div>
                </div>
                <div>
                  <div className="mono" style={{ color: 'var(--ink-muted)', marginBottom: 8 }}>Procurement support</div>
                  <div className="prodx-link-row">
                    <a onClick={() => navigate('export')} className="prodx-link">Export readiness <span className="arrow">→</span></a>
                    <a onClick={() => navigate('contact')} className="prodx-link">Submit RFQ <span className="arrow">→</span></a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <FinalCTA
        navigate={navigate}
        heading={
          <>
            Send a specification.<br className="desktop-br" />
            Get an engineering response<br className="desktop-br" />
            in one business day.
          </>
        }
      />
      <Footer navigate={navigate} />
    </main>
  );
}

window.PageProducts = PageProducts;
export default PageProducts;
