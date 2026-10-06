import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/cart-context';
import { formatPrice } from '../utils/formats';
import { CheckIcon } from '../components/Icons';

interface FormErrors {
  name?: string;
  phone?: string;
}

export function CheckoutPage() {
  const { items, total, placeOrder } = useCart();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [placedOrderId, setPlacedOrderId] = useState<string | null>(null);

  function validate(): boolean {
    const e: FormErrors = {};
    if (name.trim().length < 2) e.name = 'Please enter your name (min 2 characters).';
    const digits = phone.replace(/[^\d]/g, '');
    if (digits.length < 7) e.phone = 'Please enter a valid phone number.';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    const order = placeOrder({ name: name.trim(), phone: phone.trim() });
    setPlacedOrderId(order.id);
  }

  if (placedOrderId) {
    return (
      <div className="page-narrow">
        <div className="success-box">
          <div className="success-icon"><CheckIcon size={36} /></div>
          <h1>Thank you, {name}!</h1>
          <p>Your order <strong>#{placedOrderId}</strong> has been placed.</p>
          <p>Pickup only. We'll let you know when it's ready.</p>
          <div className="success-actions">
            <button className="btn btn-primary" onClick={() => navigate(`/orders/${placedOrderId}`)}>
              View order
            </button>
            <Link className="btn btn-ghost" to="/">Back to menu</Link>
          </div>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="page-narrow">
        <p>Your cart is empty. <Link to="/">Go back to menu</Link>.</p>
      </div>
    );
  }

  return (
    <div className="page-narrow">
      <h1>Checkout</h1>
      <p className="muted">Pickup only — you'll collect the order in person.</p>

      <form className="form" onSubmit={handleSubmit} noValidate>
        <label className="field">
          <span>Name</span>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="John Doe"
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>

        <label className="field">
          <span>Phone</span>
          <input
            type="tel"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder="+49 123 456 789"
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </label>

        <div className="checkout-summary">
          <div className="summary-row">
            <span>Items</span>
            <span>{items.reduce((s, i) => s + i.quantity, 0)}</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <strong>{formatPrice(total)}</strong>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Place order · {formatPrice(total)}
        </button>
      </form>
    </div>
  );
}