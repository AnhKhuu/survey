import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@mui/material';
import React from 'react';
import { Question } from '../../../types/survey';

export default function MultiSelectQuestion({question, setAnswers}: {question: Question, setAnswers: any}) {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  const { gilad, jason, antoine } = state;

  return (
    <FormControl component="fieldset" variant="standard" sx={{marginBottom: "30px"}}>
        <FormLabel component="legend">{question.questionContent}</FormLabel>
        <FormGroup>
        {question.answers.map(answer => (
          <FormControlLabel
          control={
            <Checkbox onChange={handleChange} name={`${answer.answerId}`} />
          }
          label={answer.answerContent}
        />
        ))}
        </FormGroup>
      </FormControl>
  )
}
