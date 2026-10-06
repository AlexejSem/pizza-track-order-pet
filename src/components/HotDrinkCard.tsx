import type { HotDrink } from '../types';
import { useCart } from '../context/cart-context';
import { formatPrice } from '../utils/formats';
import { CupIcon } from './Icons';

export function HotDrinkCard({ drink }: { drink: HotDrink }) {
  const { addItem } = useCart();
  const volume = `${drink.volumeMl} ml`;

  function handleAdd() {
    addItem({
      lineId: `hot-${drink.id}`,
      kind: 'hotDrink',
      productId: drink.id,
      name: drink.name,
      details: `${volume} · paper cup`,
      unitPrice: drink.price
    });
  }

  return (
    <article className="card card-compact">
      <div className="card-icon"><CupIcon size={26} /></div>
      <h3 className="card-title">{drink.name}</h3>
      <p className="card-desc">{volume} · paper cup</p>
      <div className="card-footer">
        <span className="price">{formatPrice(drink.price)}</span>
        <button type="button" className="btn btn-primary" onClick={handleAdd}>
          Add
        </button>
      </div>
    </article>
  );
}