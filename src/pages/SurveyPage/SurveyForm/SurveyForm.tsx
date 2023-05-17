import { useFormik } from "formik";
import React, {useState} from "react";
import TextQuestion from "../TextQuestion/TextQuestion";
import TextAreaQuestion from "../TextAreaQuestion/TextAreaQuestion";
import SelectQuestion from "../SelectQuestion/SelectQuestion";
import MultiSelectQuestion from "../MultiSelectQuestion/MultiSelectQuestion";
import { Button, FormControl } from "@mui/material";
import Modal from "../../common/Modal/Modal";
import { useNavigate, useParams } from 'react-router-dom';
import { Question, QuestionType } from "../../../types/survey";
import { useGetSurveyById } from "../../../hooks/queries";
import { ResponseQuestionCreation } from "../../../types/response";


export default function SurveyForm() {
  const [openModal, setOpenModal] = useState(false)
  const [answers, setAnswers] = useState<ResponseQuestionCreation[]>();
  const {surveyId} = useParams();
  const {data, refetch} = useGetSurveyById(surveyId);
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => console.log(values),
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


  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl fullWidth>
        {questions.map((question) => {
          return renderInputFieldByType(question, setAnswers);
        })}
      </FormControl>
      <div className="mb-8 flex w-full justify-center">
        <Button variant="text" color="anger" onClick={handleToggleModal} sx={{marginRight: "16px"}}>
          Cancel
        </Button>
        <Button variant="contained" color="anger">
          Submit
        </Button>
      </div>
      <Modal 
      open={openModal}
      handleClose={handleToggleModal}
      dialogTitle={"Use Google's location service?"}
      dialogContentText={"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."}
      handleAction={handleRedirectToHomepage}
      />
    </form>
  );
}

function renderInputFieldByType(question: Question, setAnswers: React.Dispatch<React.SetStateAction<ResponseQuestionCreation[] | undefined>>) {
  switch (question.type) {
    case QuestionType.TEXT:
      return <TextQuestion question={question} setAnswers={setAnswers} />;
    case QuestionType.TEXTAREA:
      return <TextAreaQuestion question={question} setAnswers={setAnswers} />;
    case QuestionType.SELECT:
      return <SelectQuestion question={question} setAnswers={setAnswers} />;
    case QuestionType.MULTI_SELECT:
      return <MultiSelectQuestion question={question} setAnswers={setAnswers} />;
    default:
      break;
  }
}