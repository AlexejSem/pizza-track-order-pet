import { Link, useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatDate, formatPrice } from '../utils/format';
import { StatusBadge } from '../components/StatusBadge';
import { STATUS_FLOW, STATUS_LABEL } from '../utils/orderStatus';

export function OrderDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { orders } = useCart();
  const order = orders.find(o => o.id === id);

  if (!order) {
    return (
      <div className="page-narrow">
        <p>Order not found. <Link to="/orders">Back to orders</Link>.</p>
      </div>
    );
  }

  const activeIndex = STATUS_FLOW.indexOf(order.status);

  return (
    <div className="page-narrow">
      <Link to="/orders" className="back-link">← Back to orders</Link>

      <div className="order-head">
        <h1>Order #{order.id}</h1>
        <StatusBadge status={order.status} />
      </div>

      <p className="muted">
        Placed on {formatDate(order.createdAt)} · Pickup
      </p>

      <div className="status-steps"></div>