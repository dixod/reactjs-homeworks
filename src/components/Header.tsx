import { useContext } from 'react';
import { signOut } from 'firebase/auth';
import { Link, NavLink } from 'react-router-dom';
import logoImg from '../assets/Logo.png';
import LanguageDropdown from './LanguageDropdown';
import { LanguageContext } from '../context/LanguageContext';
import { ThemeContext } from '../context/ThemeContext';
import { auth } from '../firebase';
import { clearUser } from '../store/authSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

export default function Header() {
  const themeContext = useContext(ThemeContext);
  const languageContext = useContext(LanguageContext);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const cartCount = useAppSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0),
  );

  if (!themeContext || !languageContext) {
    return null;
  }

  const { theme, toggleTheme } = themeContext;
  const { t } = languageContext;
  const userName = user?.email?.split('@')[0] ?? t('header.user');
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `nav-link ${isActive ? 'nav-link--active' : ''}`.trim();

  const handleLogout = async () => {
    if (auth) {
      await signOut(auth);
    }

    dispatch(clearUser());
  };

  return (
    <header className="header">
      <Link className="brand" to="/">
        <img className="brand-icon" src={logoImg} alt={t('header.logoAlt')} />
      </Link>

      <nav className="nav">
        <NavLink className={getNavLinkClass} to="/" end>
          {t('header.home')}
        </NavLink>
        <NavLink className={getNavLinkClass} to="/menu">
          {t('header.menu')}
        </NavLink>
        <NavLink className={getNavLinkClass} to="/company">
          {t('header.company')}
        </NavLink>
        {user ? (
          <>
            <span className="nav-user">{userName}</span>
            <button className="logout-btn" type="button" onClick={handleLogout}>
              {t('header.logout')}
            </button>
          </>
        ) : (
          <NavLink className={getNavLinkClass} to="/login">
            {t('header.login')}
          </NavLink>
        )}
      </nav>

      <LanguageDropdown />

      <button
        className="theme-toggle"
        type="button"
        onClick={toggleTheme}
        aria-label={theme === 'light' ? t('header.switchToDark') : t('header.switchToLight')}
      >
        {theme === 'light' ? t('header.dark') : t('header.light')}
      </button>

      <Link className="cart-btn" to="/order" aria-label={t('header.order')}>
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
