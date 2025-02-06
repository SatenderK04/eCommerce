import React, { useState } from "react";
import "../../css/seller/ProductList.css";

const ProductList = ({ products, handleDeleteProduct, handleEditProduct }) => {
  const [editableProduct, setEditableProduct] = useState(null);
  const [updatedData, setUpdatedData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
  });

  const handleEditClick = (product) => {
    setEditableProduct(product.id);
    setUpdatedData({
      name: product.name,
      description: product.description,
      price: product.price,
      stock: product.stock,
    });
  };

  const handleSaveEdit = (productID) => {
    handleEditProduct(productID, updatedData);
    setEditableProduct(null);
  };

  return (
    <div className="product-list-container">
      <h3>Products Listed</h3>
      <div className="list-header">
        <li className="name">Title</li>
        <li className="description">Description</li>
        <li className="price">Price</li>
        <li className="stock">Stock</li>
        <li className="action">Action</li>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-post" key={product.id}>
            {editableProduct === product.id ? (
              <>
                <input
                  type="text"
                  value={updatedData.name}
                  onChange={(e) =>
                    setUpdatedData({ ...updatedData, name: e.target.value })
                  }
                />
                <input
                  type="text"
                  value={updatedData.description}
                  onChange={(e) =>
                    setUpdatedData({
                      ...updatedData,
                      description: e.target.value,
                    })
                  }
                />
                <input
                  type="number"
                  value={updatedData.price}
                  onChange={(e) =>
                    setUpdatedData({ ...updatedData, price: e.target.value })
                  }
                />
                <input
                  type="number"
                  value={updatedData.stock}
                  onChange={(e) =>
                    setUpdatedData({ ...updatedData, stock: e.target.value })
                  }
                />
                <button onClick={() => handleSaveEdit(product.id)}>Save</button>
                <button onClick={() => setEditableProduct(null)}>Cancel</button>
              </>
            ) : (
              // <div className="product-post">
              <>
                <h4 className="name">{product.name}</h4>
                <p className="description">{product.description}</p>
                {/* <p>{product.category}</p> */}
                <p className="price">${product.price}</p>
                <p className="stock">{product.stock}</p>
                <div className="button-container">
                  <button
                    className="deleteBtn"
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    DELETE
                  </button>
                  <button
                    className="editBtn"
                    onClick={() => handleEditClick(product)}
                  >
                    EDIT
                  </button>
                </div>

                {/* </div> */}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
