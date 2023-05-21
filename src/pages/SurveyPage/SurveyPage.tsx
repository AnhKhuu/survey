import React from 'react'
import MainLayout from '../../Layout/MainLayout/MainLayout'
import SurveyForm from './SurveyForm/SurveyForm'
import { Container } from '@mui/material'

export default function SurveyPage() {
  return (
    <MainLayout>
      <Container sx={{marginTop: '54px'}}>
        <h1 className='text-lg text-green font-bold text-center mb-5'>SURVEY FORM</h1>
        <SurveyForm />
      </Container>
    </MainLayout>
  )
}