import { pizzas, drinks, hotDrinks } from '../data/menu';
import { PizzaCard } from '../components/PizzaCard';
import { DrinkCard } from '../components/DrinkCard';
import { HotDrinkCard } from '../components/HotDrinkCard';
import { Cart } from '../components/Cart';

export function MenuPage() {
  return (
    <div className="layout">
      <main className="layout-main">
        <section className="section">
          <h2 className="section-title">Pizza</h2>
          <div className="grid">
            {pizzas.map(p => <PizzaCard key={p.id} pizza={p} />)}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Cold drinks · 0.5 L</h2>
          <div className="grid grid-narrow">
            {drinks.map(d => <DrinkCard key={d.id} drink={d} />)}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Hot drinks · 200 ml · paper cup</h2>
          <div className="grid grid-narrow">
            {hotDrinks.map(d => <HotDrinkCard key={d.id} drink={d} />)}
          </div>
        </section>
      </main>

      <Cart />
    </div>
  );
}