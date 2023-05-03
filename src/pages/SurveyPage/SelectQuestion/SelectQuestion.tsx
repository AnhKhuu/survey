import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import React from "react";

export default function SelectQuestion() {
  return (
    <FormControl sx={{marginBottom: "30px"}}>
      <FormLabel id="question-id">Do you have fun?</FormLabel>
      <RadioGroup
        aria-labelledby="question-id"
        // defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="so so" control={<Radio />} label="So so" />
        <FormControlLabel value="not really" control={<Radio />} label="Not really" />
        <FormControlLabel value="no" control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
  );
}
