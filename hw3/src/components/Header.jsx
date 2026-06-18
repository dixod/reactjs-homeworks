import logo from '../assets/Logo.svg';

export default function Header({ cartCount, ordersCount }) {
  return (
    <header className="header">
      <div className="brand">
        <img src={logo} alt="Food logo" className="brand-logo" />
      </div>

      <nav className="nav" aria-label="Main navigation">
        <span className="nav-item">Home</span>
        <span className="nav-item nav-item--active">Menu</span>
        <span className="nav-item">Company</span>
        <span className="nav-item">Login</span>
      </nav>

      <button
        type="button"
        className="cart-btn"
        aria-label={`Cart items: ${cartCount}. Loaded orders: ${ordersCount}`}
      >
        <svg className="cart-icon" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="9" cy="20" r="1.6" />
          <circle cx="18" cy="20" r="1.6" />
          <path d="M2 3h3l2.3 11.4a2 2 0 0 0 2 1.6h8.9a2 2 0 0 0 1.9-1.4L22 7H6" />
        </svg>
        <span className="cart-count">{cartCount}</span>
      </button>
    </header>
  );
}
