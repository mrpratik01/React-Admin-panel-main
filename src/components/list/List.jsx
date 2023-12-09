import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import axios from "axios";
import "./list.scss";

const List = () => {
  const [credential, setCredential] = useState([]);

  useEffect(() => {
    axios
      .get("/blog/get-blogs")
      .then((res) => setCredential(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (id) => {
    // Implement edit functionality here
    console.log(`Edit blog with ID ${id}`);
  };

  const handleDelete = (id) => {
    // Implement delete functionality here
    console.log(`Delete blog with ID ${id}`);
  };

  return (
    <div className="list">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Blog ID</TableCell>
              <TableCell className="tableCell">Title</TableCell>
              <TableCell className="tableCell">Body</TableCell>
              <TableCell className="tableCell">Created At</TableCell>
              <TableCell className="tableCell">Updated At</TableCell>
              <TableCell className="tableCell">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {credential.map((row) => (
              <TableRow key={row._id}>
                <TableCell className="tableCell">{row._id}</TableCell>
                <TableCell className="tableCell">{row.title}</TableCell>
                <TableCell className="tableCell">{row.body}</TableCell>
                <TableCell className="tableCell">{row.createdAt}</TableCell>
                <TableCell className="tableCell">{row.updatedAt}</TableCell>
                <TableCell className="tableCell">
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleDelete(row._id)}
                  >
                    Delete
                  </Button>
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
