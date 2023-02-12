import React, { useState } from "react";
import * as n from "./Navbar.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ListAltIcon from "@mui/icons-material/ListAlt";

export const Navbar = () => {
  const logout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("type");
    // history.push("/signIn");
    window.location.reload(false);
  };

  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");
  const type = localStorage.getItem("type");

  return (
    <div>
      <n.Main>
        <n.Root>
          <n.NavMenu>
            <Link style={{ textDecoration: "none" }} to="/">
              <p style={{ fontSize: "20px" }}>Lanceme Up</p>
            </Link>
            {!token ? (
              <Link style={{ textDecoration: "none" }} to="/LoginPage">
                <Button
                  style={{
                    color: "black",
                    backgroundColor: "white",
                    borderStyle: "solid",
                    borderRadius: "0.4rem",
                    marginRight: "2rem",
                  }}
                >
                  Sign In
                </Button>
              </Link>
            ) : (
              <>
                <div style={{ padding: "20px", fontSize: "20px" }}>
                  {name.charAt(0).toUpperCase() + name.slice(1)}
                </div>
                &nbsp;
                {type === "admin" ? (
                  <Link style={{ textDecoration: "none" }} to="/OrderList">
                    <ListAltIcon
                      style={{
                        padding: "20px",
                        fontSize: "40px",
                        color: "white",
                      }}
                    />
                  </Link>
                ) : null}
                &nbsp;
                <Button
                  style={{
                    backgroundColor: "blue",
                    borderRadius: "0.4rem",
                    borderStyle: "solid",
                    color: "white",
                  }}
                  onClick={logout}
                >
                  Logout
                </Button>
              </>
            )}
          </n.NavMenu>
        </n.Root>
      </n.Main>
    </div>
  );
};
