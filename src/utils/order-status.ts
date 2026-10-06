import type { OrderStatus } from '../types';

export const STATUS_FLOW: OrderStatus[] = ['preparing', 'ready', 'picked_up'];

export const STATUS_LABEL: Record<OrderStatus, string> = {
  preparing: 'Preparing',
  ready: 'Ready for pickup',
  picked_up: 'Picked up'
};

export function nextStatus(current: OrderStatus): OrderStatus | null {
  const idx = STATUS_FLOW.indexOf(current);
  if (idx < 0 || idx >= STATUS_FLOW.length - 1) return null;
  return STATUS_FLOW[idx + 1];
}