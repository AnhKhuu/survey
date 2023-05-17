import { FormControl, FormLabel, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useEffect } from "react";
import { QuestionType } from "../../../../../types/survey";

export default function TextQuestion({onChange, questionId}: {onChange: any, questionId: number}) {
  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => console.log(values),
  });

  useEffect(() => {
    onChange((prev:any) => (prev.map((question:any) => (question.questionId === questionId ? {
      questionId: question.questionId,
      questionContent: (formik.values as any).question,
      type: QuestionType.TEXT,
      answers: [{
        answerContent: (formik.values as any).answer,
        correctAnswer: true
      }]
    }: question))))
  }, [formik.values])

  return (
    <>
      <div className="flex justify-between">
        <div className="w-1/5">
          <FormLabel>Question:</FormLabel>
        </div>
        <div className="flex-grow">
          <FormControl sx={{ marginBottom: "30px" }} fullWidth>
            <TextField
              fullWidth
              id="outlined-basic"
              variant="outlined"
              placeholder="Enter the question..."
              name="question"
              onChange={formik.handleChange}
              required
            />
          </FormControl>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-1/5">
          <FormLabel>Answer:</FormLabel>
        </div>
        <div className="flex-grow">
          <FormControl sx={{ marginBottom: "30px" }} fullWidth>
            <TextField
              fullWidth
              id="outlined-basic"
              variant="outlined"
              placeholder="Enter the answer..."
              name="answer"
              onChange={formik.handleChange}
              required
            />
          </FormControl>
        </div>
      </div>
    </>
  );
}
