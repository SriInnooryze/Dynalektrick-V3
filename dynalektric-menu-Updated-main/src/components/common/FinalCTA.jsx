/* FinalCTA.jsx — Final CTA strip component */

function FinalCTA({
  navigate,
  eyebrow = 'RFQ and enquiry',
  heading = 'Send a specification. Get an engineering response in one business day.',
  body = 'Share your application, ratings, environment and timeline. Our engineering team replies with feasibility, indicative pricing and the relevant datasheets.',
  primaryLabel = 'Submit RFQ',
  primaryTo = 'contact',
  secondaryLabel = 'Browse products',
  secondaryTo = 'products',
  tertiaryLabel = null,
  tertiaryTo = 'contact',
}) {
  return (
    <section className="section reveal" style={{ paddingTop: 'calc(var(--section-y) * 1.2)', paddingBottom: 'calc(var(--section-y) * 1.2)' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: 880, margin: '0 auto' }}>
        <div className="mono" style={{ marginBottom: 24, color: 'var(--accent)' }}>{eyebrow}</div>
        <h2 style={{ marginBottom: 32 }}>{heading}</h2>
        <p className="lead" style={{ margin: '0 auto 40px', textAlign: 'center' }}>
          {body}
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn btn-primary" onClick={() => navigate(primaryTo)}>
            {primaryLabel} <span className="arrow">→</span>
          </button>
          <button className="btn btn-secondary" onClick={() => navigate(secondaryTo)}>
            {secondaryLabel}
          </button>
        </div>
        {tertiaryLabel && (
          <div style={{ marginTop: 24 }}>
            <button
              className="mono"
              onClick={() => navigate(tertiaryTo)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ink-muted)', textDecoration: 'underline', textUnderlineOffset: 4, padding: 4, fontSize: 13 }}
            >
              {tertiaryLabel}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default FinalCTA;
