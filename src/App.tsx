import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { MenuPage } from './pages/MenuPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrdersPage } from './pages/OrdersPage';
import { OrderDetailPage } from './pages/OrderDetailPage';
import { useLocation } from 'react-router-dom';

export function App() {

  const loc = useLocation();
  console.log('ROUTER PATH:', loc.pathname);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/orders/:id" element={<OrderDetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

function NotFound() {
  return (
    <div className="page-narrow">
      <h1>404</h1>
      <p>Page not found.</p>
    </div>
  );
}