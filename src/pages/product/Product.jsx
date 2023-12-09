import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import VehicleCard from "../../components/vehicleCard/VehicleCard";
import "./product.scss";
import Productable from "../../components/productable/Productable";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="product">
      <Sidebar />
      <div className="productContainer">
        <Navbar />
        <div className="productList">
          <div className="datatableTitle">
            <span>Vehicle Details</span>
            <Link
              to="/products/productId/new"
              style={{ textDecoration: "none" }}
            >
              <span className="link">Add New </span>
            </Link>
          </div>
        </div>
        <Productable></Productable>
      </div>
    </div>
  );
};

export default Product;
