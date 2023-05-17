import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import AdminLayout from '../../../../Layout/AdminLayout/AdminLayout'
import FAQTable from './FAQTable/FAQTable'

export default function FAQListPage() {
  return (
    <AdminLayout>
      <Link to={"/admin/faqs-management/create"}>
        <div className="mb-7">
          <Button variant="contained" color="anger">
            Create new FAQ
          </Button>
        </div>
      </Link>
      <FAQTable />
  </AdminLayout>
  )
}
