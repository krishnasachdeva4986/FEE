function ProductList({ products, dispatch }) {
  return (
    <section className="products-section">
      <div className="section-header">
        <h2>Our Products</h2>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <article className="product-card" key={product.id}>
            <div className="product-image" aria-label={product.name}>
              {product.image}
            </div>

            <div className="product-body">
              <h3>{product.name}</h3>
              <p className="price">₹{product.price}</p>

              <button
                className="add-btn"
                onClick={() =>
                  dispatch({
                    type: "ADD_ITEM",
                    payload: product,
                  })
                }
              >
                Add to Cart
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProductList;
