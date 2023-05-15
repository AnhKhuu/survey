import { Button, FormControl, Input, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import AdminLayout from "../../../../Layout/AdminLayout/AdminLayout";
import { useNavigate } from "react-router-dom";
import Modal from "../../../common/Modal/Modal";
import QuestionAccordion from "./QuestionAccordion/QuestionAccordion";

export default function SurveyCreatePage() {
  return (
    <AdminLayout>
      <h1 className="text-lg text-anger font-bold text-center mb-5">
        Survey Creation Form
      </h1>
      <SurveyCreationForm />
    </AdminLayout>
  );
}

function SurveyCreationForm() {
  const [openModal, setOpenModal] = useState(false);
  let navigate = useNavigate();

  const handleToggleModal = () => {
    setOpenModal((prev) => !prev);
  };
  const handleCancelCreationForm = () => {
    navigate("/admin/survey-management");
  };

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => console.log(values),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl fullWidth>
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
            variant="outlined"
            name="img"
            onChange={formik.handleChange}
            required
            type="file"
          />
        </div>
        <QuestionAccordion />
        <div className="flex justify-end">
          <Button
            variant="outlined"
            color="anger"
            onClick={() => handleToggleModal()}
          >
            Cancel
          </Button>
          <div className="ml-3">
            <Button variant="contained" color="anger" type="submit">
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
