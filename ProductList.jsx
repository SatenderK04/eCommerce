import React from "react";

const ProductList = ({ products, handleDeleteProduct, handleEditProduct }) => {
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
                // handleDeleteProduct
                () => {
                  handleDeleteProduct(product.id);
                }
              }
            >
              DELETE
            </button>
            <button
              onClick={
                // handleDeleteProducts
                () => {
                  handleEditProduct(product.id);
                }
              }
            >
              EDIT
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
