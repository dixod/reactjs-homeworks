import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const CATEGORIES = [
  { value: 'Dessert', label: 'category.dessert' },
  { value: 'Dinner', label: 'category.dinner' },
  { value: 'Breakfast', label: 'category.breakfast' },
] as const;

type CategoryBarProps = {
  selectedCategory: string | null;
  onCategoryChange: (category: string) => void;
};

export default function CategoryBar({ selectedCategory, onCategoryChange }: CategoryBarProps) {
  const languageContext = useContext(LanguageContext);

  if (!languageContext) {
    return null;
  }

  const { t } = languageContext;

  return (
    <div className="categories" aria-label={t('category.aria')}>
      {CATEGORIES.map((category) => (
        <button
          key={category.value}
          type="button"
          className={`category-btn ${selectedCategory === category.value ? 'category-btn--active' : ''}`.trim()}
          onClick={() => onCategoryChange(category.value)}
          aria-pressed={selectedCategory === category.value}
        >
          {t(category.label)}
        </button>
      ))}
    </div>
  );
}
