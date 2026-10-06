# 🍕 Pizza Pet

A small pet project — an online pizza ordering service.
Built with **React + Vite + TypeScript**. No backend: everything runs locally in the browser
and persists to `localStorage`.

---

## ✨ Features

- **6 pizzas**, each available in **Small** and **Large** sizes with different prices
- **Cold drinks** (0.5 L): Cola, Fanta, Sprite, Still Water
- **Hot drinks** (200 ml, paper cup): Americano, Black Tea, Green Tea
- **Cart** with quantity controls, persisted in `localStorage`
- **Checkout** with a validated form (name + phone)
- **Order history** — view all your past orders
- **Automatic order status transitions** (pickup only):
  `Preparing` → `Ready for pickup` → `Picked up`
- Interface in **English**, prices in **EUR (€)**

---

## 🛠 Tech stack

| Layer       | Choice                                      |
| ----------- | ------------------------------------------- |
| UI          | React 18                                    |
| Build tool  | Vite 5                                      |
| Language    | TypeScript 5                                |
| Routing     | react-router-dom v6                         |
| State       | React Context + `useState`                  |
| Persistence | `localStorage`                              |
| Styling     | Plain CSS with CSS variables                |
| Icons       | Hand-rolled inline SVGs (no icon library)   |

---

## 🚀 Getting started

### Requirements

- Node.js **18+** (recommended: 20+)
- npm 9+ (or pnpm / yarn — commands below use npm)

### Install & run

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

pizza-pet/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/         # Reusable UI pieces
│   │   ├── Header.tsx
│   │   ├── Icons.tsx
│   │   ├── PizzaCard.tsx
│   │   ├── DrinkCard.tsx
│   │   ├── HotDrinkCard.tsx
│   │   ├── Cart.tsx
│   │   ├── CartItem.tsx
│   │   ├── OrderCard.tsx
│   │   └── StatusBadge.tsx
│   ├── context/
│   │   └── CartContext.tsx # Cart + orders state, persisted to localStorage
│   ├── pages/
│   │   ├── MenuPage.tsx
│   │   ├── CheckoutPage.tsx
│   │   ├── OrdersPage.tsx
│   │   └── OrderDetailPage.tsx
│   ├── data/
│   │   └── menu.ts         # Pizzas, cold drinks, hot drinks
│   ├── types/
│   │   └── index.ts        # Shared TypeScript types
│   ├── utils/
│   │   ├── format.ts       # formatPrice, formatDate, shortId
│   │   └── orderStatus.ts  # status flow helpers
│   ├── config.ts           # Tunable constants
│   ├── App.tsx             # Routes + layout
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles + CSS variables
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md