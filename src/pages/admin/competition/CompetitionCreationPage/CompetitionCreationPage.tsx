import React, { useState } from 'react'
import AdminLayout from '../../../../Layout/AdminLayout/AdminLayout'
import { useFormik } from "formik";
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';
import { useNavigate } from 'react-router-dom';
import Modal from '../../../common/Modal/Modal';

export default function CompetitionCreationPage() {
  return (
    <AdminLayout>
      <h1 className="text-lg text-anger font-bold text-center mb-5">
        Competition Creation Form
      </h1>
      <CompetitionCreationForm />
    </AdminLayout>
  )

  function CompetitionCreationForm() {
    const [openModal, setOpenModal] = useState(false)
    let navigate = useNavigate();
    
    const formik = useFormik({
      initialValues: {},
      onSubmit: (values) => console.log(values),
    });
    const handleToggleModal = () => {
      setOpenModal(prev => !prev)
    }
    const handleCancelCreationForm = () => {
      navigate('/admin/competition-management')
    }
  
    return (
      <form onSubmit={formik.handleSubmit}>
        <FormControl fullWidth>
          <div className="mb-8">
            <TextField
              fullWidth
              id="outlined-basic"
              label="Title"
              variant="outlined"
            />
          </div>
          <div className="flex justify-between mb-8">
            <DateTimePicker label="Start time" sx={{width: "48%"}} />
            <DateTimePicker label="End time" sx={{width: "48%"}} />
          </div>
          <div className="mb-8">
            <TextField
              fullWidth
              id="outlined-basic"
              label="Location"
              variant="outlined"
            />
          </div>
          <div className="flex justify-end">
            <Button variant="outlined" color="anger" onClick={() => handleToggleModal()}>
              Cancel
            </Button>
            <div className='ml-3'>
              <Button variant="contained" color="anger" type='submit'>
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