import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { OrderCard } from '../components/OrderCard';

export function OrdersPage() {
  const { orders } = useCart();

  return (
    <div className="page-narrow">
      <h1>My Orders</h1>

      {orders.length === 0 ? (
        <p className="muted">You have no orders yet. <Link to="/">Order something tasty</Link>.</p>
      ) : (
        <div className="orders-list">
          {orders.map(o => <OrderCard key={o.id} order={o} />)}
        </div>
      )}
    </div>
  );
}