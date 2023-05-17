import { FormControl, FormLabel, TextField } from "@mui/material";
import React from "react";
import { Question } from "../../../types/survey";

export default function TextAreaQuestion({question, setAnswers}: {question: Question, setAnswers: any}) {
  return (
    <FormControl sx={{ marginBottom: "30px" }}>
      <FormLabel>{question.questionContent}</FormLabel>
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
