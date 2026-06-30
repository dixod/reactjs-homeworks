import { useDispatch, useSelector } from 'react-redux';
import { submitOrder } from '../store/orderSlice';

export default function OrderPage() {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order);
  const user = useSelector((state) => state.auth.user);
  const cartCount = useSelector((state) => state.menu.cartCount);

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
