import { useReducer } from 'react';
import './App.css';
import Cart from './Cart';
import ProductList from './ProductList';
import cartReducer from './cartReducer';
import products from './products';

function App() {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">Smart Shopping</p>
          <h1>ShopEasy</h1>
        </div>
      </header>

      <main className="shop-layout">
        <ProductList products={products} dispatch={dispatch} />
        <Cart cart={cart} dispatch={dispatch} />
      </main>
    </div>
  );
}

export default App;
