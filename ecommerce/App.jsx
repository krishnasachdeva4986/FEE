import { useState } from "react";
import {
  Routes, Route, Link, NavLink, useNavigate
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import products from "./products";
import {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart
} from "./cartslice";

function App() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [message, setMessage] = useState("");

  const totalItems = items.reduce(
    (sum, item) => sum + item.quantity, 0
  );

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  const filteredProducts = products.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === "All" || item.category === category)
  );

  return (
    <>
      <nav>
        <Link to="/" className="brand">MiniShop</Link>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/cart">Cart ({totalItems})</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={
          <section className="home">
            <h1>Welcome to MiniShop!</h1>
            <p>Find your favourite products at great prices.</p>
            <button onClick={() => navigate("/products")}>
              Shop Now
            </button>
            <button onClick={() => navigate("/cart")}>
              View Cart
            </button>
          </section>
        } />

        <Route path="/products" element={
          <section className="page">
            <h1>Our Products</h1>

            <input
              placeholder="Search products..."
              value={search}
              onChange={e => {setSearch(e.target.value);
                setMessage("")}
              }
            />

            <select
              value={category}
              onChange={e => {setCategory(e.target.value);
                setMessage("")}
              }
            >
              <option>All</option>
              <option>Electronics</option>
              <option>Fashion</option>
              <option>Home</option>
            </select>

            <p className="message">{message}</p>

            <div className="grid">
              {filteredProducts.map(product => (
                <div className="card" key={product.id}>
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>₹{product.price}</p>
                  <button onClick={() => {
                    dispatch(addToCart(product));
                    setMessage(product.name + " addeded!");
                  }}>
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 &&
              <p>No products found.</p>
            }
          </section>
        } />

        <Route path="/cart" element={
          <section className="page">
            <h1>My Cart</h1>

            {items.length === 0 ? (
              <>
                <p>Your cart is empty!</p>
                <Link to="/products">Shop Now</Link>
              </>
            ) : (
              <>
                {items.map(item => (
                  <div className="cart-item" key={item.id}>
                    <img src={item.image} alt={item.name} />

                    <div>
                      <h3>{item.name}</h3>
                      <p>Price: ₹{item.price}</p>

                      <button onClick={() =>
                        dispatch(decreaseQuantity(item.id))
                      } disabled={item.quantity === 1}>-</button>

                      <span> {item.quantity} </span>

                      <button onClick={() =>
                        dispatch(increaseQuantity(item.id))
                      }>+</button>

                      <p>
                        Subtotal: ₹{item.price * item.quantity}
                      </p>

                      <button onClick={() =>
                        dispatch(removeFromCart(item.id))
                      }>Remove</button>
                    </div>
                  </div>
                ))}

                <h2>Total Items: {totalItems}</h2>
                <h2>Total Price: ₹{totalPrice}</h2>

                <button onClick={() => dispatch(clearCart())}>
                  Clear Cart
                </button>

                <button onClick={() => navigate("/checkout")}>
                  Checkout
                </button>
              </>
            )}
          </section>
        } />

        <Route path="/about" element={
          <section className="page">
            <h1>About MiniShop</h1>
            <p>
              MiniShop is a demo e-commerce website made using
              React, React Router and Redux Toolkit.
            </p>
            <Link to="/">Back to Home</Link>
          </section>
        } />

        <Route path="/checkout" element={
          <section className="page">
            <h1>Checkout</h1>
            {items.length === 0 ? (
              <p>Your cart is empty!</p>
            ) : (
              <>
                {items.map(item => (
                  <p key={item.id}>
                    {item.name} × {item.quantity} = ₹
                    {item.price * item.quantity}
                  </p>
                ))}

                <h2>Order Total: ₹{totalPrice}</h2>

                <button onClick={() => {
                  dispatch(clearCart());
                  setMessage("Order placed successfully!");
                  navigate("/");
                }}>
                  Confirm Order
                </button>
              </>
            )}
          </section>
        } />

        <Route path="*" element={
          <section className="page">
            <h1>404 - Page Not Found</h1>
            <Link to="/">Go Home</Link>
          </section>
        } />
      </Routes>

      <footer>MiniShop | first online shoppinng project by krishna</footer>
    </>
  );
}

export default App;