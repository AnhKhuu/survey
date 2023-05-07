import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { getRandomId } from "../../../../../utils";

export default function SelectQuestion() {
  const [answerIds, setAnswerIds] = useState([getRandomId()]);

  const handleAddAnswer = () => {
    setAnswerIds([...answerIds, getRandomId()]);
  };
  return (
    <div className="flex justify-between">
      <div className="w-60">
        <p>Question 1:</p>
      </div>
      <div className="flex-grow flex flex-col">
        <FormControl sx={{ marginBottom: "30px", display: 'flex' }}>
          <TextField
            fullWidth
            id="outlined-basic"
            variant="outlined"
            label="Enter the question"
          />
        </FormControl>
        <FormControl sx={{ marginBottom: "30px" }}>
          <FormLabel id="question-id">Enter the answer</FormLabel>
          {answerIds.map((id, index) => (<TextField
            key={id}
            fullWidth
            id="outlined-basic"
            variant="outlined"
            label={`Answer ${index}`}
            sx={{marginBottom: '20px'}}
          />))}
          <Button
            variant="text"
            color="anger"
            onClick={() => handleAddAnswer()}
            sx={{width: '200px'}}
          >
            <BsPlusLg />
            <p className="ml-2">Add more answer</p>
          </Button>
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
