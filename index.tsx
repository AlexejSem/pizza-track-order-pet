import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './src/context/cart-context'; // Adjust path if needed
import App from './src/App'; // Adjust path if needed
import './src/index.css'; // Adjust path if needed

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);


// <!doctype html>
// <html lang="en">
//   <head>
//     <meta charSet="UTF-8" />
//     <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Pizza Pet — Order Online</title>
//   </head>
//   <body>
//     <div id="root"></div>
//     <script type="module" src="/src/main.tsx"></script>
//   </body>
// </html>