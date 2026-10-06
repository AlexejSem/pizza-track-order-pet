import { Link } from 'react-router-dom';
import { useCart } from '../context/cart-context';
import { formatPrice } from '../utils/formats';
import { CartItemRow } from './CartItem';
import { CartIcon } from './Icons';

export function Cart() {
  const { items, total, clearCart } = useCart();

  return (
    <aside className="cart">
      <h2 className="cart-title">
        <CartIcon size={20} /> Your cart
      </h2>

      {items.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {items.map(i => <CartItemRow key={i.lineId} item={i} />)}
          </ul>

          <div className="cart-total">
            <span>Total</span>
            <strong>{formatPrice(total)}</strong>
          </div>

          <div className="cart-actions">
            <button type="button" className="btn btn-ghost" onClick={clearCart}>
              Clear
            </button>
            <Link to="/checkout" className="btn btn-primary">
              Checkout
            </Link>
          </div>
        </>
      )}
    </aside>
  );
}