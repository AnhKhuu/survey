import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import AdminLayout from "../../../../Layout/AdminLayout/AdminLayout";
import SurveyTable from "./SurveyTable";

export default function SurveyListPage() {
  return (
    <AdminLayout>
      <Link to={"/admin/survey-management/create"}>
        <div className="mb-7">
          <Button variant="contained" color="anger">
            Create new survey
          </Button>
        </div>
      </Link>
      <SurveyTable />
    </AdminLayout>
  );
}
