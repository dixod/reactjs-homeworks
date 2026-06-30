import {
  useContext,
  useEffect,
  useMemo,
  useState,
  type ChangeEvent,
  type FormEvent,
} from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { clearCart, removeFromCart, updateQuantity } from '../store/cartSlice';
import { clearOrder, submitOrder } from '../store/orderSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

function formatPrice(price: string | number) {
  const parsedPrice = Number(price);

  return Number.isFinite(parsedPrice) ? parsedPrice : 0;
}

export default function OrderPage() {
  const languageContext = useContext(LanguageContext);
  const [street, setStreet] = useState('');
  const [house, setHouse] = useState('');
  const dispatch = useAppDispatch();
  const order = useAppSelector((state) => state.order);
  const user = useAppSelector((state) => state.auth.user);
  const cartItems = useAppSelector((state) => state.cart.items);
  const t = languageContext?.t;

  const total = useMemo(
    () =>
      cartItems.reduce((sum, item) => sum + formatPrice(item.meal.price) * item.quantity, 0),
    [cartItems],
  );

  useEffect(() => {
    return () => {
      dispatch(clearOrder());
    };
  }, [dispatch]);

  const handleQuantityChange = (id: string, event: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateQuantity({ id, quantity: Number(event.target.value) }));
  };

  const handlePlaceOrder = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!cartItems.length) {
      return;
    }

    dispatch(submitOrder());
    dispatch(clearCart());
    setStreet('');
    setHouse('');
  };

  if (!t) {
    return null;
  }

  return (
    <main className="order">
      <h1 className="order-title">{t('order.title')}</h1>
      <p className="order-user">
        {t('order.customer')}: {user?.email}
      </p>

      {cartItems.length ? (
        <form className="order-form" onSubmit={handlePlaceOrder}>
          <section className="order-items">
            {cartItems.map((item) => (
              <article className="order-item" key={item.meal.id}>
                <img className="order-item-image" src={item.meal.img} alt={item.meal.meal} />
                <h2 className="order-item-title">{item.meal.meal}</h2>
                <p className="order-item-price">${formatPrice(item.meal.price).toFixed(2)} USD</p>
                <input
                  className="order-item-qty"
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(event) => handleQuantityChange(item.meal.id, event)}
                  aria-label={`${t('order.quantityFor')} ${item.meal.meal}`}
                />
                <button
                  className="remove-btn"
                  type="button"
                  onClick={() => dispatch(removeFromCart(item.meal.id))}
                  aria-label={`${t('order.remove')} ${item.meal.meal}`}
                >
                  X
                </button>
              </article>
            ))}
          </section>

          <p className="order-total">
            {t('order.total')}: ${total.toFixed(2)} USD
          </p>

          <label className="order-field">
            <span>{t('order.street')}</span>
            <input
              type="text"
              value={street}
              onChange={(event) => setStreet(event.target.value)}
              required
            />
          </label>

          <label className="order-field">
            <span>{t('order.house')}</span>
            <input
              type="text"
              value={house}
              onChange={(event) => setHouse(event.target.value)}
              required
            />
          </label>

          <button className="primary-btn order-submit" type="submit">
            {t('order.submit')}
          </button>
        </form>
      ) : !order.submitted ? (
        <p className="order-empty">{t('order.empty')}</p>
      ) : null}

      {order.submitted ? <p className="order-message">{t('order.success')}</p> : null}
    </main>
  );
}
