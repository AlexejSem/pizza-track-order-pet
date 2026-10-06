import type { CartItem as CartItemType } from '../types';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/format';

export function CartItemRow({ item }: { item: CartItemType }) {
  const { changeQty, removeItem } = useCart();

  return (
    <li className="cart-item">
      <div className="cart-item-info">
        <div className="cart-item-name">
          {item.name}
          {item.details ? <span className="cart-item-details"> · {item.details}</span> : null}
        </div>
        <div className="cart-item-price">{formatPrice(item.unitPrice)}</div>
      </div>

      <div className="cart-item-controls">
        <button type="button" onClick={() => changeQty(item.lineId, -1)}>−</button>
        <span>{item.quantity}</span>
        <button type="button" onClick={() => changeQty(item.lineId, 1)}>+</button>
        <button type="button" className="remove" onClick={() => removeItem(item.lineId)}>×</button>
      </div>

      <div className="cart-item-sum">{formatPrice(item.unitPrice * item.quantity)}</div>
    </li>
  );
}