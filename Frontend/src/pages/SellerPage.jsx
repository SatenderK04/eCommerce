import React, { useState, useEffect } from "react";

import axios from "axios";
import SellerPannel from "../components/seller/SellerPannel";
import CustomerReview from "../components/seller/CustomerReview";
import OrderManagement from "../components/seller/OrderManagement";
import ProfileSetting from "../components/seller/ProfileSetting";
import Payments from "../components/seller/Payments";
import "../css/seller/SellerPage.css";
import ProductList from "../components/seller/ProductList";
import AddProduct from "../components/seller/AddProduct";
/*
1️⃣ Seller Overview Panel (Dashboard Stats)
📌 Displays key business insights at a glance:

Total Products Listed
Total Orders Received
Total Sales (Revenue)
Pending Orders
Completed Orders
Customer Ratings & Reviews
2️⃣ Product Management
📌 Allows sellers to add, edit, and delete products:

Add New Product (Form with name, description, price, stock, category, images)
View All Products (Table/List/Grid View)
Update Product Details
Delete Products
3️⃣ Order Management
📌 Helps sellers track and manage customer orders efficiently:

View All Orders (Order ID, customer name, date, status)
Filter by Status (Pending, Processing, Shipped, Delivered, Canceled)
Update Order Status (Processing ➝ Shipped ➝ Delivered)
View Order Details (Products, Customer Info, Payment Status)
4️⃣ Earnings & Payouts
📌 Tracks the seller’s financial performance:

Total Earnings (Month-wise & Yearly)
Pending Payouts (Withdrawable Amount)
Commission Breakdown (Platform Fees, Taxes)
Payment Withdrawals (Bank Account / UPI Integration)
5️⃣ Customer Reviews & Ratings
📌 Displays feedback from buyers to improve service quality:

View Customer Reviews
Reply to Customer Feedback
Average Rating for Each Product
6️⃣ Notifications & Alerts
📌 Keeps sellers updated about important activities:

New Order Alerts
Low Stock Alerts
Payment Received Notifications
Customer Queries & Support Messages
7️⃣ Profile & Settings
📌 Allows sellers to manage their account details:

Edit Profile Information
Update Bank Details for Payments
Change Password & Security Settings
*/
const SellerPage = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category_id: "",
    seller_id: "",
  });
  const fetchProducts = async () => {
    try {
      const userResponse = await axios.get("http://localhost:3000/users/me", {
        withCredentials: true,
      });

      const seller_id = userResponse.data.id; // Get seller_id

      const response = await axios.get(
        `http://localhost:3000/seller/products?seller_id=${encodeURIComponent(
          seller_id
        )}`,
        {
          withCredentials: true,
        }
      );

      setProducts(response.data.products);
      console.log(products);
    } catch (error) {
      console.error("Error fetching products:", error.response?.data || error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const userResponse = await axios.get("http://localhost:3000/users/me", {
        withCredentials: true,
      });

      const seller_id = userResponse.data.id;
      console.log("seller", seller_id);

      setNewProduct((prev) => ({
        ...prev,
        seller_id: seller_id,
      }));
      console.log("new", newProduct);
      const response = await axios.post(
        "http://localhost:3000/seller/products",
        newProduct,
        {
          withCredentials: true,
        }
      );

      console.log(response);
      if (response.status === 200) {
        console.log("product added");
        fetchProducts();
      } else {
        console.log("err product addition");
      }
      // Fetch updated products list
      // Reset the form
      setNewProduct({
        name: "",
        description: "",
        price: "",
        stock: "",
        category_id: "",
        seller_id: "",
      });
      console.log(products);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleDeleteProduct = async (productID) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/seller/products/${productID}`,
        { withCredentials: true }
      );

      if (response.status === 200) {
        setProducts(products.filter((products) => products.id !== productID));
        console.log(productID, products);
        // console.log(`Product with id ${productID} is deleted`);
      }
    } catch (err) {
      console.log("Error Deleting the product");
    }
  };
  const handleEditProduct = async (productID, updatedData) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/seller/products/${productID}`,
        updatedData,
        { withCredentials: true }
      );

      if (response.status === 200) {
        setProducts(
          products.map((product) =>
            product.id === productID ? { ...product, ...updatedData } : product
          )
        );
      }
    } catch (err) {
      console.error("Error updating product:", err);
    }
  };

  return (
    <>
      <div className="sellerDashboard">
        <SellerPannel />

        <div className="section">
          <AddProduct
            handleAddProduct={handleAddProduct}
            handleChange={handleChange}
            newProduct={newProduct}
            // id={id}
          />
          <ProfileSetting />
        </div>
        <ProductList
          products={products}
          handleDeleteProduct={handleDeleteProduct}
          handleEditProduct={handleEditProduct}
        />
        <Payments />
        <OrderManagement />
        <CustomerReview />
      </div>
    </>
  );
};

export default SellerPage;
