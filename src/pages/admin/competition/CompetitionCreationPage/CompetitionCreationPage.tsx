import React, { useState } from "react";
import AdminLayout from "../../../../Layout/AdminLayout/AdminLayout";
import { useFormik } from "formik";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import { useNavigate } from "react-router-dom";
import Modal from "../../../common/Modal/Modal";
import { useCreateCompetition } from "../../../../hooks/mutations";
import { useGetSurveys } from "../../../../hooks/queries";
import { QuestionType, SurveyDetail } from "../../../../types/survey";
import { CompetitionCreation } from "../../../../types/competition";

export default function CompetitionCreationPage() {
  return (
    <AdminLayout>
      <h1 className="text-lg text-anger font-bold text-center mb-5">
        Competition Creation Form
      </h1>
      <CompetitionCreationForm />
    </AdminLayout>
  );

  function CompetitionCreationForm() {
    const [openModal, setOpenModal] = useState(false);
    const [surveyId, setSurveyId] = useState<number>();
    let navigate = useNavigate();
    const { mutate: createCompetition } = useCreateCompetition({
      handleSuccess: () => navigate("/admin/competition-management"),
      handleError: (e) => console.log(e),
    });

    const handleSelectSurvey = (event: SelectChangeEvent) => {
      setSurveyId(parseInt(event.target.value));
    };

    const { data } = useGetSurveys();
    let rows: SurveyDetail[] = [];
    if (data) {
      rows = data.data.data.map((survey: any) => ({
        surveyId: survey.surveyId,
        title: survey.title,
      }));
    }
    const formik = useFormik({
      initialValues: {},
      onSubmit: (values) => {
        const competition = {
          ...values,
          surveyId
        } as CompetitionCreation
        createCompetition(competition);
      }
    });
    
    const handleToggleModal = () => {
      setOpenModal((prev) => !prev);
    };
    const handleCancelCreationForm = () => {
      navigate("/admin/competition-management");
    };

    return (
      <form onSubmit={formik.handleSubmit}>
        <FormControl fullWidth>
          <div className="mb-8">
            <TextField
              fullWidth
              id="outlined-basic"
              label="Title"
              variant="outlined"
              onChange={formik.handleChange}
              name="name"
            />
          </div>
          <div className="flex justify-between mb-8">
            <DateTimePicker
              label="Start time"
              sx={{ width: "48%" }}
              onChange={(newValue: any) => {
                formik.setFieldValue('timeStartCompetition', newValue.$d)
              }}
            />
            <DateTimePicker
              label="End time"
              sx={{ width: "48%" }}
              onChange={(newValue: any) => {
                formik.setFieldValue("timeEndCompetition", newValue.$d);
              }}
            />
          </div>
          <div className="mb-8">
            <TextField
              fullWidth
              id="outlined-basic"
              label="Location"
              variant="outlined"
              name="location"
              onChange={formik.handleChange}
            />
          </div>
          <FormControl sx={{ width: "200px" }}>
          <InputLabel id="add-more-question">Select survey</InputLabel>
          <Select
            labelId="add-more-question"
            label="Select survey"
            onChange={handleSelectSurvey}
          >
            {rows.map(({surveyId, title}) => (
              <MenuItem value={surveyId}>{title}</MenuItem>
            ))
              }
          </Select>
        </FormControl>
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
          dialogTitle="Cancel competition creation form confirmation"
          handleAction={() => handleCancelCreationForm()}
          handleClose={() => handleToggleModal()}
          open={openModal}
        />
      </form>
    );
  }
}
