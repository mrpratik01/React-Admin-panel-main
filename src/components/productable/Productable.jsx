import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";

import Paper from "@mui/material/Paper";

import "./productable.scss";
import axios from "axios";

const Productable = () => {
  const [credential, setCredential] = useState([]);
  const handleDelete = (id) => {
    // Implement delete functionality here
    console.log(`Delete blog with ID ${id}`);
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/vehicle/get-vehicles")
      .then((res) => setCredential(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(credential);

  // const handleDelete = (id) => {
  //   console.log(id)
  //   setCredential(credential.filter((item) => item.id !== id));
  // };

  return (
    <div className="Productable">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Vehicle ID</TableCell>
              <TableCell className="tableCell">Vehicle Name</TableCell>
              <TableCell className="tableCell">Vehicle Description</TableCell>
              <TableCell className="tableCell">Vehicle Price</TableCell>
              <TableCell className="tableCell">Vehicle Type</TableCell>
              <TableCell className="tableCell">Kilometer</TableCell>
              <TableCell className="tableCell">Fuel</TableCell>
              <TableCell className="tableCell">Seats</TableCell>
              <TableCell className="tableCell">Vehicle Image</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(credential) &&
              credential.map((row) => (
                <TableRow key={row.partNumber}>
                  <TableCell className="tableCell">{row._id}</TableCell>
                  <TableCell className="tableCell">{row.vehicleName}</TableCell>
                  <TableCell className="tableCell">{row.vehicleDesc}</TableCell>
                  <TableCell className="tableCell">
                    {row.vehiclePrice}
                  </TableCell>
                  <TableCell className="tableCell">{row.vehicleType}</TableCell>
                  <TableCell className="tableCell">{row.km}</TableCell>
                  <TableCell className="tableCell">{row.fuel}</TableCell>
                  <TableCell className="tableCell">{row.seats}</TableCell>
                  <TableCell className="tableCell">
                    {row.vehicleImage}
                  </TableCell>

                  <TableCell className="tableCell">
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => handleDelete(row._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>

                  {/* <TableCell className="tableCell">
                  <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell> */}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Productable;
