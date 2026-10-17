import CartItem from "./CartItem";

function Cart({ cart, dispatch }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <aside className="cart-panel empty-cart">
        <h2>Your Cart</h2>
        <p>Your cart is empty.</p>
      </aside>
    );
  }

  return (
    <aside className="cart-panel">
      <div className="cart-header">
        <h2>Your Cart</h2>
        <button
          className="clear-btn"
          onClick={() => dispatch({ type: "CLEAR_CART" })}
        >
          Clear Cart
        </button>
      </div>

      <div className="cart-list">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} dispatch={dispatch} />
        ))}
      </div>

      <div className="cart-summary">
        <span>Total</span>
        <strong>₹{total}</strong>
      </div>
    </aside>
  );
}

export default Cart;
