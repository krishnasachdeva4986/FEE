
import React, { useReducer } from "react";
import cartReducer from "./reducer/cartReducer";
import products from "./data/products";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <div className="app">
      <header className="header">
        <h1>🛍️ ShopEasy</h1>
        <p>Your one-stop shopping destination</p>
      </header>

      <main className="container">
        <ProductList
          products={products}
          dispatch={dispatch}
        />

        <Cart
          cart={cart}
          dispatch={dispatch}
        />
      </main>

      <footer className="footer">
        <p>© 2026 ShopEasy. Happy Shopping!</p>
      </footer>
    </div>
  );
}

export default App;
