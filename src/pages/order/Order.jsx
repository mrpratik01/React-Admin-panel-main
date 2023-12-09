import React from "react";
import "./order.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import List from "../../components/list/List";
import { Link } from "react-router-dom";

const Order = () => {
  return (
    <div className="order">
      <Sidebar />
      <div className="orderContainer">
        <Navbar />
        <div className="orderList">
          <div className="datatableTitle">
            <span>Blog Details</span>
            <Link to="/order/orderId/new" style={{ textDecoration: "none" }}>
              <span className="link">Add New </span>
            </Link>
          </div>
          <List></List>
        </div>
      </div>
    </div>
  );
};

export default Order;
