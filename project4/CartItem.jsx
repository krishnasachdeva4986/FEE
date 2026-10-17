
import React from "react";

function CartItem({ item, dispatch }) {
  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <span className="cart-item-image">
          {item.image}
        </span>

        <div>
          <h3>{item.name}</h3>
          <p>₹{item.price} each</p>
          <p>
            Subtotal: ₹{item.price * item.quantity}
          </p>
        </div>
      </div>

      <div className="cart-actions">
        <button
          className="quantity-btn"
          onClick={() =>
            dispatch({
              type: "DECREASE",
              payload: item.id
            })
          }
        >
          −
        </button>

        <span className="quantity">
          {item.quantity}
        </span>

        <button
          className="quantity-btn"
          onClick={() =>
            dispatch({
              type: "INCREASE",
              payload: item.id
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
              payload: item.id
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
