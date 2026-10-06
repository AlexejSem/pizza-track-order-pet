export type PizzaSize = 'small' | 'large';

export interface Pizza {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  prices: Record<PizzaSize, number>;
}

export interface Drink {
  id: string;
  name: string;
  volumeMl: number;
  price: number;
}

export interface HotDrink {
  id: string;
  name: string;
  volumeMl: number;
  price: number;
}

export type CartItemKind = 'pizza' | 'drink' | 'hotDrink';

export interface CartItem {
  /** unique line id (id + size for pizzas) */
  lineId: string;
  kind: CartItemKind;
  productId: string;
  name: string;
  /** only for pizza */
  size?: PizzaSize;
  /** human-readable details, e.g. "0.5 L" or "Small" */
  details?: string;
  unitPrice: number;
  quantity: number;
}

export type OrderStatus = 'preparing' | 'ready' | 'picked_up';

export interface CustomerInfo {
  name: string;
  phone: string;
}

export interface Order {
  id: string;
  createdAt: number;
  customer: CustomerInfo;
  items: CartItem[];
  total: number;
  status: OrderStatus;
}