import type { Meal } from '../types';

type MealCardProps = {
  meal: Meal;
  onAddToCart: () => void;
};

export default function MealCard({ meal, onAddToCart }: MealCardProps) {
  const parsedPrice = Number(meal.price);
  const price = Number.isFinite(parsedPrice) ? parsedPrice.toFixed(2) : meal.price;
  const normalizedText = typeof meal.instructions === 'string' ? meal.instructions.replace(/\s+/g, ' ').trim() : '';
  const description = normalizedText
    ? `${normalizedText.slice(0, 74)}...`
    : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';

  return (
    <article className="meal-card">
      <img src={meal.img} alt={meal.meal} className="meal-image" />
      <div className="meal-content">
        <div className="meal-title-row">
          <h3 className="meal-title">{meal.meal}</h3>
          <p className="meal-price">${price} USD</p>
        </div>
        <p className="meal-copy">{description}</p>
        <div className="meal-actions">
          <div className="meal-qty" aria-hidden="true">
            1
          </div>
          <button type="button" className="add-btn" onClick={onAddToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}
