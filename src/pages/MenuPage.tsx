import { useContext, useEffect, useMemo } from 'react';
import CategoryBar from '../components/CategoryBar';
import MealCard from '../components/MealCard';
import { LanguageContext } from '../context/LanguageContext';
import { addToCart } from '../store/cartSlice';
import { fetchMeals, selectCategory, showMore } from '../store/menuSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import type { Meal } from '../types';

export default function MenuPage() {
  const languageContext = useContext(LanguageContext);
  const dispatch = useAppDispatch();
  const { meals, loading, error, selectedCategory, visibleCount } = useAppSelector(
    (state) => state.menu,
  );
  const t = languageContext?.t;

  useEffect(() => {
    if (!meals.length && !loading) {
      dispatch(fetchMeals());
    }
  }, [dispatch, loading, meals.length]);

  const filteredMeals = useMemo(() => {
    if (!selectedCategory) {
      return meals;
    }

    return meals.filter((meal) => meal.category === selectedCategory);
  }, [meals, selectedCategory]);

  const visibleMeals = useMemo(
    () => filteredMeals.slice(0, visibleCount),
    [filteredMeals, visibleCount],
  );

  const hasMoreMeals = visibleCount < filteredMeals.length;

  const handleAddToCart = (meal: Meal, quantity: number) => {
    dispatch(addToCart({ meal, quantity }));
  };

  if (!t) {
    return null;
  }

  return (
    <main className="main">
      <section className="menu-head">
        <h1 className="menu-title">{t('menu.title')}</h1>
        <p className="menu-subtitle">
          {t('menu.descriptionStart')} <span className="menu-accent">{t('menu.phone')}</span>{' '}
          {t('menu.descriptionEnd')} <span className="menu-accent">{t('menu.freshFood')}</span>
        </p>
        <CategoryBar
          selectedCategory={selectedCategory}
          onCategoryChange={(category) => dispatch(selectCategory(category))}
        />
      </section>

      {loading ? <p className="status">{t('menu.loading')}</p> : null}
      {!loading && error ? <p className="status status--error">{error}</p> : null}

      {!loading && !error ? (
        <>
          <section className="meals-grid">
            {visibleMeals.map((meal) => (
              <MealCard key={meal.id} meal={meal} onAddToCart={handleAddToCart} />
            ))}
          </section>

          {hasMoreMeals ? (
            <div className="see-more-wrap">
              <button type="button" className="see-more-btn" onClick={() => dispatch(showMore())}>
                {t('menu.seeMore')}
              </button>
            </div>
          ) : null}
        </>
      ) : null}
    </main>
  );
}
