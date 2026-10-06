import { Link } from 'react-router-dom';
import type { Order } from '../types';
import { formatDate, formatPrice } from '../utils/formats';
import { StatusBadge } from './StatusBadge';

export function OrderCard({ order }: { order: Order }) {
  const itemCount = order.items.reduce((s, i) => s + i.quantity, 0);

  return (
    <Link to={`/orders/${order.id}`} className="order-card">
      <div className="order-card-head">
        <span className="order-id">#{order.id}</span>
        <StatusBadge status={order.status} />
      </div>
      <div className="order-card-body">
        <span>{formatDate(order.createdAt)}</span>
        <span>{itemCount} item{itemCount !== 1 ? 's' : ''}</span>
        <strong>{formatPrice(order.total)}</strong>
      </div>
    </Link>
  );
}