import { useAppDispatch, useAppSelector } from '../store/hooks';
import { submitOrder } from '../store/orderSlice';

export default function OrderPage() {
  const dispatch = useAppDispatch();
  const order = useAppSelector((state) => state.order);
  const user = useAppSelector((state) => state.auth.user);
  const cartCount = useAppSelector((state) => state.menu.cartCount);

  const handlePlaceOrder = () => {
    dispatch(submitOrder());
  };

  return (
    <div className="page">
      <main className="order">
        <h1 className="order-title">Order</h1>
        <p className="order-user">Customer: {user?.email}</p>
        <p className="order-user">Items in cart: {cartCount}</p>

        <button className="primary-btn" type="button" onClick={handlePlaceOrder}>
          Place order
        </button>

        {order.submitted ? <p className="order-message">Order placed successfully.</p> : null}
      </main>
    </div>
  );
}
