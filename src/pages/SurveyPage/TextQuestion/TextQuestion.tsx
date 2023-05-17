import { FormControl, FormLabel, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { ResponseQuestionCreation } from '../../../types/response';
import { Question } from '../../../types/survey';

export type QuestionProps = {
  question: Question,
  setAnswers: React.Dispatch<React.SetStateAction<ResponseQuestionCreation[] | undefined>>
}

export default function TextQuestion(props: QuestionProps) {
  const {question, setAnswers} = props
  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => console.log(values),
  });

  useEffect(() => {
    // setAnswers()
  })
  
  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl sx={{marginBottom: "30px"}}>
        <FormLabel>{question.questionContent}</FormLabel>
        <TextField
              fullWidth
              id="outlined-basic"
              variant="outlined"
              name={`${question.questionId}`}
            />
      </FormControl>
    </form>
  )
}
