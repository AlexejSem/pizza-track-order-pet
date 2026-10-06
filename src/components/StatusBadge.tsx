import type { OrderStatus } from '../types';
import { STATUS_LABEL } from '../utils/orderStatus';

export function StatusBadge({ status }: { status: OrderStatus }) {
  return <span className={`status-badge status-${status}`}>{STATUS_LABEL[status]}</span>;
}