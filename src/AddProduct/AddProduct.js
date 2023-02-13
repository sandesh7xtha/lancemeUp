import React, { useState, useRef } from "react";
import * as p from "./AddProduct.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { FormControl, InputLabel } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import IMGcroper from "../customMaterial/cropIMG/IMGcropper";

import Alert from "../customMaterial/alertCOMP/alert";

export const AddProduct = () => {
  const customAlert = useRef();

  const formik = useFormik({
    initialValues: {
      title: "",
      image: "",
      description: "",
      category: "",
      price: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().min(5, "Must be 5 characters").required("Required"),
      description: Yup.string()
        .min(20, "Must be 20 characters")
        .required("Required"),
      category: Yup.string().required("Required"),
      price: Yup.string()
        .matches(/^[0-9\b]+$/, "number only")
        .required("Required"),
    }),

    onSubmit: (values) => {
      console.log("hello");
      sendToDatabase(values);
    },
  });
  const [pic, setPic] = useState(null);

  const [checkImage, setCheckImage] = useState("");
  const sendToDatabase = (values) => {
    if (pic != null) {
      customAlert.current.success("good boy");
      formik.resetForm();
    } else {
      setCheckImage("image required");
      customAlert.current.error("Image required");
    }
  };

  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");
  const id = localStorage.getItem("id");
  const type = localStorage.getItem("type");

  const navigate = useNavigate();

  const AddProduct = () => {
    navigate("/AddProduct");
  };

  const OrderList = () => {
    navigate("/OrderList");
  };

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
          <p
            style={{
              marginBottom: "3rem",
              marginTop: "-0.9rem",
              color: "#a8a8a8",
            }}
          >
            Add Product
          </p>
          <p.part>
            <p>Title</p>
            {formik.touched.title && formik.errors.title ? (
              <TextField
                id="title"
                className="title"
                variant="outlined"
                error
                label={formik.errors.title}
                {...formik.getFieldProps("title")}
              />
            ) : (
              <TextField
                id="title"
                className="title"
                label="Title"
                variant="outlined"
                {...formik.getFieldProps("title")}
              />
            )}
          </p.part>

          <p.part>
            <p>Image</p>
            <div className="cropperDiv">
              <IMGcroper setPic={setPic} />
              <span style={{ color: "red", marginLeft: "1rem" }}>
                {" "}
                {checkImage}
              </span>{" "}
            </div>
          </p.part>

          <p.part>
            <p>Description</p>
            {formik.touched.description && formik.errors.description ? (
              <TextField
                id="description"
                className="Description"
                multiline
                rows={5}
                variant="outlined"
                error
                label={formik.errors.description}
                {...formik.getFieldProps("description")}
              />
            ) : (
              <TextField
                id="description"
                className="Description"
                label="Description"
                multiline
                rows={5}
                variant="outlined"
                {...formik.getFieldProps("description")}
              />
            )}
          </p.part>
          <p.part>
            <p style={{ marginRight: "11rem" }}>Category</p>
            <div>
              <FormControl fullWidth>
                {formik.touched.category && formik.errors.category ? (
                  <>
                    <InputLabel
                      id="demo-simple-select-label"
                      style={{ color: "#D32F2F" }}
                    >
                      Required
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      error
                      className="category"
                      label={formik.errors.category}
                      {...formik.getFieldProps("category")}
                    >
                      <MenuItem
                        value=""
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <em>None</em>
                      </MenuItem>

                      <MenuItem
                        value="Tops"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        Tops
                      </MenuItem>
                      <MenuItem
                        value="Pants"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        {" "}
                        Pants
                      </MenuItem>
                      <MenuItem
                        value="Shoes"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        Shoes
                      </MenuItem>
                      <MenuItem
                        value="Dresses"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        Dresses
                      </MenuItem>
                      <MenuItem
                        value="Accessories"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        Accessories
                      </MenuItem>
                    </Select>
                  </>
                ) : (
                  <>
                    <InputLabel id="demo-simple-select-label">
                      Select
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-selecl"
                      className="category"
                      label="Category"
                      {...formik.getFieldProps("category")}
                    >
                      <MenuItem
                        value=""
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <em>None</em>
                      </MenuItem>
                      <MenuItem
                        value="Tops"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        Tops
                      </MenuItem>
                      <MenuItem
                        value="Pants"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        Pants
                      </MenuItem>
                      <MenuItem
                        value="Shoes"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        Shoes
                      </MenuItem>
                      <MenuItem
                        value="Dresses"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        Dresses
                      </MenuItem>
                      <MenuItem
                        value="Accessories"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        Accessories
                      </MenuItem>
                    </Select>
                  </>
                )}
              </FormControl>
            </div>
          </p.part>

          <p.part>
            <p>Price</p>
            {formik.touched.price && formik.errors.price ? (
              <TextField
                id="price"
                className="Price"
                variant="outlined"
                error
                label={formik.errors.price}
                {...formik.getFieldProps("price")}
              />
            ) : (
              <TextField
                id="price"
                className="Price"
                label="(Rs) Price"
                variant="outlined"
                {...formik.getFieldProps("price")}
              />
            )}
          </p.part>

          <p.part>
            <Button
              className="addbutton"
              onClick={formik.handleSubmit}
              variant="outlined"
            >
              Add
            </Button>
            <Alert ref={customAlert} />
          </p.part>
        </p.addSellForm>
      </p.div>
    </p.root>
  );
};
