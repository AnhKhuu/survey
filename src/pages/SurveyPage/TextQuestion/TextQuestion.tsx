import { FormControl, FormLabel, TextField } from '@mui/material'
import React from 'react'

export default function TextQuestion() {
  return (
    <FormControl sx={{marginBottom: "30px"}}>
      <FormLabel>Do you have fun?</FormLabel>
      <TextField
            fullWidth
            id="outlined-basic"
            variant="outlined"
          />
    </FormControl>
  )
}
