import React, { useState } from "react";
import { useRef } from "react";
import data from "./data.json";
import * as p from "./product.css";
import Logo from "./logo512.png";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ShopIcon from "@mui/icons-material/Shop";
import Alert from "../../src/customMaterial/alertCOMP/alert";
import { Link } from "react-router-dom";

// import { IoSearchCircle } from "react-icons/io5";

export const Product = () => {
  const customAlert = useRef();
  const alt = (value) => {
    customAlert.current.success("Added to cart");
  };
  const [searchValue, setSearchValue] = useState("");
  console.log(searchValue);

  const [filterValue, setFilterValue] = useState("");
  const filter = (value) => {
    setFilterValue(value);
  };

  function search(rows) {
    return rows
      .filter(
        (data) =>
          data.title
            .toString()
            .toLowerCase()
            .indexOf(searchValue.toLowerCase()) > -1 ||
          data.category
            .toString()
            .toLowerCase()
            .indexOf(searchValue.toLowerCase()) > -1
      )
      .filter((data) => data.category.includes(filterValue))
      .filter((data) => data.price < maxValue + 1)
      .filter((data) => data.price > minValue - 1);
  }

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(Number.MAX_SAFE_INTEGER);

  const MaxMin = () => {
    let numberInputMax = document.getElementById("numberInputMax").value;
    let numberInputMin = document.getElementById("numberInputMin").value;

    if (numberInputMax == 0) {
      setMaxValue(Number.MAX_SAFE_INTEGER);
    } else {
      setMaxValue(numberInputMax);
    }

    setMinValue(numberInputMin);
    if (numberInputMax < numberInputMin) {
      setMinValue(0);
    }
  };
  const type = localStorage.getItem("type");
  const token = localStorage.getItem("token");

  return (
    <p.root>
      <p.categories>
        <p.CategoryHeading>Categories</p.CategoryHeading>

        <p.categoriesSection>
          <p
            onClick={() => {
              filter("");
            }}
          >
            All Product
          </p>
          <p
            onClick={() => {
              filter("Tops");
            }}
          >
            Tops
          </p>
          <p
            onClick={() => {
              filter("Pants");
            }}
          >
            Pants
          </p>
          <p
            onClick={() => {
              filter("Shoes");
            }}
          >
            Shoes
          </p>
          <p
            onClick={() => {
              filter("Dresses");
            }}
          >
            Dresses
          </p>
          <p
            onClick={() => {
              filter("Accessories");
            }}
          >
            Accessories
          </p>
        </p.categoriesSection>

        <p.filterHeading>Filter</p.filterHeading>

        <p.filterSection>
          <p>Price</p>

          <p.input>
            <input
              type="number"
              min="0"
              id="numberInputMin"
              style={{ width: "3rem" }}
            />
            -
            <input
              type="number"
              min="0"
              id="numberInputMax"
              style={{ width: "3rem" }}
            />
            <SearchIcon className="iconSearch" onClick={MaxMin} />
          </p.input>
        </p.filterSection>
      </p.categories>
      <p.productSection>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
            mb: "15px",
            mt: "5px",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search "
            inputProps={{ "aria-label": "search " }}
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
                  <p.subGrid>
                    <price className="price">
                      Rs.{item.price ? item.price : " "}
                    </price>
                    <div style={{ display: "flex" }}>
                      {type === "admin" ? (
                        <>
                          <EditIcon />
                          <DeleteIcon />
                        </>
                      ) : token ? (
                        <ShopIcon onClick={alt} />
                      ) : (
                        <Link
                          style={{ textDecoration: "none" }}
                          to="/LoginPage"
                        >
                          <ShopIcon />
                        </Link>
                      )}
                    </div>
                  </p.subGrid>
                </p.Item>
              </p.Itemsub>
            ))}
          </p.Grid>
          <Alert ref={customAlert} />
        </p.upload>
      </p.productSection>
    </p.root>
  );
};
