import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import AdminLayout from '../../../../Layout/AdminLayout/AdminLayout'
import CompetitionTable from './CompetitionTable/CompetitionTable'

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
      <CompetitionTable />
    </AdminLayout>
  )
}
