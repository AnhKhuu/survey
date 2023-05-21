import {
  Button,
  FormControl,
  FormLabel,
  TextField
} from "@mui/material";
import { useEffect, useState } from "react";
import { BsPlusLg, BsTrashFill } from "react-icons/bs";
import { getRandomId } from "../../../../../utils";
import { QuestionCreation, QuestionType } from "../../../../../types/survey";
import { useFormik } from "formik";

export default function MultiSelectQuestion({onChange, question}: {onChange: any, question: QuestionCreation}) {
  const [incorrectAnswers, setIncorrectAnswers] = useState([{
    answerId: getRandomId(),
  }]);
  const [correctAnswers, setCorrectAnswers] = useState([{
    answerId: getRandomId(),
  }]);
  
  const handleAddIncorrectAnswer = () => {
    setIncorrectAnswers([...incorrectAnswers, {answerId: getRandomId()}]);
  };

  const handleRemoveIncorrectAnswer = (id: number) => {
    setIncorrectAnswers(incorrectAnswers.filter(({answerId}) => answerId !== id));
  };

  const handleAddCorrectAnswer = () => {
    setCorrectAnswers([...correctAnswers, {answerId: getRandomId()}]);
  };

  const handleRemoveCorrectAnswer = (id: number) => {
    setCorrectAnswers(correctAnswers.filter(({answerId}) => answerId !== id));
  };

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => console.log(values),
  });

  useEffect(() => {
    onChange((prev:any) => (prev.map((question:any) => (question.questionId === question.questionId ? {
      questionId: question.questionId,
      questionContent: (formik.values as any).question,
      type: QuestionType.MULTI_SELECT,
      answers: [...correctAnswers, ...incorrectAnswers]
    }: question))))
  }, [formik.values, incorrectAnswers, correctAnswers])

  const handleOnChangeIncorrectAnswer = ({id, value}: {id: number, value: string}) => {
    setIncorrectAnswers((prev:any) => (prev.map((answer:any) => (answer.answerId === id ? {
      ...answer,
      answerContent: value,
      correctAnswer: false
    }: answer))))
  }

  const handleOnChangeCorrectAnswer = ({id, value}: {id: number, value: string}) => {
    setCorrectAnswers((prev:any) => (prev.map((answer:any) => (answer.answerId === id ? {
      ...answer,
      answerContent: value,
      correctAnswer: true
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
          {correctAnswers.map(({answerId}, index) => (
            <>
              <div className="flex items-center w-full justify-between">
                <FormControl fullWidth>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                    label={`Answer ${index + 1}`}
                    sx={{ marginBottom: "20px" }}
                    name={`correct-answer-${answerId}`}
                    onChange={(e) => handleOnChangeCorrectAnswer({id: answerId, value: e.target.value})}
                    required
                  />
                </FormControl>
                <Button
                  variant="text"
                  color="blue"
                  onClick={() => handleRemoveCorrectAnswer(answerId)}
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
            color="blue"
            onClick={() => handleAddCorrectAnswer()}
            sx={{ width: "200px", marginBottom: "30px" }}
          >
            <BsPlusLg />
            <p className="ml-2">Add more answer</p>
          </Button>
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
                  color="blue"
                  onClick={() => handleRemoveIncorrectAnswer(answerId)}
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
            color="blue"
            onClick={() => handleAddIncorrectAnswer()}
            sx={{ width: "200px", marginBottom: "30px" }}
          >
            <BsPlusLg />
            <p className="ml-2">Add more answer</p>
          </Button>
        </div>
      </div>
    </>
  );
}
