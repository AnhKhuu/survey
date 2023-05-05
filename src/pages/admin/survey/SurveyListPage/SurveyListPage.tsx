import React from "react";
import AdminLayout from "../../../../Layout/AdminLayout/AdminLayout";
import CustomTable from "../../../common/CustomTable/CustomTable";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function SurveyListPage() {
  return (
    <AdminLayout>
      <Link to={"/admin/survey-management/create"}>
        <Button variant="contained" color="anger">
          Create new survey
        </Button>
      </Link>
      <CustomTable />
    </AdminLayout>
  );
}
