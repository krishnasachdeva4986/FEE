
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f1f5f9;
  color: #1e293b;
}

.app {
  min-height: 100vh;
}

.header {
  background: #0f172a;
  color: white;
  text-align: center;
  padding: 25px 15px;
}

.header h1 {
  margin: 0 0 8px;
  color: #38bdf8;
}

.header p {
  margin: 0;
  color: #cbd5e1;
}

.container {
  max-width: 1100px;
  margin: auto;
  padding: 25px 20px;
}

.products-section,
.cart-section {
  margin-bottom: 35px;
}

.products-section h2,
.cart-section h2 {
  margin-bottom: 20px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.product-card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 3px 10px #00000010;
}

.product-image {
  font-size: 55px;
  margin-bottom: 12px;
}

.product-card h3 {
  font-size: 17px;
}

.price {
  font-weight: bold;
  font-size: 18px;
  color: #0284c7;
}

button {
  border: none;
  border-radius: 6px;
  padding: 10px 14px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.2s;
}

.product-card button {
  background: #0284c7;
  color: white;
  width: 100%;
}

.product-card button:hover {
  background: #0369a1;
}

.cart-section {
  background: white;
  padding: 22px;
  border-radius: 12px;
  box-shadow: 0 3px 10px #00000010;
}

.empty-cart {
  color: #64748b;
  padding: 15px 0;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  padding: 18px 0;
  border-bottom: 1px solid #e2e8f0;
}

.cart-item-info {
  display: flex;
  align-items: center;
  gap: 15px;
}

.cart-item-image {
  font-size: 38px;
}

.cart-item h3 {
  margin: 0 0 8px;
}

.cart-item p {
  margin: 5px 0;
  color: #64748b;
}

.cart-actions {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.quantity-btn {
  background: #e0f2fe;
  color: #0369a1;
  font-size: 18px;
  min-width: 35px;
}

.quantity {
  font-weight: bold;
  min-width: 20px;
  text-align: center;
}

.remove-btn {
  background: #fee2e2;
  color: #b91c1c;
}

.cart-summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
}

.cart-summary h3 {
  font-size: 23px;
}

.clear-btn {
  background: #dc2626;
  color: white;
}

.clear-btn:hover {
  background: #b91c1c;
}

.footer {
  background: #0f172a;
  color: #cbd5e1;
  text-align: center;
  padding: 18px;
}

@media (max-width: 800px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .cart-item {
    align-items: flex-start;
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .products-grid {
    grid-template-columns: 1fr;
  }

  .cart-summary {
    align-items: flex-start;
    flex-direction: column;
  }
}
