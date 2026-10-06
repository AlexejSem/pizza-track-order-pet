import { Link, NavLink } from 'react-router-dom';
import { PizzaIcon, CartIcon } from './Icons';
import { useCart } from '../context/CartContext';

export function Header() {
  const { items } = useCart();
  const count = items.reduce((s, i) => s + i.quantity, 0);

  return (
    <header className="header">
      <Link to="/" className="brand">
        <PizzaIcon size={26} />
        <span>Pizza&nbsp;Pet</span>
      </Link>

      <nav className="nav">
        <NavLink to="/" end>Menu</NavLink>
        <NavLink to="/orders">My Orders</NavLink>
        <NavLink to="/checkout" className="nav-cart">
          <CartIcon size={18} />
          {count > 0 && <span className="badge">{count}</span>}
        </NavLink>
      </nav>
    </header>
  );
}