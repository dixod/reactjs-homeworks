import logo from '../assets/Logo.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-col footer-brand-col">
          <img src={logo} alt="Food logo" className="footer-logo" />
          <p className="footer-brand-text">
            Takeaway & Delivery template for small - medium businesses.
          </p>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Company</h4>
          <span className="footer-text-item">Home</span>
          <span className="footer-text-item">Order</span>
          <span className="footer-text-item">FAQ</span>
          <span className="footer-text-item">Contact</span>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Template</h4>
          <a className="footer-link" href="https://www.google.com/" target="_blank" rel="noreferrer">
            Style Guide
          </a>
          <a className="footer-link" href="https://www.google.com/" target="_blank" rel="noreferrer">
            Changelog
          </a>
          <a className="footer-link" href="https://www.google.com/" target="_blank" rel="noreferrer">
            License
          </a>
          <a className="footer-link" href="https://www.google.com/" target="_blank" rel="noreferrer">
            Webflow University
          </a>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Flowbase</h4>
          <span className="footer-text-item">More Cloneables</span>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-bottom-text">
          Built by <span className="footer-link-text">Flowbase</span> · Powered by{' '}
          <span className="footer-link-text">Webflow</span>
        </p>

        <div className="footer-socials" aria-hidden="true">
          <span className="footer-social">◎</span>
          <span className="footer-social">◍</span>
          <span className="footer-social">▶</span>
        </div>
      </div>
    </footer>
  );
}
