import logo from "./logo.svg";
import { BrowserRouter, Route, Switch, Routes } from "react-router-dom";

import { Navbar } from "./navbar/Navbar";
import { LoginPage } from "./LoginPage/LoginPage";
import { Product } from "./Product/Product";
import { AddProduct } from "./AddProduct/AddProduct";
import { OrderList } from "./OrderList/OrderList";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/LoginPage" element={<LoginPage />} />
        <Route exact path="/" element={<Product />} />
        <Route exact path="/AddProduct" element={<AddProduct />} />
        <Route exact path="/OrderList" element={<OrderList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
