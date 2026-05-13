import logoImg from '../assets/Logo.png';

export default function Header() {
  return (
    <header className="header">
      <div className="brand">
        <img className="brand-icon" src={logoImg} alt="Logo" />
      </div>

      <nav className="nav">
        <a className="nav-link" href="#">
          Home
        </a>
        <a className="nav-link" href="#">
          Menu
        </a>
        <a className="nav-link" href="#">
          Company
        </a>
        <a className="nav-link" href="#">
          Login
        </a>
      </nav>

      <button className="cart-btn" type="button" aria-label="Cart">
        <svg className="cart-icon" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="9" cy="20" r="1.6" />
          <circle cx="18" cy="20" r="1.6" />
          <path d="M2 3h3l2.3 11.4a2 2 0 0 0 2 1.6h8.9a2 2 0 0 0 1.9-1.4L22 7H6" />
        </svg>
      </button>
    </header>
  );
}
