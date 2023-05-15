import { FormControl, FormLabel, TextField } from "@mui/material";
import React from "react";

export default function TextAreaQuestion({onChange, questionId}: {onChange: any, questionId: number}) {
  return (
    <>
      <div className="flex justify-between">
        <div className="w-1/5">
          <FormLabel>Question:</FormLabel>
        </div>
        <div className="flex-grow">
          <FormControl sx={{ marginBottom: "30px" }} fullWidth>
            <TextField
              fullWidth
              id="outlined-basic"
              variant="outlined"
              placeholder="Enter the question..."
              name={`question-${questionId}`}
              onChange={onChange}
              required
            />
          </FormControl>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-1/5">
          <FormLabel>Answer:</FormLabel>
        </div>
        <div className="flex-grow">
          <FormControl sx={{ marginBottom: "30px" }} fullWidth>
            <TextField
              multiline
              rows={5}
              fullWidth
              id="outlined-basic"
              variant="outlined"
              placeholder="Enter the Answer..."
              name={`question-${questionId}`}
              onChange={onChange}
              required
            />
          </FormControl>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-1/5">
          <FormLabel>Point:</FormLabel>
        </div>
        <div className="flex-grow">
          <FormControl sx={{ marginBottom: "30px" }} fullWidth>
            <TextField
              fullWidth
              id="outlined-basic"
              variant="outlined"
              placeholder="Enter the Point..."
              name={`point-${questionId}`}
              onChange={onChange}
              required
            />
          </FormControl>
        </div>
      </div>
    </>
  );
}
