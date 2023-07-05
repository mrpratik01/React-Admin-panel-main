import React, { useState } from "react";
import "./register.scss";
import axios from "axios"
import { Box, TextField, Button, Typography } from "@mui/material";

const Register = () => {
  const [registerData, setRegisterData] = useState()

  const handleRegister = async () => {
    try{
     const res = await axios.post("/register-admin", registerData)

     console.log(res.data)

    }
    catch (err) {
      console.log(err)

    }


  }

  const handleChange = (e) => {
    setRegisterData((pre) => ({
      ...pre,[e.target.name] : e.target.value
    }
    ))

  }



 


  return (
    <div>
    <form>
      <Box
        display="flex"
        flexDirection={"column"}
        maxWidth={400}
        alignItems="center"
        justifyContent={"center"}
        margin="auto"
        marginTop={5}
        padding={3}
        borderRadius={5}
        boxShadow={"5px 5px 10px #ccc"}
        sx={{
          ":hover": {
            boxShadow: "10px 10px 20px #ccc",
          },
        }}
      >
        <Typography variant="h2" padding={3} textAlign="center">
          Register
        </Typography>
        <TextField
          margin="normal"
          type={"text"}
          variant="outlined"
          placeholder="Name"
          onChange={handleChange}
          name = "name"

        ></TextField>
        <TextField
          margin="normal"
          type={"email"}
          variant="outlined"
          placeholder="Email"
          onChange={handleChange}
          name = "email"

        ></TextField>
        <TextField
          margin="normal"
          type={"number"}
          variant="outlined"
          placeholder="Phone Number"
          onChange={handleChange}
          name = "phoneNumber"
        ></TextField>
        <TextField
          margin="normal"
          type={"password"}
          variant="outlined"
          placeholder="Password"
          onChange={handleChange}
          name = "password"

        ></TextField>
        <TextField
          margin="normal"
          type={"password"}
          variant="outlined"
          placeholder="Confirm Password"
          onChange={handleChange}
          name = "confirmPassword"
        ></TextField>
        <Button
          sx={{ marginTop: 3, borderRadius: 3 }}
          variant="contained"
          color={"warning"}
         onClick= {handleRegister}
        >
          Register
        </Button>
      
      </Box>
    </form>
  </div>
  );
};

export default Register;
