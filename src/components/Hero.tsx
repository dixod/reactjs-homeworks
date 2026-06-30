import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import foodImg from '../assets/food.png';
import phoneImg from '../assets/img.png';
import { LanguageContext } from '../context/LanguageContext';

export default function Hero() {
  const languageContext = useContext(LanguageContext);
  const navigate = useNavigate();

  if (!languageContext) {
    return null;
  }

  const { t } = languageContext;

  const handlePlaceOrder = () => {
    navigate('/order');
  };

  return (
    <main className="hero">
      <div className="hero-text">
        <h1 className="hero-title">
          {t('hero.titleStart')} <span className="accent">{t('hero.titleAccent')}</span>{' '}
          {t('hero.titleEnd')}
        </h1>
        <p className="hero-desc">
          {t('hero.descriptionStart')}{' '}
          <span className="tooltip">
            {t('hero.phone')}
            <img className="tooltip-image" src={phoneImg} alt={t('hero.phoneAlt')} />
          </span>
          {t('hero.descriptionEnd')}
        </p>
        <button className="primary-btn" type="button" onClick={handlePlaceOrder}>
          {t('hero.orderButton')}
        </button>
        <div className="rating">
          <div className="rating-line">
            <span className="star">{'\u2605'}</span>
            <span className="rating-title">{t('hero.ratingTitle')}</span>
          </div>
          <div className="rating-line">
            <span className="rating-score">{t('hero.ratingScore')}</span>
            <span className="rating-text">{t('hero.ratingText')}</span>
          </div>
        </div>
      </div>

      <div className="hero-card">
        <img className="hero-image" src={foodImg} alt={t('hero.foodAlt')} />
      </div>
    </main>
  );
}
