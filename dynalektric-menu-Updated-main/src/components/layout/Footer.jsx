/* Footer.jsx — Site footer component */

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-grid">

          <div className="footer-col">
            <img
              className="footer-logo"
              src={
                (window.__resources &&
                  window.__resources.dynaLogoReversed) ||
                "assets/Dynalektric-logo-reversed2.png"
              }
              alt="Dynalektric logo"
              width="320"
              height="200"
              loading="lazy"
              decoding="async"
            />

            <p className="footer-tag">
              Magnetics, control panel assemblies, power electronics and cross segment solutions.
            </p>

            <div className="footer-duns-seal">
              <iframe
                id="Iframe1"
                src="https://dunsregistered.dnb.com/SealAuthentication.aspx?Cid=1"
                width="114"
                height="97"
                frameBorder="0"
                scrolling="no"
                allowTransparency="true"
                title="D-U-N-S Registered Seal"
                loading="lazy"
              />
            </div>
          </div>

          <div className="footer-col">
            <h4>Sitemap</h4>

            <nav aria-label="Footer navigation">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="about">About</a></li>
                <li>
                  <a href="products-solutions">
                    Products &amp; Solutions
                  </a>
                </li>
                <li>
                  <a href="innovation-rd">
                    Innovation Portfolio
                  </a>
                </li>
                <li>
                  <a href="industries-applications">
                    Industries &amp; Applications
                  </a>
                </li>
                <li><a href="export">Export</a></li>
                <li><a href="contact">Contact</a></li>
              </ul>
            </nav>
          </div>

          <div className="footer-col">
            <h4>Product groups</h4>

            <ul>
              {PRODUCTS.map((p) => (
                <li key={p.id}>
                  <a href={`products-solutions?focus=${p.id}`}>
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Enquiries</h4>

            <ul>
              <li><a href="tel:+919035542821">+91-903 554 2821</a></li>
              <li><a href="tel:+919035542827">+91-903 554 2827</a></li>
              <li><a href="mailto:sales01@dynalektric.com">sales01@dynalektric.com</a></li>
              <li><a href="mailto:cs@dynalektric.com">cs@dynalektric.com</a></li>
              <li>
                <a href="contact">
                  Submit RFQ →
                </a>
              </li>
            </ul>
          </div>

        </div>


        <div className="footer-bottom">
          <span>
            © {currentYear} Dynalektric · Power · Motion · Safety
          </span>

          <span style={{ textTransform: 'none', fontSize: '12px' }}>
            Designed by{' '}
            <a
              href="https://innooryze.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'inherit',
                textDecoration: 'none',
                fontSize: 'inherit',
                fontWeight: 'inherit'
              }}
            >
              InnooRyze
            </a>
          </span>

          <span>
            Engineered in India · Exported worldwide
          </span>
        </div>

      </div>
    </footer>
  );
}

window.Footer = Footer;
export default Footer;
