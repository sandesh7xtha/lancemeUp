import * as p from "./OrderList.css";
import React, { useEffect, useState } from "react";
import Data from "./FakeData.json";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Navigate, useNavigate } from "react-router-dom";
import Logo from "./logo512.png";

export const OrderList = () => {
  const navigate = useNavigate();

  const AddProduct = () => {
    navigate("/AddProduct");
  };

  const OrderList = () => {
    navigate("/OrderList");
  };
  const token = localStorage.getItem("token");
  const type = localStorage.getItem("type");

  if (!token) {
    return <Navigate to="/" />;
  }
  if (type === "clint") {
    return <Navigate to="/" />;
  }
  return (
    <p.root>
      <p.div>
        <p.NavMenu>
          <p.userName>Admin</p.userName>
          <p onClick={AddProduct}>Add Product</p>
          <p onClick={OrderList}>Order List</p>
        </p.NavMenu>

        <p.addSellForm>
          <TableContainer>
            <Table
              id="AdvertisementTable"
              sx={{ minWidth: 300 }}
              style={{ paddingTop: "1rem", paddingBottom: "rem" }}
            >
              <TableHead>
                <TableRow>
                  <TableCell align="left">SN</TableCell>
                  <TableCell align="left">Product ID</TableCell>
                  <TableCell align="left">Image</TableCell>
                  <TableCell align="left">Title</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Location</TableCell>
                </TableRow>
              </TableHead>
              <TableBody stripedRows>
                {Data.map((row, index) => (
                  <TableRow
                    key={row.name}
                    style={
                      index % 2
                        ? { backgroundColor: "#e0e0d1" }
                        : { backgroundColor: "white" }
                    }
                  >
                    <TableCell align="left">{index + 1}</TableCell>
                    <TableCell align="left">{row.adv_id}</TableCell>
                    <TableCell align="left">
                      <img
                        className="img"
                        src={Logo}
                        style={{ maxWidth: "8rem" }}
                      />
                    </TableCell>
                    <TableCell align="left">{row.title}</TableCell>
                    <TableCell align="right">{row.quantity}</TableCell>{" "}
                    <TableCell align="right">{row.location}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </p.addSellForm>
      </p.div>
    </p.root>
  );
};
