import type { Drink } from '../types';
import { useCart } from '../context/cart-context';
import { formatPrice } from '../utils/formats';
import { DrinkIcon } from './Icons';

export function DrinkCard({ drink }: { drink: Drink }) {
  const { addItem } = useCart();
  const volume = `${(drink.volumeMl / 1000).toFixed(1)} L`;

  function handleAdd() {
    addItem({
      lineId: `drink-${drink.id}`,
      kind: 'drink',
      productId: drink.id,
      name: drink.name,
      details: volume,
      unitPrice: drink.price
    });
  }

  return (
    <article className="card card-compact">
      <div className="card-icon"><DrinkIcon size={26} /></div>
      <h3 className="card-title">{drink.name}</h3>
      <p className="card-desc">{volume}</p>
      <div className="card-footer">
        <span className="price">{formatPrice(drink.price)}</span>
        <button type="button" className="btn btn-primary" onClick={handleAdd}>
          Add
        </button>
      </div>
    </article>
  );
}