import { useState } from 'react';
import type { Pizza, PizzaSize } from '../types';
import { useCart } from '../context/cart-context';
import { formatPrice } from '../utils/formats';
import { PizzaIcon } from './Icons';

export function PizzaCard({ pizza }: { pizza: Pizza }) {
  const [size, setSize] = useState<PizzaSize>('small');
  const { addItem } = useCart();
  const price = pizza.prices[size];

  function handleAdd() {
    addItem({
      lineId: `${pizza.id}-${size}`,
      kind: 'pizza',
      productId: pizza.id,
      name: pizza.name,
      size,
      details: size === 'small' ? 'Small' : 'Large',
      unitPrice: price
    });
  }

  return (
    <article className="card">
      <div className="card-icon"><PizzaIcon size={28} /></div>
      <h3 className="card-title">{pizza.name}</h3>
      <p className="card-desc">{pizza.description}</p>
      <p className="card-ingredients">
        <strong>Ingredients:</strong> {pizza.ingredients.join(', ')}
      </p>

      <div className="size-switch">
        <button
          type="button"
          className={size === 'small' ? 'active' : ''}
          onClick={() => setSize('small')}
        >
          Small
        </button>
        <button
          type="button"
          className={size === 'large' ? 'active' : ''}
          onClick={() => setSize('large')}
        >
          Large
        </button>
      </div>

      <div className="card-footer">
        <span className="price">{formatPrice(price)}</span>
        <button type="button" className="btn btn-primary" onClick={handleAdd}>
          Add to cart
        </button>
      </div>
    </article>
  );
}