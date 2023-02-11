import React, { useState } from "react";
import * as n from "./Navbar.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export const Navbar = () => {
  const logout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    // history.push("/signIn");
    // window.location.reload(false);
  };
  return (
    <div>
      <n.Main>
        <n.Root>
          <n.NavMenu>
            <p>Lanceme Up</p>
            <Link style={{ textDecoration: "none" }} to="/LoginPage">
              <Button
                style={{
                  color: "white",
                  backgroundColor: "blue",
                  borderStyle: "solid",
                  borderRadius: "0.4rem",
                }}
              >
                Sign In
              </Button>
            </Link>{" "}
            <Button
              style={{
                color: "white",
                backgroundColor: "blue",
                borderStyle: "solid",
                borderRadius: "0.4rem",
              }}
              onClick={logout}
            >
              logout
            </Button>
          </n.NavMenu>
        </n.Root>
      </n.Main>
    </div>
  );
};
