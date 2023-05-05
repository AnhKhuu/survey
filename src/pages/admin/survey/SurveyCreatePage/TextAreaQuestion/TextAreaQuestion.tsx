import { FormControl, FormLabel, TextField } from "@mui/material";
import React from "react";

export default function TextAreaQuestion() {
  return (
    <div className="flex justify-between">
      <div className="w-60">
        <p>Question 1:</p>
      </div>
      <div className="flex-grow flex flex-col">
        <FormControl sx={{ marginBottom: "30px" }}>
          <TextField
            fullWidth
            id="outlined-basic"
            variant="outlined"
            label="Enter the question"
          />
        </FormControl>
        <FormControl sx={{ marginBottom: "30px" }}>
          <TextField
            multiline
            rows={5}
            fullWidth
            id="outlined-basic"
            variant="outlined"
            label="Enter the answer"
          />
        </FormControl>
        <FormControl sx={{ width: "300px" }}>
          <TextField
            fullWidth
            id="outlined-basic"
            variant="outlined"
            label="Enter the point"
          />
        </FormControl>
      </div>
    </div>
  );
}
