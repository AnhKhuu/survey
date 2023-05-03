import { useFormik } from "formik";
import React, {useState} from "react";
import TextQuestion from "../TextQuestion/TextQuestion";
import TextAreaQuestion from "../TextAreaQuestion/TextAreaQuestion";
import SelectQuestion from "../SelectQuestion/SelectQuestion";
import MultiSelectQuestion from "../MultiSelectQuestion/MultiSelectQuestion";
import { Button, FormControl } from "@mui/material";
import Modal from "../../common/Modal/Modal";
import { useNavigate } from 'react-router-dom';


export default function SurveyForm() {
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => console.log(values),
  });
  const [openModal, setOpenModal] = useState(false)
  const handleToggleModal = () => {
    setOpenModal(prev => !prev)
  }
  const handleRedirectToHomepage = () => {
    navigate('/')
  }

  const DUMMY_DATA = {
    question: [
      {
        title: "Question 1",
        type: "Text",
      },
      {
        title: "Question 2",
        type: "TextArea",
      },
      {
        title: "Question 3",
        type: "MultiSelect",
      },
      {
        title: "Question 4",
        type: "Select",
      },
    ],
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl fullWidth>
        {DUMMY_DATA.question.map(({ title, type }) => {
          return renderInputFieldByType(type);
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

function renderInputFieldByType(type: string) {
  switch (type) {
    case Type.TEXT:
      return <TextQuestion />;
    case Type.TEXT_AREA:
      return <TextAreaQuestion />;
    case Type.SELECT:
      return <SelectQuestion />;
    case Type.MULTI_SELECT:
      return <MultiSelectQuestion />;
    default:
      break;
  }
}

const enum Type {
  TEXT = "Text",
  TEXT_AREA = "TextArea",
  SELECT = "Select",
  MULTI_SELECT = "MultiSelect",
}
