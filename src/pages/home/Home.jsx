import React from "react";

import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import List from "../../components/list/List";

import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <>
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="widgets">
            <Widget type="order" />
            <Widget type="earnings" />
            <Widget type="balance" />
          </div>

          <List></List>

          {/* <div className="charts">
            <Featured />
            <Chart title="Last 6 months (Revenue)" aspect={2 / 1} />
          </div> */}
          {/* <div className="listContainer">
            <div className="listTitle">Latest Transactions</div>
            <List />
          </div> */}
        </div>
      </>
    </div>
  );
};

export default Home;
