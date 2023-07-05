import { createBrowserRouter, RouterProvider } from "react-router-dom";


import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Product from "./pages/product/Product";
import Customers from "./pages/customers/Customers";
import Order from "./pages/order/Order";
import NewOrder from "./pages/new/NewOrder"
import NewVehicle from "./pages/new/NewVehicle";


import { userInputs, vehicleInputs, orderInputs } from "./formData";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/users/:userId",
    element: <Single />,
  },
  {
    path: "/products/:productId",
    element: <Single />,
  },
  {
    path: "/users",
    element: <Customers />,
  },
  {
    path: "/order",
    element: <Order />,
  },
  {
    path: "/Vehicle",
    element: <Product/>,
  },

  {
    path: "/users/:userId/new",
    element: <New inputs={userInputs} title={"Add New User"} />,
  },
  {
    path: "/products/:productId/new",
    element: <NewVehicle inputs={vehicleInputs} title={"Add New Vehicle"} />,
  },
  {
    path: "/order/:orderId/new",
    element: <NewOrder inputs={orderInputs} title={"Add New Order"} />,
  },

  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
