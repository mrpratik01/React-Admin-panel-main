import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./list.scss";
import axios from "axios";





// const rows = [
//   {
//     id: 1,
//     packageDescription: "Bootels",
//     PickupAddress: "Jhapa, damak",
//     DropOffAddress: "jhapa, Birtamod",
//     category: "Plastic",
//     amount: 1200,
//     method: "Cash on Delivery",
//     status: "Approved",
//   },
//   {
//     id: 2,
//     packageDescription: "Beer",
//     PickupAddress: "Jhapa, damak",
//     DropOffAddress: "jhapa, Birtamod",
//     category: "Plastic",
//     amount: 1200,
//     method: "Cash on Delivery",
//     status: "Approved",
//   },
//   {
//     id: 3,
//     packageDescription: "Sugarcane",
//     PickupAddress: "Jhapa, damak",
//     DropOffAddress: "jhapa, Birtamod",
//     category: "Plastic",
//     amount: 1200,
//     method: "Cash on Delivery",
//     status: "Approved",
//   },
//   {
//     id: 4,
//     packageDescription: "Trouser",
//     PickupAddress: "Jhapa, damak",
//     DropOffAddress: "jhapa, Birtamod",
//     category: "Plastic",
//     amount: 1200,
//     method: "Cash on Delivery",
//     status: "Approved",
//   },
// ];

const List = () => {

  const [credential, setCredential] = useState([]);

  useEffect(() => {
    axios
      .get("/packages")
      .then((res) => setCredential(res.data.result))
      .catch((err) => console.log(err));
  }, []);

  console.log(credential);




  return (
    <div className="list">

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Package ID</TableCell>
              <TableCell className="tableCell">Package Description</TableCell>
              <TableCell className="tableCell">Pickup Address</TableCell>
              <TableCell className="tableCell">Drop-off Address</TableCell>
              <TableCell className="tableCell">category</TableCell>
              <TableCell className="tableCell">Weight</TableCell>
              <TableCell className="tableCell">Amount</TableCell>
              <TableCell className="tableCell">Total Km</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {credential.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="tableCell">{row.package_id}</TableCell>
                <TableCell className="tableCell">{row.packagedescription}</TableCell>
                <TableCell className="tableCell">{row.pickup_address}</TableCell>
                <TableCell className="tableCell">{row.dropoff_address}</TableCell>
                <TableCell className="tableCell">{row.package_category}</TableCell>
                <TableCell className="tableCell">{row.weight}</TableCell>
                <TableCell className="tableCell">{row.amount}</TableCell>
                <TableCell className="tableCell">
                  <span className={`status ${row.status}`}>{row.totalkm}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default List;
