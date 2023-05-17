import {
  Button,
  FormControl,
  FormLabel,
  TextField
} from "@mui/material";
import { useEffect, useState } from "react";
import { BsPlusLg, BsTrashFill } from "react-icons/bs";
import { getRandomId } from "../../../../../utils";
import { useFormik } from "formik";
import { QuestionType } from "../../../../../types/survey";

export default function SelectQuestion({onChange, questionId}: {onChange: any, questionId: number}) {
  const [incorrectAnswers, setIncorrectAnswers] = useState([{
    answerId: getRandomId(),
  }]);

  const handleAddAnswer = () => {
    setIncorrectAnswers([...incorrectAnswers, {answerId: getRandomId()}]);
  };

  const handleRemoveAnswer = (id: number) => {
    setIncorrectAnswers(incorrectAnswers.filter((answer) => answer.answerId !== id));
  };

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => console.log(values),
  });

  useEffect(() => {
    onChange((prev:any) => (prev.map((question:any) => (question.questionId === questionId ? {
      questionId: questionId,
      questionContent: (formik.values as any).question,
      type: QuestionType.SELECT,
      answers: [{
        answerContent: (formik.values as any).correctAnswer,
        correctAnswer: true
      }, ...incorrectAnswers]
    }: question))))
  }, [formik.values, incorrectAnswers])

  const handleOnChangeIncorrectAnswer = ({id, value}: {id: number, value: string}) => {
    setIncorrectAnswers((prev:any) => (prev.map((answer:any) => (answer.answerId === id ? {
      ...answer,
      answerContent: value,
      correctAnswer: false
    }: answer))))
  }
  
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
          <FormLabel>Correct answer:</FormLabel>
        </div>
        <div className="flex-grow">
          <FormControl sx={{ marginBottom: "30px" }} fullWidth>
            <TextField
              fullWidth
              id="outlined-basic"
              variant="outlined"
              placeholder="Enter the correct answer..."
              name="correctAnswer"
              onChange={formik.handleChange}
              required
            />
          </FormControl>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-1/5">
          <FormLabel>Incorrect answer:</FormLabel>
        </div>
        <div className="flex-grow">
          {incorrectAnswers.map(({answerId}, index) => (
            <>
              <div className="flex items-center w-full justify-between">
                <FormControl fullWidth>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                    label={`Answer ${index + 1}`}
                    sx={{ marginBottom: "20px" }}
                    name={`incorrect-answer-${answerId}`}
                    onChange={(e) => handleOnChangeIncorrectAnswer({id: answerId, value: e.target.value})}
                    required
                  />
                </FormControl>
                <Button
                  variant="text"
                  color="anger"
                  onClick={() => handleRemoveAnswer(answerId)}
                  sx={{ width: "200px" }}
                >
                  <BsTrashFill />
                  <p className="ml-2">Remove answer</p>
                </Button>
              </div>
            </>
          ))}
          <Button
            variant="text"
            color="anger"
            onClick={() => handleAddAnswer()}
            sx={{ width: "200px", marginBottom: '30px' }}
          >
            <BsPlusLg />
            <p className="ml-2">Add more answer</p>
          </Button>
        </div>
      </div>
    </>
  );
}
