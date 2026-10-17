function CartItem({ item, dispatch }) {
  return (
    <div className="cart-item">
      <div className="cart-item-main">
        <span className="cart-item-image" aria-label={item.name}>
          {item.image}
        </span>

        <div className="item-details">
          <h3>{item.name}</h3>
          <p>₹{item.price} each</p>
          <p className="subtotal">Subtotal: ₹{item.price * item.quantity}</p>
        </div>
      </div>

      <div className="cart-actions">
        <button
          className="quantity-btn"
          onClick={() =>
            dispatch({
              type: "DECREASE",
              payload: item.id,
            })
          }
        >
          −
        </button>

        <span className="quantity">{item.quantity}</span>

        <button
          className="quantity-btn"
          onClick={() =>
            dispatch({
              type: "INCREASE",
              payload: item.id,
            })
          }
        >
          +
        </button>

        <button
          className="remove-btn"
          onClick={() =>
            dispatch({
              type: "REMOVE_ITEM",
              payload: item.id,
            })
          }
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
