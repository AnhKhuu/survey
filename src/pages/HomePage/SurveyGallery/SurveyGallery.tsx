import React from 'react'
import Slider from "react-slick";
import "../../../slick.css";
import "../../../slick-theme.css";
import { SurveyInfo } from '../../../types';
import { Link } from 'react-router-dom';

export default function SurveyGallery({data}: {data: SurveyInfo[]}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {data.map(({ imgUrl, content, surveyId }:SurveyInfo) => (
        <SurveyItem
          imgUrl={require(`../../../images/${imgUrl}`)}
          content={content}
          surveyId={surveyId}
        />
      ))}
    </Slider>
  );
}

function SurveyItem({imgUrl, content, surveyId}: {imgUrl: string, content: string, surveyId: string}) {
  return (
    <Link to={`/surveys/:`}>
      <div>
        <div className="mr-3 group">
          <img src={imgUrl} alt="" className='w-full min-h-[218px] rounded-tl-2xl rounded-tr-2xl group-hover:transition group-hover:duration-300' />
          <div className='bg-vani group-hover:bg-vani-hv min-h-[160px] rounded-bl-2xl rounded-br-2xl group-hover:transition group-hover:duration-300 p-3'>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
