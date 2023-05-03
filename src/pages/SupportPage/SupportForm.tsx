import { FormControl, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import React from "react";

export default function SupportForm() {
  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => console.log(values),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl fullWidth>
        <div className="grid grid-cols-2 gap-4 mt-10">
            <TextField fullWidth label="Fullname" variant="outlined" />
            <TextField fullWidth label="Phone number" variant="outlined" />
        </div>
        <div className="my-10">
          <TextField
            fullWidth
            label="What is your problem?"
            variant="outlined"
            multiline
            rows={5}
          />
        </div>
        <div className="mx-auto mb-5">
          <Button variant="contained" color="anger">
            SUBMIT
          </Button>
        </div>
      </FormControl>
    </form>
  );
}
