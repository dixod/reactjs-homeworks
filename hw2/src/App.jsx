import './App.css'
import logoImg from "./assets/Logo.png";
import foodImg from "./assets/food.png";
import phoneImg from "./assets/img.png";

export default function App() {
  return(
    <div className='page'>
        <header className="header">
          <div className="brand">
            <img className="brand-icon" src={logoImg} alt="Logo" />
          </div>
          
          <nav className="nav">
            <a className="nav-link" href="#">Home</a>
            <a className="nav-link" href="#">Menu</a>
            <a className="nav-link" href="#">Company</a>
            <a className="nav-link" href="#">Login</a>
          </nav>

          <button className="cart-btn" type="button" aria-label="Cart">
            <svg className="cart-icon" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="9" cy="20" r="1.6" />
              <circle cx="18" cy="20" r="1.6" />
              <path d="M2 3h3l2.3 11.4a2 2 0 0 0 2 1.6h8.9a2 2 0 0 0 1.9-1.4L22 7H6" />
            </svg>
          </button>
        </header>

      <main className="hero">
        <div className="hero-text">
          <h1 className="hero-title">
            Beautiful food & takeaway, <span className="accent">delivered</span> to your door.
          </h1>
          <p className="hero-desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500. Prefer to order by{' '}
            <span className="tooltip">
              phone
              <img className="tooltip-image" src={phoneImg} alt="Phone number" />
            </span>
            .
          </p>
          <button className="primary-btn" type="button">Place an Order</button>
          <div className="rating">
            <div className="rating-line">
              <span className="star">★</span>
              <span className="rating-title">Trustpilot</span>
            </div>
            <div className="rating-line">
              <span className="rating-score">4.8 out of 5</span>
              <span className="rating-text">based on 2000+ reviews</span>
            </div>
          </div>
        </div>

        <div className="hero-card">
          <img className="hero-image" src={foodImg} alt="Food" />
        </div>

      </main>

      <footer className="footer">
        <div className="footer-col">
          <img className="footer-logo" src={logoImg} alt="Logo" />
          <p className="footer-text">
            Takeaway & Delivery template for mass, medium businesses.
          </p>
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

    </div>
  );
}
