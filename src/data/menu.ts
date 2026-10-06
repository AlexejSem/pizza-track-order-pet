import type { Pizza, Drink, HotDrink } from '../types';

export const pizzas: Pizza[] = [
  {
    id: 'margherita',
    name: 'Margherita',
    description: 'The classic one. Simple, fresh, timeless.',
    ingredients: ['Tomato sauce', 'Mozzarella', 'Fresh basil', 'Olive oil'],
    prices: { small: 7.5, large: 11.9 }
  },
  {
    id: 'pepperoni',
    name: 'Pepperoni',
    description: 'Spicy, cheesy, and loaded with pepperoni slices.',
    ingredients: ['Tomato sauce', 'Mozzarella', 'Spicy pepperoni'],
    prices: { small: 8.9, large: 13.5 }
  },
  {
    id: 'four-cheese',
    name: 'Four Cheese',
    description: 'A cheese lover’s dream — four kinds of cheese.',
    ingredients: ['Mozzarella', 'Gorgonzola', 'Parmesan', 'Goat cheese'],
    prices: { small: 9.5, large: 14.2 }
  },
  {
    id: 'bbq-chicken',
    name: 'BBQ Chicken',
    description: 'Smoky BBQ sauce with tender chicken and red onion.',
    ingredients: ['BBQ sauce', 'Chicken', 'Red onion', 'Cheddar', 'Mozzarella'],
    prices: { small: 9.9, large: 14.9 }
  },
  {
    id: 'hawaiian',
    name: 'Hawaiian',
    description: 'Sweet and savory. Yes, pineapple belongs here.',
    ingredients: ['Tomato sauce', 'Ham', 'Pineapple', 'Mozzarella'],
    prices: { small: 8.5, large: 12.9 }
  },
  {
    id: 'veggie',
    name: 'Veggie',
    description: 'Fresh vegetables on a tomato base. Light and tasty.',
    ingredients: ['Tomato sauce', 'Mushrooms', 'Bell pepper', 'Olives', 'Cherry tomatoes', 'Mozzarella'],
    prices: { small: 8.2, large: 12.5 }
  }
];

export const drinks: Drink[] = [
  { id: 'cola',   name: 'Cola',          volumeMl: 500, price: 2.5 },
  { id: 'fanta',  name: 'Fanta',         volumeMl: 500, price: 2.5 },
  { id: 'sprite', name: 'Sprite',        volumeMl: 500, price: 2.5 },
  { id: 'water',  name: 'Still Water',   volumeMl: 500, price: 1.8 }
];

export const hotDrinks: HotDrink[] = [
  { id: 'americano',  name: 'Americano',  volumeMl: 200, price: 2.2 },
  { id: 'black-tea',  name: 'Black Tea',  volumeMl: 200, price: 1.9 },
  { id: 'green-tea',  name: 'Green Tea',  volumeMl: 200, price: 1.9 }
];