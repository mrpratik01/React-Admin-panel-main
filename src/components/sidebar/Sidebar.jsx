import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";

// import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";

// import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";

import "./sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">365 Logistics</span>
        </Link>
      </div>
      <hr />
      <div className="bottom">
        <ul>
          <p className="title">MAIN</p>

          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>

          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <Person3OutlinedIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>

          <Link to="/vehicle" style={{ textDecoration: "none" }}>
            <li>
              <LocalShippingIcon className="icon" />
              <span>Vehicle</span>
            </li>
          </Link>

          <Link to="/order" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardOutlinedIcon className="icon" />
              <span>Orders</span>
            </li>
          </Link>

          {/* <li>
            <DnsOutlinedIcon className="icon" />
            <span>System Health</span>
          </li> */}

          {/* <p className="title">USER INTERFACE</p> */}

          <Link to="/login" style={{textDecoration:"none"}}>
            <li>
              <ExitToAppOutlinedIcon className="icon" />
              <span>Logout</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
