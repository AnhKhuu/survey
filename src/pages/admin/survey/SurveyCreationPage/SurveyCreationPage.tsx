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
import { useState } from "react";
import AdminLayout from "../../../../Layout/AdminLayout/AdminLayout";
import { useNavigate } from "react-router-dom";
import Modal from "../../../common/Modal/Modal";
import QuestionAccordion from "./QuestionAccordion/QuestionAccordion";
import { QuestionType, SurveyCreation } from "../../../../types/survey";
import { useCreateSurvey } from "../../../../hooks/mutations";
import { UserRoleId } from "../../../../types/user";

export default function SurveyCreatePage() {
  return (
    <AdminLayout>
      <h1 className="text-lg text-green font-bold text-center mb-5">
        Survey Creation Form
      </h1>
      <SurveyCreationForm />
    </AdminLayout>
  );
}

function SurveyCreationForm() {
  const [openModal, setOpenModal] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [userRoleId, setUserRoleId] = useState<UserRoleId>();

  const handleSetUserRoleId = (event: SelectChangeEvent) => {
    setUserRoleId(parseInt(event.target.value) as UserRoleId);
  };
  let navigate = useNavigate();
  const { mutate: createSurvey } = useCreateSurvey({
    handleSuccess: () => navigate("/admin/survey-management"),
    handleError: (e) => console.log(e),
  });

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
      userRoleId: userRoleId,
      title,
      img,
      description,
      questions: questionList,
    } as SurveyCreation;
    createSurvey(surveyInfo);
  };

  const formik = useFormik({
    initialValues: {},
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
            >
              <MenuItem value={UserRoleId.STUDENT}>Student</MenuItem>
              <MenuItem value={UserRoleId.STAFF}>Staff</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="mb-8">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Title"
            variant="outlined"
            name="title"
            onChange={formik.handleChange}
            required
          />
        </div>
        <div className="mb-8">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Description"
            variant="outlined"
            name="description"
            onChange={formik.handleChange}
            required
            multiline
            rows={5}
          />
        </div>
        <div className="mb-8">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Img"
            variant="outlined"
            name="img"
            onChange={formik.handleChange}
            required
          />
        </div>
        <QuestionAccordion onChange={setQuestions} />
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
