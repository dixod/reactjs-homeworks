const CATEGORIES = ['Dessert', 'Dinner', 'Breakfast'];

type CategoryBarProps = {
  selectedCategory: string | null;
  onCategoryChange: (category: string) => void;
};

export default function CategoryBar({ selectedCategory, onCategoryChange }: CategoryBarProps) {
  return (
    <div className="categories">
      {CATEGORIES.map((category) => (
        <button
          key={category}
          type="button"
          className={`category-btn ${selectedCategory === category ? 'category-btn--active' : ''}`.trim()}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
