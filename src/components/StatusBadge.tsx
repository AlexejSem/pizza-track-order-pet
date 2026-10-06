import type { OrderStatus } from '../types';
import { STATUS_LABEL } from '../utils/order-status';

export function StatusBadge({ status }: { status: OrderStatus }) {
  return <span className={`status-badge status-${status}`}>{STATUS_LABEL[status]}</span>;
}