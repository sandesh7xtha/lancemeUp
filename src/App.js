import logo from "./logo.svg";
import { BrowserRouter, Route, Switch, Routes } from "react-router-dom";

import { Navbar } from "./navbar/Navbar";
import { LoginPage } from "./LoginPage/LoginPage";
import { Product } from "./Product/Product";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/LoginPage" element={<LoginPage />} />
        <Route exact path="/" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
