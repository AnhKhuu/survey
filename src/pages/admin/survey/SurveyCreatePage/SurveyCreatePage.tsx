import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import AdminLayout from "../../../../Layout/AdminLayout/AdminLayout";
import { BsPlusLg } from "react-icons/bs";
import TextQuestion from "./TextQuestion/TextQuestion";
import QuestionAccordion from "./QuestionAccordion/QuestionAccordion";

export default function SurveyCreatePage() {
  return (
    <AdminLayout>
      <h1 className="text-lg text-anger font-bold text-center mb-5">
        Survey Creation Form
      </h1>
      <div className="flex items-center mb-2 text-anger">
        <BsPlusLg />
        <p className="ml-2">Add more question</p>
      </div>
      <FormControl sx={{ width: "200px" }}>
        <InputLabel id="add-more-question">Select question type</InputLabel>
        <Select
          labelId="add-more-question"
          id="demo-simple-select"
          label="Select question type"
        >
          <MenuItem value={10}>Text question</MenuItem>
          <MenuItem value={20}>Textarea question</MenuItem>
          <MenuItem value={20}>Multi-select question</MenuItem>
          <MenuItem value={30}>Select question</MenuItem>
        </Select>
      </FormControl>
      <QuestionAccordion />
    </AdminLayout>
  );
}
