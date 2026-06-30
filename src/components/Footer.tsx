import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/Logo.png';
import { LanguageContext } from '../context/LanguageContext';

export default function Footer() {
  const languageContext = useContext(LanguageContext);

  if (!languageContext) {
    return null;
  }

  const { t } = languageContext;

  return (
    <footer className="footer">
      <div className="footer-col">
        <img className="footer-logo" src={logoImg} alt={t('footer.logoAlt')} />
        <p className="footer-text">{t('footer.description')}</p>
      </div>

      <div className="footer-col">
        <h4 className="footer-title">{t('footer.company')}</h4>
        <ul className="footer-links">
          <li>
            <Link to="/">{t('footer.home')}</Link>
          </li>
          <li>
            <Link to="/order">{t('footer.order')}</Link>
          </li>
          <li>
            <a href="#">{t('footer.faq')}</a>
          </li>
          <li>
            <a href="#">{t('footer.contact')}</a>
          </li>
        </ul>
      </div>

      <div className="footer-col">
        <h4 className="footer-title">{t('footer.template')}</h4>
        <ul className="footer-links">
          <li>
            <a href="#">{t('footer.styleGuide')}</a>
          </li>
          <li>
            <a href="#">{t('footer.changelog')}</a>
          </li>
          <li>
            <a href="#">{t('footer.license')}</a>
          </li>
          <li>
            <a href="#">{t('footer.webflowUniversity')}</a>
          </li>
        </ul>
      </div>

      <div className="footer-col">
        <h4 className="footer-title">{t('footer.flowbase')}</h4>
        <ul className="footer-links">
          <li>
            <a href="#">{t('footer.moreClonables')}</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
