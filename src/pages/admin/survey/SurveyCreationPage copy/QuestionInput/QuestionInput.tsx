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
import { QuestionCreation, QuestionType } from "../../../../../types/survey";

export default function QuestionInput({onChange, question}: {onChange: any, question: QuestionCreation}) {
  const [questionType, setQuestionType] = useState<QuestionType | undefined>(question.type);

  const handleSelectQuestion = (event: SelectChangeEvent) => {
    setQuestionType(event.target.value as QuestionType);
  };

  return (
    <>
      {questionType !== undefined ? (
        renderQuestionByType(questionType, onChange, question)
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

function renderQuestionByType(type: QuestionType, onChange: any, question: QuestionCreation) {
  switch (type) {
    case QuestionType.TEXT:
      return <TextQuestion onChange={onChange} question={question}/>;
    case QuestionType.TEXTAREA:
      return <TextAreaQuestion onChange={onChange} question={question}/>;
    case QuestionType.MULTI_SELECT:
      return <MultiSelectQuestion onChange={onChange} question={question}/>;
    case QuestionType.SELECT:
      return <SelectQuestion onChange={onChange} question={question}/>;
    default:
      break;
  }
}
