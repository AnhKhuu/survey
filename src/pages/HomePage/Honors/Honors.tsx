import React from 'react'
import Slider from "react-slick";
import "../../../slick.css";
import "../../../slick-theme.css";
import DUMMY_DATA from "./mockData.json";
import { SurveyInfo } from '../../../types';

export default function Honors() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };
  return (
    <Slider {...settings}>
      {DUMMY_DATA.map(({ imgUrl, content, surveyId }:SurveyInfo) => (
        <SurveyItem
          imgUrl={require(`../../../images/${imgUrl}`)}
          content={content}
          surveyId={surveyId}
        />
      ))}
    </Slider>
  )
}

function SurveyItem({imgUrl, content, surveyId}: {imgUrl: string, content: string, surveyId: string}) {
  return (
      <div className="mr-3 group">
        <div className='bg-vani group-hover:bg-vani-hv min-h-[160px] rounded-2xl group-hover:transition group-hover:duration-300 p-3'>
          <p>{content}</p>
        </div>
      </div>
  )
}