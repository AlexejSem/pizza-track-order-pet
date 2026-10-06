import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { CartItem, CustomerInfo, Order, OrderStatus } from '../types';
import { STATUS_INTERVAL_MS } from '../config';
import { nextStatus } from '../utils/order-status';
import { shortId } from '../utils/formats';

const CART_KEY = 'pizza-pet:cart';
const ORDERS_KEY = 'pizza-pet:orders';

interface CartContextValue {
  items: CartItem[];
  orders: Order[];
  total: number;
  addItem: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeItem: (lineId: string) => void;
  changeQty: (lineId: string, delta: number) => void;
  clearCart: () => void;
  placeOrder: (customer: CustomerInfo) => Order;
}

const CartContext = createContext<CartContextValue | null>(null);

function load<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => load<CartItem[]>(CART_KEY, []));
  const [orders, setOrders] = useState<Order[]>(() => load<Order[]>(ORDERS_KEY, []));

  // persist cart
  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
  }, [items]);

  // persist orders
  useEffect(() => {
    localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
  }, [orders]);

  // auto status transitions
  useEffect(() => {
    const timer = setInterval(() => {
      setOrders(prev => {
        let changed = false;
        const next = prev.map(o => {
          if (o.status === 'picked_up') return o;
          const ns = nextStatus(o.status);
          if (!ns) return o;
          changed = true;
          return { ...o, status: ns as OrderStatus };
        });
        return changed ? next : prev;
      });
    }, STATUS_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  const total = useMemo(
    () => items.reduce((sum, i) => sum + i.unitPrice * i.quantity, 0),
    [items]
  );

  function addItem(newItem: Omit<CartItem, 'quantity'> & { quantity?: number }) {
    const qty = newItem.quantity ?? 1;
    setItems(prev => {
      const existing = prev.find(i => i.lineId === newItem.lineId);
      if (existing) {
        return prev.map(i =>
          i.lineId === newItem.lineId ? { ...i, quantity: i.quantity + qty } : i
        );
      }
      return [...prev, { ...newItem, quantity: qty }];
    });
  }

  function removeItem(lineId: string) {
    setItems(prev => prev.filter(i => i.lineId !== lineId));
  }

  function changeQty(lineId: string, delta: number) {
    setItems(prev =>
      prev
        .map(i => (i.lineId === lineId ? { ...i, quantity: i.quantity + delta } : i))
        .filter(i => i.quantity > 0)
    );
  }

  function clearCart() {
    setItems([]);
  }

  function placeOrder(customer: CustomerInfo): Order {
    const order: Order = {
      id: shortId(),
      createdAt: Date.now(),
      customer,
      items,
      total,
      status: 'preparing'
    };
    setOrders(prev => [order, ...prev]);
    setItems([]);
    return order;
  }

  const value: CartContextValue = {
    items,
    orders,
    total,
    addItem,
    removeItem,
    changeQty,
    clearCart,
    placeOrder
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}