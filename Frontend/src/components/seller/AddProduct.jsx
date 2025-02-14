import "../../css/seller/AddProduct.css";

const AddProduct = ({ handleAddProduct, handleChange, newProduct }) => {
  return (
    <div className="add-product">
      <form onSubmit={handleAddProduct} className="product-form">
        <h3>New Product</h3>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={newProduct.description}
          onChange={handleChange}
          required
        />
        <textarea
          name="highlights"
          placeholder="Key Highlights (comma separated)"
          value={newProduct.highlights}
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
        <select
          name="category_id"
          value={newProduct.category_id}
          onChange={handleChange}
          required
        >
          <option disabled>Select Category</option>
          <option value="1">Electronics & Gadgets</option>
          <option value="2">Fashion & Apparel</option>
          <option value="3">Home & Kitchen</option>
          <option value="4">Beauty & Personal Care</option>
          <option value="5">Health & Wellness</option>
          <option value="6">Grocery & Food</option>
          <option value="7">Books & Stationery</option>
          <option value="8">Baby & Kids</option>
          <option value="9">Sports & Outdoor</option>
          <option value="10">Automotive & Accessories</option>
        </select>

        <button type="submit" onClick={handleAddProduct}>
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
