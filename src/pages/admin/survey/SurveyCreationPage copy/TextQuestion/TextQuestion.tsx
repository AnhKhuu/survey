import { FormControl, FormLabel, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useEffect } from "react";
import { QuestionCreation, QuestionType } from "../../../../../types/survey";

export default function TextQuestion({onChange, question}: {onChange: any, question: QuestionCreation}) {
  const formik = useFormik({
    initialValues: {
      question: question.questionContent,
      answer: question.answers[0].answerContent,
    },
    onSubmit: (values) => console.log(values),
  });

  useEffect(() => {
    onChange((prev:any) => (prev.map((question:any) => (question.questionId === question.questionId ? {
      questionId: question.questionId,
      questionContent: (formik.values as any).question,
      type: QuestionType.TEXT,
      answers: [{
        answerContent: (formik.values as any).answer,
        correctAnswer: true,
        answerId: question.answers[0].answerId,
        questionId: question.questionId
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
              value={formik.values.question}
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
              value={formik.values.answer}
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
