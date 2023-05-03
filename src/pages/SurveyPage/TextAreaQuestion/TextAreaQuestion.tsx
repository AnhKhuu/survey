import { FormControl, FormLabel, TextField } from "@mui/material";
import React from "react";

export default function TextAreaQuestion() {
  return (
    <FormControl sx={{ marginBottom: "30px" }}>
      <FormLabel>Do you have some fun?</FormLabel>
      <TextField
        multiline
        rows={5}
        fullWidth
        id="outlined-basic"
        variant="outlined"
      />
    </FormControl>
  );
}
