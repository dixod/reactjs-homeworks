import logoImg from '../assets/Logo.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-col">
        <img className="footer-logo" src={logoImg} alt="Logo" />
        <p className="footer-text">Takeaway & Delivery template for mass, medium businesses.</p>
      </div>

      <div className="footer-col">
        <h4 className="footer-title">Company</h4>
        <a href="#">Home</a>
        <a href="#">Order</a>
        <a href="#">FAQ</a>
        <a href="#">Contact</a>
      </div>

      <div className="footer-col">
        <h4 className="footer-title">Template</h4>
        <a href="#">Style Guide</a>
        <a href="#">Changelog</a>
        <a href="#">License</a>
        <a href="#">Webflow University</a>
      </div>

      <div className="footer-col">
        <h4 className="footer-title">Flowbase</h4>
        <a href="#">More Clonables</a>
      </div>
    </footer>
  );
}
