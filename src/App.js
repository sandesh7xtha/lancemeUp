import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navbar } from "./navbar/Navbar";
import { LoginPage } from "./LoginPage/LoginPage";
import { Product } from "./Product/Product";
import { AddProduct } from "./AddProduct/AddProduct";
import { OrderList } from "./OrderList/OrderList";

import ProtectRoute from "./ProtectRoute/ProtectRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/LoginPage" element={<LoginPage />} />
        <Route exact path="/" element={<Product />} />
        <Route element={<ProtectRoute />}>
          <Route exact path="/AddProduct" element={<AddProduct />} />
          <Route exact path="/OrderList" element={<OrderList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
