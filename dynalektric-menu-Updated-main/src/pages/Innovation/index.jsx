/* Innovation (R&D) page component */

const FOCUS_AREAS = [
  {
    num: '01',
    title: 'Traction Product Development',
    body: 'Engineering and development of traction and auxiliary power products supporting railway and mobility applications.',
    deliverables: [
      'Locomotive Transformer',
      'Metro Coach Traction Transformer',
      'Vande Bharat Traction Transformer',
      'Battery Charger',
      'Converter (Traction, Auxiliary & Hotel)',
    ],
  },
  {
    num: '02',
    title: 'Renewable Product Development',
    body: 'Power products and grid interface solutions supporting renewable energy and battery storage applications.',
    deliverables: [
      'Inverter Duty Transformer',
      'BESS Power Pack – Pre-Engineered Grid Interface for BESS Container Deployment',
    ],
  },
  {
    num: '03',
    title: 'IoT & Communication Systems',
    body: 'Monitoring and communication platforms enabling intelligent power management and remote diagnostics.',
    deliverables: [
      'Distributed Power with Communication System',
      'On-board Remote Monitoring System',
      'CAN Bus & IoT for MHE Chargers',
      'KAVACH (TCAS)',
      'VCU (Vehicle Control Unit)',
    ],
  },
  {
    num: '04',
    title: 'Power Modules & Integrated Power Systems',
    body: 'Integrated power conversion modules and power supply systems for industrial and mobility applications.',
    deliverables: [
      'SMPS Power Supplies',
      'Redundant Power Supplies',
      'Converters',
      'DC-DC Converters',
    ],
  },
];

const PROCESS = [
  { num: '01', title: 'Brief and specification',        body: 'Application, load profile, environment and compliance requirements.' },
  { num: '02', title: 'Technical review and proposal',  body: 'Engineering review, technical feasibility and commercial proposal based on customer requirements.' },
  { num: '03', title: 'Design and engineering',         body: 'Electrical, mechanical and application-specific engineering based on customer requirements.' },
  { num: '04', title: 'Prototype and test',             body: 'Manufacturing, assembly, inspection and testing according to project requirements.' },
  { num: '05', title: 'Series production',              body: 'Production, documentation, dispatch and after-sales support.' },
];

function PageRnd({ navigate }) {
  useReveal();
  return (
    <main className="page-enter">
      <section className="page-hero page-hero--split">
        <div className="container">
          <div className="page-hero-copy">
            <div className="mono">INNOVATION PORTFOLIO</div>
            <h1>Innovation and R&amp;D portfolio for custom power solutions.</h1>
            <p className="lead">
              Our engineering capability covers magnetics, control panel assemblies, power electronics and cross segment solutions . From design and manufacturing to testing and documentation, Dynalektric supports OEMs, utilities and industrial customers with reliable power solutions.
            </p>
          </div>
          <div className="page-hero-visual" style={{ aspectRatio: '1447/1087' }}>
            <img
              src="./assets/innovation-hero.png"
              alt="Dynalektric R&D lab - engineers testing transformers and control panels"
              width="1447"
              height="1087"
              decoding="async"
              fetchpriority="high"
              style={{ objectFit: 'contain', transform: 'none', animation: 'none' }}
            />
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="mono">Focus areas</span></div>
            <div>
              <h2>Four programmes, one engineering team.</h2>
              <p style={{ marginTop: 16, fontSize: 15, color: 'var(--ink-soft)' }}>Hover any focus area to see programme deliverables in active development.</p>
            </div>
          </div>

          <div className="focus-grid">
            {FOCUS_AREAS.map(f => (
              <div className="cap-card reveal" key={f.num}>
                <div>
                  <div className="num">{f.num}</div>
                  <div className="mono" style={{ fontSize: 10, letterSpacing: '0.12em', color: 'var(--ink-muted)', marginBottom: 16, textTransform: 'uppercase' }}>Focus Area</div>
                  <h3>{f.title}</h3>
                  <p className="reveal-body">{f.body}</p>
                  <ul className="reveal-body focus-deliverables">
                    {f.deliverables.map((d, i) => (
                      <li key={i}><span className="mono">+</span> {d}</li>
                    ))}
                  </ul>
                </div>
                <div className="footer-mark">
                  <span>In-house engineering</span>
                  <span>+</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal" style={{ background: 'var(--panel-dark)', color: 'var(--on-dark)' }}>
        <div className="container">
          <div className="section-head" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
            <div className="eyebrow"><span className="mono" style={{ color: 'rgba(244,244,241,0.6)' }}>Engineering workflow</span></div>
            <div><h2 style={{ color: 'var(--bg)' }}>How a Dynalektric project moves.</h2></div>
          </div>
          <div className="process-flow">
            {PROCESS.map(s => (
              <div className="process-step" key={s.num}>
                <div className="num">{s.num}</div>
                <h4>{s.title}</h4>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="container">
          <div className="custom-eng-split">
            <div className="custom-eng-content">
              <div className="custom-eng-copy">
                <div className="mono" style={{ color: 'var(--accent)' }}>Custom engineering</div>
                <h2 style={{ marginTop: 16 }}>Have a non-standard requirement?</h2>
              </div>
              <p className="lead custom-eng-desc">
                Our engineering team supports customer-specific requirements with technical review, product customization and manufacturing support for industrial, railway and power applications.
              </p>
              <div className="custom-eng-cta">
                <button className="btn btn-primary" onClick={() => navigate('contact')}>Submit RFQ <span className="arrow">→</span></button>
                <button className="btn btn-secondary" onClick={() => navigate('products')}>Browse products</button>
              </div>
            </div>
            <div className="custom-eng-visual" style={{ aspectRatio: '1517/1037' }}>
            <img
              src="./assets/custom-eng.png"
              alt="Dynalektric engineering and manufacturing"
              width="1517"
              height="1037"
              loading="lazy"
              decoding="async"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '0'
               }}
            />
            </div>
          </div>
        </div>
      </section>

      <Footer navigate={navigate} />
    </main>
  );
}

window.PageRnd = PageRnd;
export default PageRnd;
