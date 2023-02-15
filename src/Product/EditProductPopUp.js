import React, { useRef } from "react";
import * as p from "./EditProductPopUp.cs";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";
import TextField from "@mui/material/TextField";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import EditIcon from "@mui/icons-material/Edit";

import { useFormik } from "formik";
import * as Yup from "yup";

import Alert from "../customMaterial/alertCOMP/alert";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { FormControl, InputLabel } from "@mui/material";

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function DraggableDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const customAlert = useRef();

  const formik = useFormik({
    initialValues: {
      title: props.data.title,
      description: props.data.description,
      category: props.data.category,
      price: props.data.price,
    },
    validationSchema: Yup.object({
      title: Yup.string().min(5, "Must be 5 characters").required("Required"),
      description: Yup.string()
        .min(20, "Must be 5 characters")
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

  const sendToDatabase = (values) => {
    const data = {
      title: values.title,
      description: values.description,
      category: values.category,
      price: values.price,
    };
    customAlert.current.success("Product Update");
    setTimeout(handleClose, 1000);
  };

  return (
    <div>
      <EditIcon onClick={handleClickOpen} />

      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Product
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p.addSellForm>
              <p
                style={{
                  color: "#a8a8a8",
                }}
              >
                Edit Product Detail
              </p>
              <p.part>
                <p>Title</p>
                {formik.touched.title && formik.errors.title ? (
                  <TextField
                    id="title"
                    className="title"
                    variant="outlined"
                    error
                    size="small"
                    label={formik.errors.title}
                    {...formik.getFieldProps("title")}
                  />
                ) : (
                  <TextField
                    id="title"
                    className="title"
                    label="Title"
                    variant="outlined"
                    size="small"
                    {...formik.getFieldProps("title")}
                  />
                )}
              </p.part>

              <p.part>
                <p>Description</p>
                <div style={{ width: "13.9rem" }}>
                  {formik.touched.description && formik.errors.description ? (
                    <TextField
                      id="description"
                      className="Description"
                      multiline
                      rows={5}
                      variant="outlined"
                      error
                      fullWidth
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
                      fullWidth
                      {...formik.getFieldProps("description")}
                    />
                  )}
                </div>
              </p.part>
              {/* <br/> */}
              <p.part style={{ marginTop: "1rem" }}>
                <p>Category</p>
                <div style={{ width: "13.9rem" }}>
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
                          size="small"
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
                            value="                            tops
                            "
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            tops
                          </MenuItem>
                          <MenuItem
                            value="Pants"
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            Pants
                          </MenuItem>
                          <MenuItem
                            value="shoes"
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            {" "}
                            Shoes
                          </MenuItem>
                          <MenuItem
                            value="dresses"
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
                          size="small"
                          {...formik.getFieldProps("category")}
                        >
                          <MenuItem
                            value=""
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <em>None</em>
                          </MenuItem>
                          <MenuItem
                            value="                            tops
                            "
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            tops
                          </MenuItem>
                          <MenuItem
                            value="Pants"
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            Pants
                          </MenuItem>
                          <MenuItem
                            value="shoes"
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            {" "}
                            Shoes
                          </MenuItem>
                          <MenuItem
                            value="dresses"
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
                    size="small"
                    label={formik.errors.price}
                    {...formik.getFieldProps("price")}
                  />
                ) : (
                  <TextField
                    id="price"
                    className="Price"
                    label="(Rs) Price"
                    size="small"
                    variant="outlined"
                    {...formik.getFieldProps("price")}
                  />
                )}
              </p.part>

              <Alert ref={customAlert} />
            </p.addSellForm>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={formik.handleSubmit}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
