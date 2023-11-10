import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import "./login.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [loginData, setLoginData] = useState();

  const handleLogin = async () => {
    try {
      const res = await axios.post("/login-admin", loginData);

      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setLoginData((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };
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
            Login
          </Typography>

          <TextField
            margin="normal"
            type={"email"}
            variant="outlined"
            placeholder="Email"
            onChange={handleChange}
            name="email"
          ></TextField>
          <TextField
            margin="normal"
            type={"password"}
            variant="outlined"
            placeholder="password"
            onChange={handleChange}
            name="email"
          ></TextField>
          <Button
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="contained"
            color={"warning"}
            onClick={handleLogin}
          >
            Login
          </Button>

          <Link to="/register" style={{ textDecoration: "none" }}>
            <Button sx={{ marginTop: 3, borderRadius: 3 }}>
              Register Now !
            </Button>
          </Link>
        </Box>
      </form>
    </div>
  );
};

export default Login;
