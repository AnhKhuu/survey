import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Question } from '../../../types/survey';
import { ResponseQuestionCreation } from '../../../types/response';

export default function MultiSelectQuestion({question, setAnswers}: {question: Question, setAnswers: any}) {
  const [state, setState] = useState<any>({});
  

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  useEffect(() => {
    setAnswers((prev: ResponseQuestionCreation[]) => {
      const answerIds = Object.keys(state)
      const selectedAnswerIds = answerIds.filter((answerId) => state[answerId])
      if(prev && prev.length>0) {
        return prev.map((answer) => answer.questionId === question.questionId ? 
          {...answer, selectedAnswerIds: selectedAnswerIds} : answer
        )
      }
      return prev
    });
  }, [state]);

  return (
    <FormControl component="fieldset" variant="standard" sx={{marginBottom: "30px"}} fullWidth>
        <FormLabel component="legend">{question.questionContent}</FormLabel>
        <FormGroup>
        {question.answers.map(answer => (
          <FormControlLabel
          control={
            <Checkbox checked={state.hasOwnProperty(answer.answerId) && state[`${answer.answerId}`]} onChange={handleChange} name={`${answer.answerId}`} />
          }
          label={answer.answerContent}
        />
        ))}
        </FormGroup>
      </FormControl>
  )
}
