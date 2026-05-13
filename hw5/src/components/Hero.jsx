import foodImg from '../assets/food.png';
import phoneImg from '../assets/img.png';

export default function Hero() {
  return (
    <main className="hero">
      <div className="hero-text">
        <h1 className="hero-title">
          Beautiful food & takeaway, <span className="accent">delivered</span> to your door.
        </h1>
        <p className="hero-desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500. Prefer to order by{' '}
          <span className="tooltip">
            phone
            <img className="tooltip-image" src={phoneImg} alt="Phone number" />
          </span>
          .
        </p>
        <button className="primary-btn" type="button" disabled>
          Place an Order
        </button>
        <div className="rating">
          <div className="rating-line">
            <span className="star">{'\u2605'}</span>
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
  );
}
