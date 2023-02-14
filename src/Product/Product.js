import React, { useState, useEffect } from "react";
import { useRef } from "react";
import dataFake from "./data.json";
import * as p from "./product.css";
import Logo from "../assets/1.jpg";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ShopIcon from "@mui/icons-material/Shop";
import Alert from "../../src/customMaterial/alertCOMP/alert";
import { Link } from "react-router-dom";

export const Product = () => {
  const customAlert = useRef();
  const alt = (value) => {
    customAlert.current.success("Added to cart");
  };

  const [data, setData] = useState([]);
  console.log(data);
  const getProductFromDB = () => {
    // this is were data come from backend using AXIOS

    // axios
    //   .get("http://localhost:4000/news/")
    //   .then((res) => {
    //     console.log(res.data.data);
    //     setNews(res.data.data);
    try {
      let localStoraheProducts =
        JSON.parse(localStorage.getItem("products")) || [];
      setData([...localStoraheProducts, ...dataFake]);
    } catch (error) {
      console.log(error);
    }

    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     console.log("data insert fail");
    //   });
  };

  useEffect(() => {
    getProductFromDB();
  }, []);

  const [searchValue, setSearchValue] = useState("");
  console.log(searchValue);

  const [filterValue, setFilterValue] = useState("");
  const filter = (value) => {
    setFilterValue(value);
  };

  function search(rows) {
    // console.log(minValue);
    // console.log(maxValue);
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
      .filter((data) => data.price < maxValue)
      .filter((data) => data.price > minValue);
  }

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(Number.MAX_VALUE);

  const MaxMin = () => {
    let numberInputMax = document.getElementById("numberInputMax").value;
    let numberInputMin = document.getElementById("numberInputMin").value;
    if (numberInputMax == 0) {
      setMaxValue(Number.MAX_VALUE);
    } else {
      setMaxValue(numberInputMax);
    }
    setMinValue(numberInputMin);

    if (numberInputMax < numberInputMin) {
      setMinValue(numberInputMin);
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
