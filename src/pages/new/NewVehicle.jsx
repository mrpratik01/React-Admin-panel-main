import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./new.scss";
import axios from "axios";
import { Link } from "react-router-dom";
const NewVehicle = ({ inputs, title }) => {
  const [userData, setUserData] = useState({});

  const handleChange = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(userData)
  const submitButton = async () => {
    try {
    
        console.log(userData)
      const res = await axios.post("/create-vehicle", userData);

      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(userData);

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          {/* <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "/assets/person/DefaultProfile.jpg"
              }
              alt=""
              className="image"
            />
          </div> */}
          <div className="right">
            <form>
              {/* <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlined className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div> */}
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    type={input.type}
                    id={input.id}
                    name={input.name}
                    onChange={handleChange}
                    placeholder={input.placeholder}
                  />
                </div>
              ))}

              <Link to="/vehicle">
                <button onClick={submitButton} type="submit">
                  Send
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewVehicle;