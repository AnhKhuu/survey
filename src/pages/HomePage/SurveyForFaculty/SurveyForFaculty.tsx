import React from 'react'
import SurveyGallery from '../SurveyGallery/SurveyGallery'
import DUMMY_DATA from "./mockData.json";
import { BsArrowRight } from "react-icons/bs";
import { useGetSurveyByRole } from '../../../hooks/queries';
import { Skeleton } from '@mui/material';

export default function SurveyForStudent() {
  const {data, refetch} = useGetSurveyByRole(3, 'GET_SURVEY_FOR_FACULTY');

  if(data) {
    console.log('3', data.data.data)
  }

return (
    <div className='mt-10'>
      <div className="flex justify-between">
        <h1 className="text-lg font-semibold mb-3">FOR FALCUTY</h1>
        <a href='#' className='flex items-center'>
          <span className="text-sm font-light mr-2">
            See more
          </span>
          <BsArrowRight />
        </a>
      </div>
      {data?.data.data ? 
        <SurveyGallery data={data.data.data}/> : <Skeleton variant="rectangular" width={210} height={118} />}
    </div>
  )
}
