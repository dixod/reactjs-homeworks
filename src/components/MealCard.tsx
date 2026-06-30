import { useContext, useState, type ChangeEvent } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import type { Meal } from '../types';

type MealCardProps = {
  meal: Meal;
  onAddToCart: (meal: Meal, quantity: number) => void;
};

function formatPrice(price: string | number) {
  const parsedPrice = Number(price);

  return Number.isFinite(parsedPrice) ? parsedPrice.toFixed(2) : String(price);
}

function getDescription(instructions: string | undefined, defaultDescription: string) {
  const normalizedText =
    typeof instructions === 'string' ? instructions.replace(/\s+/g, ' ').trim() : '';

  if (!normalizedText) {
    return defaultDescription;
  }

  return normalizedText.length > 74 ? `${normalizedText.slice(0, 74)}...` : normalizedText;
}

export default function MealCard({ meal, onAddToCart }: MealCardProps) {
  const languageContext = useContext(LanguageContext);
  const [quantity, setQuantity] = useState(1);

  if (!languageContext) {
    return null;
  }

  const { t } = languageContext;

  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextQuantity = Number(event.target.value);

    if (Number.isFinite(nextQuantity) && nextQuantity >= 1) {
      setQuantity(nextQuantity);
    }
  };

  const handleAddToCart = () => {
    onAddToCart(meal, quantity);
  };

  return (
    <article className="meal-card">
      <img src={meal.img} alt={meal.meal} className="meal-image" />
      <div className="meal-content">
        <div className="meal-title-row">
          <h3 className="meal-title">{meal.meal}</h3>
          <p className="meal-price">${formatPrice(meal.price)} USD</p>
        </div>
        <p className="meal-copy">{getDescription(meal.instructions, t('meal.defaultDescription'))}</p>
        <div className="meal-actions">
          <input
            className="meal-qty"
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
            aria-label={`${t('meal.quantityFor')} ${meal.meal}`}
          />
          <button type="button" className="add-btn" onClick={handleAddToCart}>
            {t('meal.addToCart')}
          </button>
        </div>
      </div>
    </article>
  );
}
