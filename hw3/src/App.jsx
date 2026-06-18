import { useEffect, useMemo, useState } from 'react';
import './App.css';
import { getMeals } from './api/mealsApi';
import { getOrders } from './api/ordersApi';
import Header from './components/Header';
import CategoryBar from './components/CategoryBar';
import MealCard from './components/MealCard';
import Footer from './components/Footer';

const STEP = 6;

export default function App() {
  const [meals, setMeals] = useState([]);
  const [orders, setOrders] = useState([]);
  const [visibleCount, setVisibleCount] = useState(STEP);
  const [cartCount, setCartCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;

    async function loadData() {
      try {
        setLoading(true);
        setError('');

        const [mealsData, ordersData] = await Promise.all([getMeals(), getOrders()]);

        if (!active) return;
        setMeals(mealsData);
        setOrders(ordersData);
      } catch (loadError) {
        if (!active) return;
        setError(loadError instanceof Error ? loadError.message : 'Failed to load data');
      } finally {
        if (active) setLoading(false);
      }
    }

    loadData();

    return () => {
      active = false;
    };
  }, []);

  const visibleMeals = useMemo(() => meals.slice(0, visibleCount), [meals, visibleCount]);
  const hasMoreMeals = visibleCount < meals.length;

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + STEP);
  };

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
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
          <CategoryBar />
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
