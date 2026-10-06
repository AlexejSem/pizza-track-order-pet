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
        Placed on {formatDate(order.createdAt)} · Pickup only
      </p>

      <div className="status-steps">
        {STATUS_FLOW.map((s, idx) => {
          const state =
            idx < activeIndex ? 'done' : idx === activeIndex ? 'active' : '';
          return (
            <div key={s} className={`status-step ${state}`}>
              <span className="dot" />
              <span>{STATUS_LABEL[s]}</span>
            </div>
          );
        })}
      </div>

      <h2 style={{ fontSize: 18, margin: '24px 0 0' }}>Items</h2>

      <ul className="order-items">
        {order.items.map(i => (
          <li key={i.lineId} className="order-item">
            <div>
              <div>
                {i.name} × {i.quantity}
              </div>
              {i.details && <div className="order-item-details">{i.details}</div>}
            </div>
            <div>{formatPrice(i.unitPrice * i.quantity)}</div>
          </li>
        ))}
      </ul>

      <div className="order-total">
        <span>Total</span>
        <strong>{formatPrice(order.total)}</strong>
      </div>

      <p className="muted" style={{ marginTop: 24 }}>
        Customer: {order.customer.name} · {order.customer.phone}
      </p>
    </div>
  );
}