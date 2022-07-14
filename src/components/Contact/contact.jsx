import React from "react";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useFormik } from "formik";
import * as yup from "yup";
import { API_URL } from "../api/api";

const Contact = () => {
  
  const formvalidationSchema = yup.object({
    cname: yup
      .string()
      .required("Name is required ⚠️")
      .min(3, "Name must be at least 3️⃣ characters long"),
    cemail: yup
      .string()
      .required("email is required ⚠️")
      .min(3, "email must be at least 3️⃣ characters long")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        "Invalid email address"
      ),
    cmessage: yup
      .string()
      .required("message is required ⚠️")
      .min(20, "message must be at least 20 characters long"),
  });

  const {
    handleSubmit,
    values,
    handleChange,
    handleBlur,
    errors,
    touched,
    resetForm,
  } = useFormik({
    initialValues: { cname: "", cemail: "", cmessage: "" },
    validationSchema: formvalidationSchema,
    onSubmit: (values) => {
      postData(values);
    },
  });

  const postData = async () => {
    try {
      const res = await fetch(`${API_URL}/api/message`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (res.status === 400 || !res || res.status === 404) {
        window.alert("message not sent try again later");
      } else {
        window.alert("message sent successfully");
        resetForm();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="contact" style={{ height: "100vh" }}>
      <div
        className="contact-title"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h2>Contact Us</h2>
        <br />
        <div className="servicesubhead">
          Have Some <b className="servicewe"> Question</b>?
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
            margin: "-150px",
          }}
        >
          <div
            className="contact-img"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <img
              className="contact-image"
              src="https://www.blogtyrant.com/wp-content/uploads/2019/12/best-contact-us-pages-2.png"
              alt="contact"
              style={{
                height: "800px",
                width: "800px",
                objectFit: "contain",
                marginLeft: "-60px",
                marginRight: "40px",
              }}
            />
          </div>
          <form onSubmit={handleSubmit}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginRight: "50px",
                marginTop: "200px",
              }}
            >
              <TextField
                label="Your Name"
                variant="standard"
                type="text"
                style={{ width: "500px", height: "80px" }}
                name="cname"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cname}
                error={errors.cname && touched.cname}
                helperText={errors.cname && touched.cname ? errors.cname : ""}
              />
              <TextField
                label="Email Address"
                variant="standard"
                type="email"
                style={{ width: "500px", height: "80px" }}
                name="cemail"
                value={values.cemail}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.cemail && touched.cemail}
                helperText={
                  errors.cemail && touched.cemail ? errors.cemail : ""
                }
              />
              <TextField
                label="Your Message"
                multiline
                rows={4}
                variant="standard"
                type="text"
                style={{ width: "500px", height: "80px" }}
                name="cmessage"
                value={values.cmessage}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.cmessage && touched.cmessage}
                helperText={
                  errors.cmessage && touched.cmessage ? errors.cmessage : ""
                }
              />
              <Fab
                variant="extended"
                color="primary"
                aria-label="add"
                type="submit"
                style={{ width: "300px", marginTop: "80px" }}
              >
                <KeyboardArrowUpIcon sx={{ mr: 1 }} />
                send
              </Fab>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
