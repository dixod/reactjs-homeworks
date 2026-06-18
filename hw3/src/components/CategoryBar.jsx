const CATEGORIES = ['Dessert', 'Dinner', 'Breakfast'];

export default function CategoryBar() {
  return (
    <div className="categories">
      {CATEGORIES.map((category, index) => (
        <button
          key={category}
          type="button"
          className={`category-btn ${index === 0 ? 'category-btn--active' : ''}`.trim()}
          disabled
        >
          {category}
        </button>
      ))}
    </div>
  );
}
