import { Button, FormControl, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../../../Layout/AdminLayout/AdminLayout";
import { useCreateFAQ } from "../../../../hooks/mutations";
import Modal from "../../../common/Modal/Modal";

export default function FAQCreationPage() {
  return (
    <AdminLayout>
      <h1 className="text-lg text-green font-bold text-center mb-5">
        FAQ Creation Form
      </h1>
      <FAQCreationForm />
    </AdminLayout>
  );
}

function FAQCreationForm() {
  const [openModal, setOpenModal] = useState(false);
  let navigate = useNavigate();
  const { mutate: createFAQ } = useCreateFAQ({
    handleSuccess: () => navigate("/admin/faqs-management"),
    handleError: (e) => console.log(e)
  });

  const handleToggleModal = () => {
    setOpenModal((prev) => !prev);
  };

  const handleCancelCreationForm = () => {
    navigate("/admin/faqs-management");
  };

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values: any) => {
      createFAQ({
        faqContent: values.faqContent,
        faqQuestion: values.faqQuestion
      })
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl fullWidth>
        <div className="mb-8">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Question"
            variant="outlined"
            name="faqQuestion"
            onChange={formik.handleChange}
            required
          />
        </div>
        <div className="mb-8">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Answer"
            variant="outlined"
            name="faqContent"
            onChange={formik.handleChange}
            required
            multiline
            rows={5}
          />
        </div>
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
        dialogTitle="Cancel faqs creation form confirmation"
        handleAction={() => handleCancelCreationForm()}
        handleClose={() => handleToggleModal()}
        open={openModal}
      />
    </form>
  );
}
