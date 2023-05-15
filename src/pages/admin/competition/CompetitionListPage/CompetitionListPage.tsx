import React from 'react'
import AdminLayout from '../../../../Layout/AdminLayout/AdminLayout'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import CustomTable from '../../../common/CustomTable/CustomTable'

export default function CompetitionListPage() {
  return (
    <AdminLayout>
      <Link to={"/admin/competition-management/create"}>
        <div className="mb-7">
          <Button variant="contained" color="anger">
            Create new competition
          </Button>
        </div>
      </Link>
      <CustomTable />
    </AdminLayout>
  )
}
