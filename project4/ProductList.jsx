
import React from "react";

function ProductList({ products, dispatch }) {
  return (
    <section className="products-section">
      <h2>Our Products</h2>

      <div className="products-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <div className="product-image">
              {product.image}
            </div>

            <h3>{product.name}</h3>

            <p className="price">
              ₹{product.price}
            </p>

            <button
              onClick={() =>
                dispatch({
                  type: "ADD_ITEM",
                  payload: product
                })
              }
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductList;
