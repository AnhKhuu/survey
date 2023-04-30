import React from 'react'
import SurveyGallery from '../SurveyGallery/SurveyGallery'
import DUMMY_DATA from "./mockData.json";
import { BsArrowRight } from "react-icons/bs";

export default function SurveyForStudent() {
  return (
    <div className='mt-10'>
      <div className="flex justify-between">
        <h1 className="text-lg font-semibold mb-3">FOR STUDENT</h1>
        <a href='#' className='flex items-center'>
          <span className="text-sm font-light mr-2">
            See more
          </span>
          <BsArrowRight />
        </a>
      </div>
      <SurveyGallery data={DUMMY_DATA}/>
    </div>
  )
}
