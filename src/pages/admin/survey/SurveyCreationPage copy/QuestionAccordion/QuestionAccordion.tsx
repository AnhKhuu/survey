import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { Button } from "@mui/material";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { BsPlusLg, BsTrashFill } from "react-icons/bs";
import QuestionInput from "../QuestionInput/QuestionInput";
import { getRandomId } from "../../../../../utils";
import Modal from "../../../../common/Modal/Modal";
import { useFormik } from "formik";
import { Question, QuestionCreation, QuestionType, SurveyInfo } from "../../../../../types/survey";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function QuestionAccordion({onChange, surveyInfo}: {onChange:any, surveyInfo: SurveyInfo}) {
  const [openModal, setOpenModal] = useState(false)
  const [questions, setQuestions] = useState<QuestionCreation[]>([]);

  const newQuestion = {
    questionId: getRandomId(),
    questionContent: '',
    answers: []
  }

  const handleAddQuestion = () => {
    setQuestions([...questions, newQuestion]);
  };

  const handleRemoveQuestion = (id: number) => {
    setQuestions(questions.filter(({questionId}) =>  questionId !== id));
    setOpenModal(prev => !prev)
  };

  const handleToggleModal = () => {
    setOpenModal(prev => !prev)
  }

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => console.log(values),
  });

  useEffect(() => {
    onChange(questions);
  }, [questions])

  useEffect(() => {
    setQuestions(surveyInfo.questions)
  }, [surveyInfo])
  
  return (
    <div>
      {questions?.map((question, index) => (
        <form>
          <Accordion key={question.questionId}>
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <div className="flex justify-between items-center w-full">
                <Typography>Question {index + 1}</Typography>
                <Button
                  variant="text"
                  color="blue"
                  onClick={() => handleToggleModal()}
                >
                  <BsTrashFill />
                  <p className="ml-2">Remove question</p>
                </Button>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <QuestionInput 
                onChange={setQuestions}
                question={question}
              />
            </AccordionDetails>
          </Accordion>
          <Modal
            dialogContentText="Are you sure to remove this question?"
            dialogTitle="Remove question confirmation"
            handleAction={() => handleRemoveQuestion(question.questionId)}
            handleClose={() => handleToggleModal()}
            open={openModal}
          />
        </form>
      ))}
      <div className="mt-7 flex items-center justify-between w-full">
        <Button
          variant="outlined"
          color="blue"
          onClick={() => handleAddQuestion()}
        >
          <BsPlusLg />
          <p className="ml-2">Add more question</p>
        </Button>
      </div>
    </div>
  );
}
