import "../../css/AddProduct.css";

const AddProduct = ({ handleAddProduct, handleChange, newProduct }) => {
  return (
    <div className="seller-dashboard">
      <h2>Seller Dashboard</h2>

      <div className="add-product">
        <h3>Add New Product</h3>
        <form onSubmit={handleAddProduct} className="product-form">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={newProduct.description}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={newProduct.price}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={newProduct.stock}
            onChange={handleChange}
            required
          />
          <button type="submit">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
