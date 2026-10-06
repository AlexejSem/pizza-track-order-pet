import { CURRENCY } from '../config';

export function formatPrice(value: number): string {
  return `${CURRENCY}${value.toFixed(2)}`;
}

export function formatDate(ts: number): string {
  return new Date(ts).toLocaleString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

export function shortId(): string {
  return Math.random().toString(36).slice(2, 8).toUpperCase();
}