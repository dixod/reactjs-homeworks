const CATEGORIES = ['Dessert', 'Dinner', 'Breakfast'];

export default function CategoryBar({ selectedCategory, onCategoryChange }) {
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
