import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import React, { useState } from "react";
import TextQuestion from "../TextQuestion/TextQuestion";
import TextAreaQuestion from "../TextAreaQuestion/TextAreaQuestion";
import MultiSelectQuestion from "../MultiSelectQuestion/MultiSelectQuestion";
import SelectQuestion from "../SelectQuestion/SelectQuestion";

enum QuestionType {
  TEXT,
  TEXTAREA,
  MULTI_SELECT,
  SELECT,
}

export default function QuestionInput() {
  const [questionType, setQuestionType] = useState<QuestionType>();

  const handleSelectQuestion = (event: SelectChangeEvent) => {
    setQuestionType(parseInt(event.target.value));
  };

  return (
    <>
      {questionType !== undefined ? (
        renderQuestionByType(questionType)
      ) : (
        <FormControl sx={{ width: "200px" }}>
          <InputLabel id="add-more-question">Select question type</InputLabel>
          <Select
            labelId="add-more-question"
            label="Select question type"
            onChange={handleSelectQuestion}
          >
            <MenuItem value={QuestionType.TEXT}>Text question</MenuItem>
            <MenuItem value={QuestionType.TEXTAREA}>Textarea question</MenuItem>
            <MenuItem value={QuestionType.MULTI_SELECT}>
              Multi-select question
            </MenuItem>
            <MenuItem value={QuestionType.SELECT}>Select question</MenuItem>
          </Select>
        </FormControl>
      )}
    </>
  );
}

function renderQuestionByType(type: QuestionType) {
  switch (type) {
    case QuestionType.TEXT:
      return <TextQuestion />;
    case QuestionType.TEXTAREA:
      return <TextAreaQuestion />;
    case QuestionType.MULTI_SELECT:
      return <MultiSelectQuestion />;
    case QuestionType.SELECT:
      return <SelectQuestion />;
    default:
      break;
  }
}
