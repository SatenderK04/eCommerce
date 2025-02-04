import React from "react";

const ProductList = ({ products, handleDeleteProducts }) => {
  return (
    <div className="product-list">
      <h3>Your Products</h3>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <p>
              <strong>Price:</strong> ${product.price}
            </p>
            <p>
              <strong>Stock:</strong> {product.stock}
            </p>
            <button
              onClick={
                // handleDeleteProducts
                () => {
                  handleDeleteProducts(product.id);
                }
              }
            >
              DELETE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
