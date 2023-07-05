import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "./../../datatableSource";

import "./datatable.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const Datatable = () => {
  // const [data, setData] = useState(userRows);

  const [credential, setCredential] = useState([]);

  useEffect(() => {
    axios
      .get("/accounts")
      .then((res) => setCredential(res.data.result))
      .catch((err) => console.log(err));
  }, []);



  console.log(credential);


  const handleDelete = (id) => {
    console.log(id)
    setCredential(credential.filter((item) => item.id !== id));
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            {/* <Link to="/users/userId" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link> */}
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        <span>Add New User</span>
        <Link to="/users/userId/new" style={{ textDecoration: "none" }}>
          <span className="link">Add New</span>
        </Link>
      </div>

 
          <DataGrid
            className="datagrid"
            rows={credential}
            columns={userColumns.concat(actionColumn)}
            pageSize={8}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
      
    </div>
  );
};
export default Datatable;
