import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/Logo.svg';

export default function Header({ cartCount, ordersCount }) {
  return (
    <header className="header">
      <Link className="brand" to="/">
        <img src={logo} alt="Food logo" className="brand-logo" />
      </Link>

      <nav className="nav" aria-label="Main navigation">
        <NavLink className="nav-item" to="/">
          Home
        </NavLink>
        <NavLink className="nav-item nav-item--active" to="/">
          Menu
        </NavLink>
        <NavLink className="nav-item" to="/">
          Company
        </NavLink>
        <NavLink className="nav-item" to="/login">
          Login
        </NavLink>
      </nav>

      <Link
        className="cart-btn"
        to="/order"
        aria-label={`Cart items: ${cartCount}. Loaded orders: ${ordersCount}`}
      >
        <svg className="cart-icon" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="9" cy="20" r="1.6" />
          <circle cx="18" cy="20" r="1.6" />
          <path d="M2 3h3l2.3 11.4a2 2 0 0 0 2 1.6h8.9a2 2 0 0 0 1.9-1.4L22 7H6" />
        </svg>
        <span className="cart-count">{cartCount}</span>
      </Link>
    </header>
  );
}
