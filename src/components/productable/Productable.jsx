import React, {useState, useEffect} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./productable.scss";
import axios from "axios";


export const rows = [
  {
    vehicle_id: "V001",
    vehicleName: "Nissan Truck",
    brands: "TATA",
    price: "NRS 4000",
    stock: "in stock",

  },

  
];
const Productable = () => {


  const [credential, setCredential] = useState([]);

  useEffect(() => {
    axios
      .get("/vehicles")
      .then((res) => setCredential(res.data.result))
      .catch((err) => console.log(err));
  }, []);

  console.log(credential);



  // const handleDelete = (id) => {
  //   console.log(id)
  //   setCredential(credential.filter((item) => item.id !== id));
  // };

  return (
    <div className="productable">
      <TableContainer component={Paper} className="tablecontainer">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Vehicle ID</TableCell>
              <TableCell className="tableCell">Vehicle Name</TableCell>
              <TableCell className="tableCell">Brands</TableCell>
              <TableCell className="tableCell">Price / hr</TableCell>
              <TableCell className="tableCell">Stock</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {credential.map((row) => (
              <TableRow key={row.partNumber}>
                <TableCell className="tableCell">{row.vehicle_id}</TableCell>
                <TableCell className="tableCell">{row.vehiclename}</TableCell>
                <TableCell className="tableCell">{row.brands}</TableCell>
                <TableCell className="tableCell">{row.price}</TableCell>
                <TableCell className="tableCell">
                  {row.stock}
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
