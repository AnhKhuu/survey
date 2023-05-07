import AdminLayout from "../../../../Layout/AdminLayout/AdminLayout";
import QuestionAccordion from "./QuestionAccordion/QuestionAccordion";

export default function SurveyCreatePage() {
  return (
    <AdminLayout>
      <h1 className="text-lg text-anger font-bold text-center mb-5">
        Survey Creation Form
      </h1>
      <QuestionAccordion />
    </AdminLayout>
  );
}
