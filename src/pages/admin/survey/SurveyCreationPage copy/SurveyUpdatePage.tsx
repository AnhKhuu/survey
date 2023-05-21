import {
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import AdminLayout from "../../../../Layout/AdminLayout/AdminLayout";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "../../../common/Modal/Modal";
import QuestionAccordion from "./QuestionAccordion/QuestionAccordion";
import { QuestionType, SurveyCreation, SurveyInfo } from "../../../../types/survey";
import { useCreateSurvey, useUpdateSurvey } from "../../../../hooks/mutations";
import { UserRoleId } from "../../../../types/user";
import { useGetSurveyById } from "../../../../hooks/queries";

export default function SurveyUpdatePage() {
  return (
    <AdminLayout>
      <h1 className="text-lg text-green font-bold text-center mb-5">
        Survey Update Form
      </h1>
      <SurveyUpdateForm />
    </AdminLayout>
  );
}

function SurveyUpdateForm() {
  const [openModal, setOpenModal] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [userRoleId, setUserRoleId] = useState<UserRoleId>();
  const {surveyId} = useParams()
  const {mutate: updateSurvey} = useUpdateSurvey({
    handleSuccess: () => navigate("/admin/survey-management"),
    handleError: (e) => console.log(e),
  });
  const {data, refetch} = useGetSurveyById(surveyId)
  let surveyDetail:any = {};
  const handleSetUserRoleId = (event: SelectChangeEvent) => {
    setUserRoleId(parseInt(event.target.value) as UserRoleId);
  };
  let navigate = useNavigate();
  if(data) {
    surveyDetail = data.data[0]
  }

  useEffect(() => {
    if(data) {
      setUserRoleId(data.data[0].userRoleId)
    }
  }, [data])
  

  const handleToggleModal = () => {
    setOpenModal((prev) => !prev);
  };

  const handleCancelCreationForm = () => {
    navigate("/admin/survey-management");
  };

  const handleSubmit = (values: any) => {
    const { title, img, description } = values;
    const questionList = questions.map((question: any) => ({
      questionContent: question.questionContent,
      type: question.type,
      answers: question.answers.map((answer: any) => ({
        answerContent: answer.answerContent,
        correctAnswer: answer.correctAnswer,
      })),
    }));
    const surveyInfo = {
      surveyId: parseInt(surveyId as string),
      userRoleId: userRoleId,
      title,
      img,
      description,
      questions: questions.map((question:any) => {
        return {
          ...question,
          surveyId: parseInt(surveyId as string)
        }
      }),
    } as SurveyCreation;
    // console.log({surveyInfo}, {userRoleId})
    updateSurvey(surveyInfo);
  };

  const formik = useFormik({
    initialValues: {
      surveyId: surveyDetail.surveyId,
      img: surveyDetail.img,
      description: surveyDetail.description,
      title: surveyDetail.title
    },
    enableReinitialize: true,
    onSubmit: (values: any) => {
      handleSubmit(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl fullWidth>
        <div className="mb-8">
          <FormControl sx={{ width: "200px" }}>
            <InputLabel id="add-more-question">Survey is for</InputLabel>
            <Select
              labelId="add-more-question"
              label="Survey is for"
              onChange={handleSetUserRoleId}
              defaultValue={surveyDetail.userRoleId}
            >
              <MenuItem value={UserRoleId.STUDENT}>Student</MenuItem>
              <MenuItem value={UserRoleId.STAFF}>Staff</MenuItem>
              <MenuItem value={QuestionType.SELECT}>Select question</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="mb-8">
          <TextField
            fullWidth
            id="outlined-basic"
            variant="outlined"
            placeholder="Please enter title..."
            name="title"
            onChange={formik.handleChange}
            value={formik.values.title}
            required
          />
        </div>
        <div className="mb-8">
          <TextField
            fullWidth
            id="outlined-basic"
            placeholder="Please enter description..."
            variant="outlined"
            name="description"
            onChange={formik.handleChange}
            required
            multiline
            value={formik.values.description}
            rows={5}
          />
        </div>
        <div className="mb-8">
        <TextField
          fullWidth
          id="img"
          name="img"
          placeholder="Please enter img url..."
          value={formik.values.img}
          onChange={formik.handleChange}
        />
        </div>
        <QuestionAccordion onChange={setQuestions} surveyInfo={surveyDetail as SurveyInfo} />
        <div className="flex justify-end">
          <Button
            variant="outlined"
            color="blue"
            onClick={() => handleToggleModal()}
          >
            Cancel
          </Button>
          <div className="ml-3">
            <Button variant="contained" color="blue" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </FormControl>
      <Modal
        dialogContentText="Are you sure to cancel this form?"
        dialogTitle="Cancel survey creation form confirmation"
        handleAction={() => handleCancelCreationForm()}
        handleClose={() => handleToggleModal()}
        open={openModal}
      />
    </form>
  );
}
