import React, { useState } from "react";
import data from "./data.json";
import * as p from "./product.css";
import Logo from "./logo512.png";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export const Product = () => {
  const [searchValue, setSearchValue] = useState("");
  console.log(searchValue);

  function search(rows) {
    return rows.filter(
      (data) =>
        data.title.toString().toLowerCase().indexOf(searchValue.toLowerCase()) >
        -1
    );
  }

  return (
    <p.root>
      <p.productSection>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Google Maps"
            inputProps={{ "aria-label": "search google maps" }}
            // value={searchValue}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                search(searchValue);
              }
            }}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        <p.upload>
          <p.Grid>
            {search(data).map((item, index) => (
              <p.Itemsub>
                <p.Item>
                  <img src={Logo} />
                  <name>{item.title.substr(0, 20)}...</name>
                  <price>Rs.{item.price}</price>
                </p.Item>
              </p.Itemsub>
            ))}
          </p.Grid>
        </p.upload>
      </p.productSection>
    </p.root>
  );
};
