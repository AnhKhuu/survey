import { useFormik } from "formik";
import React, {useEffect, useState} from "react";
import TextQuestion from "../TextQuestion/TextQuestion";
import TextAreaQuestion from "../TextAreaQuestion/TextAreaQuestion";
import SelectQuestion from "../SelectQuestion/SelectQuestion";
import MultiSelectQuestion from "../MultiSelectQuestion/MultiSelectQuestion";
import { Button, FormControl } from "@mui/material";
import Modal from "../../common/Modal/Modal";
import { useNavigate, useParams } from 'react-router-dom';
import { Question, QuestionType } from "../../../types/survey";
import { useGetSurveyById } from "../../../hooks/queries";
import { ResponseCreation, ResponseQuestionCreation } from "../../../types/response";
import { useSendResponse } from "../../../hooks/mutations";


export default function SurveyForm() {
  const [openModal, setOpenModal] = useState(false)
  const [answers, setAnswers] = useState<ResponseQuestionCreation[]>();
  const {surveyId} = useParams();
  const {data, refetch} = useGetSurveyById(surveyId);
  const {mutate: sendResponse} = useSendResponse({handleSuccess, handleError});
  function handleSuccess() {
    navigate('/')
  }

  function handleError(e:any) {
    console.log(e)
  }

  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      const response = {
        surveyId: parseInt(surveyId as string),
        userId: 1,
        questions: answers
      }
      sendResponse(response as ResponseCreation)
    },
  });
  const handleToggleModal = () => {
    setOpenModal(prev => !prev)
  }
  const handleRedirectToHomepage = () => {
    navigate('/')
  }
  let questions:Question[] = [];

  if(data) {
    questions = data.data[0].questions
  }

  useEffect(() => {
    if(data && answers === undefined) {
      setAnswers(data?.data[0].questions.map((question:any) => ({
        questionId: question.questionId, 
        selectedAnswerIds: []
      })))
    }
  }, [data])
  
  return (
    <form onSubmit={formik.handleSubmit}>
        {questions.map((question) => {
          return <div key={question.questionId}>
            {renderInputFieldByType(question, setAnswers)}
          </div>
        })}
      <div className="mb-8 flex w-full justify-center">
        <Button variant="text" color="anger" onClick={handleToggleModal} sx={{marginRight: "16px"}}>
          Cancel
        </Button>
        <Button variant="contained" color="anger" type="submit">
          Submit
        </Button>
      </div>
      <Modal 
        open={openModal}
        handleClose={handleToggleModal}
        dialogTitle={"Are you sure to cancel this form?"}
        dialogContentText={"Cancel survey form confirmation."}
        handleAction={handleRedirectToHomepage}
      />
    </form>
  );
}

function renderInputFieldByType(question: Question, setAnswers: React.Dispatch<React.SetStateAction<ResponseQuestionCreation[] | undefined>>) {
  switch (question.type) {
    case QuestionType.TEXT:
      return <TextQuestion question={question} setAnswers={setAnswers}/>;
    case QuestionType.TEXTAREA:
      return <TextAreaQuestion question={question} setAnswers={setAnswers}/>;
    case QuestionType.SELECT:
      return <SelectQuestion question={question} setAnswers={setAnswers}/>;
    case QuestionType.MULTI_SELECT:
      return <MultiSelectQuestion question={question} setAnswers={setAnswers}/>;
    default:
      break;
  }
}