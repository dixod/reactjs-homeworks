import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryBar from '../components/CategoryBar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MealCard from '../components/MealCard';
import { useFetch } from '../hooks/useFetch';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addToCart, fetchMenu, selectCategory, showMore } from '../store/menuSlice';

export default function HomePage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { request } = useFetch();
  const { meals, orders, visibleCount, cartCount, loading, error, selectedCategory } = useAppSelector(
    (state) => state.menu,
  );

  useEffect(() => {
    if (!meals.length && !loading && !error) {
      dispatch(fetchMenu(request));
    }
  }, [dispatch, error, loading, meals.length, request]);

  const filteredMeals = useMemo(() => {
    if (!selectedCategory) return meals;
    return meals.filter((meal) => meal.category === selectedCategory);
  }, [meals, selectedCategory]);

  const visibleMeals = useMemo(() => filteredMeals.slice(0, visibleCount), [filteredMeals, visibleCount]);
  const hasMoreMeals = visibleCount < filteredMeals.length;

  const handleSeeMore = () => {
    dispatch(showMore());
  };

  const handleAddToCart = () => {
    dispatch(addToCart());
  };

  const handleCategoryChange = (category: string) => {
    dispatch(selectCategory(category));
  };

  const handlePlaceOrder = () => {
    navigate('/order');
  };

  return (
    <div className="page">
      <Header cartCount={cartCount} ordersCount={orders.length} />

      <main className="main">
        <section className="menu-head">
          <h1 className="menu-title">Browse our menu</h1>
          <p className="menu-subtitle">
            Use our menu to place an order online, or <span className="menu-accent">phone</span> our store
            to place a pickup order. Fast and <span className="menu-accent">fresh food.</span>
          </p>
          <button type="button" className="primary-btn menu-order-btn" onClick={handlePlaceOrder}>
            Place order
          </button>
          <CategoryBar selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
        </section>

        {loading && <p className="status">Loading menu...</p>}
        {!loading && error && <p className="status status--error">{error}</p>}

        {!loading && !error && (
          <>
            <section className="meals-grid">
              {visibleMeals.map((meal) => (
                <MealCard key={meal.id} meal={meal} onAddToCart={handleAddToCart} />
              ))}
            </section>

            {hasMoreMeals && (
              <div className="see-more-wrap">
                <button type="button" className="see-more-btn" onClick={handleSeeMore}>
                  See more
                </button>
              </div>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
