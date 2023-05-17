import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { Question } from "../../../types/survey";

export default function SelectQuestion({question, setAnswers}: {question: Question, setAnswers: any}) {
  return (
    <FormControl sx={{marginBottom: "30px"}}>
      <FormLabel id="question-id">{question.questionContent}</FormLabel>
      <RadioGroup
        aria-labelledby="question-id"
        name="radio-buttons-group"
      >
        {question.answers.map(answer => (
          <FormControlLabel value={answer.answerId} key={answer.answerId} control={<Radio />} label={answer.answerContent} />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
