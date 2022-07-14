import React from "react";
import "./UpdateTable.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  Button,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import UpdateIcon from '@mui/icons-material/Update';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { API_URL } from "../../api/api";

const UpdateTable = () => {

  const location = useLocation();
  const employee = location.state;
  
  const nagvigate = useNavigate();

  const formvalidationSchema = yup.object({
    empname: yup
      .string()
      .required("Employee Name is required")
      .max(20, "Employee Name is too long"),
    empemail: yup
      .string()
      .required("email is required ⚠️")
      .min(3, "email must be at least 3️⃣ characters long")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        "Invalid email address"
      ),
    profilepic: yup
      .string()
      .required("Profile Pic is required")
      .min(3, "Profile Pic must be at least 3️⃣ characters long"),
    empphone: yup
      .string()
      .required("Phone Number is required")
      .min(3, "Phone Number must be at least 3️⃣ characters long"),
    empwork: yup
      .string()
      .required("Work is required")
      .min(3, "Work must be at least 3️⃣ characters long"),
  });

  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        empname: employee.empname,
        empemail: employee.empemail,
        profilepic: employee.profilepic,
        empphone: employee.empphone,
        empwork: employee.empwork,
      },
      validationSchema: formvalidationSchema,
      onSubmit: (values) => {
        updateEmployee(values);
      },
    });

    //update employee
    const updateEmployee = async () => {
      const response = await fetch(`${API_URL}/api/updateemployee/${employee._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if(response.status === 400 || !response){
        window.alert("Error updating customer");
      }else{
        window.alert("Customer updated successfully");
        nagvigate("/dashboard");
      }
    }


  return (
    <div className="updateTable">
      <div className="updateTableHeader">UPDATE CUSTOMER</div>
      <div className="updateTableBody">
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="standard"
            size="large"
            type="text"
            style={{ width: "500px", display: "flex", justifyContent: "center", marginBottom: "20px" }}
            name="empname"
            value={values.empname}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.empname && touched.empname}
            helperText={errors.empname && touched.empname ? errors.empname : ""}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ContactMailOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            label="Email"
            variant="standard"
            size="large"
            type="email"
            style={{ width: "500px", display: "flex", justifyContent: "center", marginBottom: "20px" }}
            name="empemail"
            value={values.empemail}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.empemail && touched.empemail}
            helperText={
              errors.empemail && touched.empemail ? errors.empemail : ""
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            label="Profile Picture"
            variant="standard"
            size="large"
            type="text"
            style={{ width: "500px", display: "flex", justifyContent: "center", marginBottom: "20px" }}
            name="profilepic"
            value={values.profilepic}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.profilepic && touched.profilepic}
            helperText={
              errors.profilepic && touched.profilepic ? errors.profilepic : ""
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhotoOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            label="Phone Number"
            variant="standard"
            size="large"
            type="text"
            style={{ width: "500px", display: "flex", justifyContent: "center", marginBottom: "20px" }}
            name="empphone"
            value={values.empphone}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.empphone && touched.empphone}
            helperText={
              errors.empphone && touched.empphone ? errors.empphone : ""
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocalPhoneOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />

          <FormControl style={{ width: "500px", display: "flex", justifyContent: "center", marginBottom: "20px" }} required>
            <InputLabel id="demo-simple-select-helper-label">Departement</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              variant="standard"
              value={values.empwork}
              label="Department"
              name="empwork"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              
              <MenuItem value={"Strategic CRM"}>Strategic CRM</MenuItem>
              <MenuItem value={"Operational CRM"}>Operational CRM</MenuItem>
              <MenuItem value={"Analytical CRM"}>Analytical CRM</MenuItem>
              <MenuItem value={"Collaborative CRM"}>Collaborative CRM</MenuItem>
            </Select>
            <FormHelperText>{errors.empwork && touched.empwork ? errors.empwork : ""}</FormHelperText>
          </FormControl>

          <Typography style={{ marginBottom: "10px", marginTop: "10px", display: "flex", justifyContent: "space-between" }}>
          <Button variant="contained" onClick={() => nagvigate('/dashboard')} startIcon={<ArrowBackIosIcon />}>
              back
            </Button>
            <Button variant="contained" type="submit" startIcon={<UpdateIcon />}>
              update
            </Button>
          </Typography>
        </form>
      </div>
    </div>
  );
};

export default UpdateTable;
