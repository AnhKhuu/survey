import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { Question } from "../../../types/survey";
import { useEffect, useState } from "react";
import { ResponseQuestionCreation } from "../../../types/response";

export default function SelectQuestion({
  question,
  setAnswers,
}: {
  question: Question;
  setAnswers: any;
}) {
  const [answerIds, setAnswersId] = useState<number[]>([]);

  useEffect(() => {
    setAnswers((prev: ResponseQuestionCreation[]) => {
      if(prev && prev.length>0) {
        return prev.map((answer) => answer.questionId === question.questionId ? 
          {...answer, selectedAnswerIds: answerIds} : answer
        )
      }
      return prev
    });
  }, [answerIds]);

  return (
    <FormControl sx={{ marginBottom: "30px" }} fullWidth>
      <FormLabel id="question-id">{question.questionContent}</FormLabel>
      <RadioGroup aria-labelledby="question-id" name="radio-buttons-group">
        {question.answers.map((answer) => (
          <FormControlLabel
            value={answer.answerId}
            key={answer.answerId}
            control={<Radio />}
            label={answer.answerContent}
            onChange={() => setAnswersId([answer.answerId])}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
