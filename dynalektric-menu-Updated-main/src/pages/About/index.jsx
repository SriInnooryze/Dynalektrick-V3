/* About page component */

const FOUNDERS = [
  { num: '01', name: 'Shashank Srivaths', role: 'Managing Director', linkedin: 'https://www.linkedin.com/in/shashankravindrasrivaths/' },
  { num: '02', name: 'Vishnu Srivaths', role: 'Director', linkedin: 'https://www.linkedin.com/in/vsrivaths/' },
  { num: '03', name: 'Sangam Patil', role: 'Director', linkedin: 'https://www.linkedin.com/in/sangamp53/' },
];

const SUPPORTED_BY = [
  { id: 'royal-group', name: 'Royal Group', logoSlotId: 'about-supported-royal-group', url: 'https://www.royalconstruct.com/', img: './assets/royal-group-logo.jpg', width: 168 },
  { id: 'pride-group', name: 'Pride Group', logoSlotId: 'about-supported-pride-group', url: 'https://www.pridegroup.net/', img: './assets/pride-group-logo.png', width: 64 },
];

function PageAbout({ navigate }) {
  useReveal();

  return (
    <main className="page-enter">
      <section className="page-hero page-hero--split about-hero">
        <div className="container">
          <div className="page-hero-copy">
            <div className="mono">ABOUT DYNALEKTRIC</div>
            <h1>Engineering-led electrical and electronics manufacturing.</h1>
            <p className="lead">
              Dynalektric designs and manufactures magnetics, control panel assemblies, power electronics and cross segment solutions for OEMs, EPC contractors and utilities. We engineer to specification, test in-house and document everything we ship.
            </p>
          </div>
          <div className="page-hero-visual">
            <img
              src="./assets/About-Hero1.png"
              alt="Dynalektric manufacturing facility"
              width="720"
              height="540"
              decoding="async"
              fetchpriority="high"
            />
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="container">
          <div className="about-grid">
            <div className="about-col-left">
              <div className="about-eyebrow">Company</div>
              <h2 className="about-heading">An engineering-led manufacturer.</h2>
              <div className="about-meta">
                <div className="about-meta-label">Established</div>
                <div className="about-meta-value">2020, India</div>
                <div className="about-meta-label">Markets served</div>
                <div className="about-meta-value">India, Europe, Middle East, Asia, USA, Canada</div>
                <div className="about-meta-label">Buyers we work with</div>
                <div className="about-meta-value">OEMs, EPC Contractors, Utilities, Railways & Traction, Government PSUs, Industrial Automation & Heavy Industries</div>
              </div>
            </div>
            <div className="about-col-right">
              <p className="about-desc">
                We work as a long-term manufacturing partner. Our engineers take a customer specification, ask the right questions and supply a tested, documented solution on schedule.
              </p>
              <p className="about-desc">
                From single prototype builds to repeat production lines, the approach is the same: every Dynalektric product is designed, wound, wired, tested and documented in-house. Engineering, manufacturing and quality work on one floor, as one team.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="mono">Leadership</span></div>
            <div><h2>Leadership driving Dynalektric's engineering vision.</h2></div>
          </div>

          <div className="about-cap-grid">
            {FOUNDERS.map(f => (
              <div className="about-cap-item" key={f.name}>
                <div className="mono num">{f.num}</div>
                <h3>{f.name}</h3>
                <p>{f.role}</p>
                <a
                  className="founder-linkedin"
                  href={f.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${f.name} on LinkedIn`}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="mono">Group companies</span></div>
            <div><h2>Backed by trusted group companies.</h2></div>
          </div>

          <div className="about-partners-grid">
            {SUPPORTED_BY.map(p => (
              <div className="about-partner-item" key={p.id}>
                <image-slot
                  id={p.logoSlotId}
                  src={(window.__resources && window.__resources[p.id]) || p.img}
                  style={{ width: p.width, height: 64, marginBottom: 24 }}
                  fit="contain"
                  shape="rect"
                  placeholder={`Replace with official ${p.name} logo`}
                  aria-label={`${p.name} logo`}
                ></image-slot>
                <h3>{p.name}</h3>
                {p.url ? (
                  <a
                    className="partner-visit"
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${p.name} website`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>
                    Visit Website
                  </a>
                ) : (
                  <span className="partner-visit partner-visit--pending" aria-disabled="true" title={`Official ${p.name} website URL to be added`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>
                    Visit Website
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal" style={{ background: 'var(--panel-dark)', color: 'var(--on-dark)', padding: 'calc(var(--section-y) * 0.8) 0' }}>
        <div className="container">
          <div className="mono" style={{ color: 'rgba(244,244,241,0.6)', marginBottom: 40, textAlign: 'center' }}>By the numbers</div>
          <div className="about-stats">
            <div style={{ textAlign: 'center' }}>
              <div className="big-num" style={{ marginBottom: 16, color: '#ffffff' }}><Counter to={5} />+</div>
              <div className="mono" style={{ color: 'rgba(244,244,241,0.6)', marginBottom: 8 }}>Years</div>
              <p style={{ fontSize: 14, color: 'rgba(244,244,241,0.75)' }}>Of in-house engineering and manufacturing</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div className="big-num" style={{ marginBottom: 16, color: '#ffffff' }}><Counter to={500} />+</div>
              <div className="mono" style={{ color: 'rgba(244,244,241,0.6)', marginBottom: 8 }}>Designs</div>
              <p style={{ fontSize: 14, color: 'rgba(244,244,241,0.75)' }}>Custom solutions delivered to specification</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div className="big-num" style={{ marginBottom: 16, color: '#ffffff' }}><Counter to={15} />+</div>
              <div className="mono" style={{ color: 'rgba(244,244,241,0.6)', marginBottom: 8 }}>Markets</div>
              <p style={{ fontSize: 14, color: 'rgba(244,244,241,0.75)' }}>Export destinations across three continents</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="mono">Purpose</span></div>
            <div><h2>Engineering excellence with a purpose.</h2></div>
          </div>

          <div className="about-vm-grid">
            <div className="about-vm-item">
              <h3>Vision</h3>
              <p className="about-desc">
                Dynalektric aspires to be a leader in all ventured sectors, seizing opportunities, and investing in the future. We seek to create benchmarks globally for quality, reliability, and customer satisfaction by endlessly raising our standards and consistently anticipating the requirements of our customers, and exceeding their needs and expectations.
              </p>
              <p className="about-desc">
                Our goal is to challenge ourselves in the day-to-day making improvements in all our activities, we strive to achieve our goal by working together with a diverse team bringing our skills to the forefront.
              </p>
              <div className="mono" style={{ marginTop: 20, color: 'var(--accent)' }}>Inspired by "The Toyota Way"</div>
            </div>
            <div className="about-vm-item">
              <h3>Mission</h3>
              <p className="about-desc">
                Our commitment is to deliver the most innovative smart solution with best-in-class quality at a reasonable price ensuring customer delight. Our products are aimed to deliver high performance throughout the product's service life with minimum to zero downtime and reduced operational costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="mono">Manufacturing and engineering capability</span></div>
            <div><h2>Designed, wound, wired and tested in-house.</h2></div>
          </div>

          <div className="about-cap-grid">
            <div className="about-cap-item">
              <div className="mono num">01</div>
              <h3>Design and development</h3>
              <p>In-house electrical, mechanical and thermal design. From concept and feasibility through prototype, validation and series production release.</p>
            </div>
            <div className="about-cap-item">
              <div className="mono num">02</div>
              <h3>Winding and assembly</h3>
              <p>Precision winding lines for magnetics and transformers. Vacuum pressure impregnation, oven curing and quality control at every stage.</p>
            </div>
            <div className="about-cap-item">
              <div className="mono num">03</div>
              <h3>Panel build and wiring</h3>
              <p>Type-tested control panel assemblies built to IEC 61439 with full mechanical, electrical and FAT documentation.</p>
            </div>
            <div className="about-cap-item">
              <div className="mono num">04</div>
              <h3>Routine and type testing</h3>
              <p>On-site test labs for high-voltage, partial discharge, temperature rise and impulse testing. Supplemented by accredited external partners.</p>
            </div>
            <div className="about-cap-item">
              <div className="mono num">05</div>
              <h3>Quality systems</h3>
              <p>Quality management aligned with ISO 9001, supported by customer-specific QAP frameworks and full material traceability on request.</p>
            </div>
            <div className="about-cap-item">
              <div className="mono num">06</div>
              <h3>Engineering support</h3>
              <p>Application engineering stays engaged after dispatch through commissioning, field issues and product-life support.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section reveal" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="mono">Quality and compliance</span></div>
            <div>
              <h2>Standards, testing and documentation.</h2>
              <p style={{ marginTop: 16, fontSize: 15, color: 'var(--ink-soft)' }}>
                Designs validated against IEC, IS and region-specific requirements. Routine and type testing on every order. Documentation prepared for supplier qualification and project handover.
              </p>
            </div>
          </div>
          <div className="cert-row">
            {CERTIFICATIONS.map(c => (
              <div className="cert-item" key={c.code}>
                <div className="cert-code">{c.code}</div>
                <div className="cert-label mono">{c.label}</div>
              </div>
            ))}
          </div>
          <div className="qa-process-section">
            <div className="qa-process-heading mono">QUALITY ASSURANCE PROCESS</div>
            <div className="qa-process-card">
              <div className="qa-process-grid">
                <div>
                  <div className="qa-process-title">Routine testing</div>
                  <div className="qa-process-desc">100% electrical and thermal validation</div>
                </div>
                <div>
                  <div className="qa-process-title">Type testing</div>
                  <div className="qa-process-desc">On-site and accredited external labs</div>
                </div>
                <div>
                  <div className="qa-process-title">FAT support</div>
                  <div className="qa-process-desc">Factory acceptance testing with the customer</div>
                </div>
                <div>
                  <div className="qa-process-title">Documentation</div>
                  <div className="qa-process-desc">Full QAP, test reports, GA drawings, BoM</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mono" style={{ marginTop: 24, color: 'var(--ink-muted)' }}>Certificate copies available on request for supplier qualification</div>
        </div>
      </section>

      <section className="section reveal">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="mono">Facility</span></div>
            <div>
              <h2>
                One floor, one team,<br className="desktop-br" />{' '}
                One engineering culture.
              </h2>
            </div>
          </div>
          <div className="about-facility-grid">
            <div style={{ aspectRatio: '16/9', overflow: 'hidden', borderRadius: '0' }}>
              <img
                src="./assets/facility-wide-shot 2.jpg"
                alt="Dynalektric manufacturing facility"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="about-facility-sub">
              <div style={{ overflow: 'hidden', borderRadius: '0', height: '100%' }}>
                <img
                  src="./assets/Ab_2.png"
                  alt="Winding floor — transformer and magnetics winding"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div style={{ overflow: 'hidden', borderRadius: '0', height: '100%' }}>
                <img
                  src="./assets/test-bay.png"
                  alt="Dynalektric test bay"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  loading="lazy"
                  decoding="async"
                />
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

window.PageAbout = PageAbout;
export default PageAbout;
