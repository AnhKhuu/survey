import React from 'react'
import Slider from "react-slick";
import "../../../slick.css";
import "../../../slick-theme.css";
import { Link } from 'react-router-dom';
import { SurveyInfo } from '../../../types/survey';

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
      {data.map(({img, description, title, surveyId}:SurveyInfo) => (
        <SurveyItem
          img={img}
          description={description}
          surveyId={surveyId}
          title={title}
        />
      ))}
    </Slider>
  );
}

function SurveyItem({img, description, surveyId, title}: {img: string, description: string, surveyId: number, title: string}) {
  return (
    <Link to={`/surveys/${surveyId}`}>
      <div>
        <div className="mr-3 group">
          <img src={img} alt="" className='w-full min-h-[218px] rounded-tl-2xl rounded-tr-2xl group-hover:transition group-hover:duration-300' />
          <div className='bg-vani group-hover:bg-vani-hv min-h-[160px] rounded-bl-2xl rounded-br-2xl group-hover:transition group-hover:duration-300 p-3'>
            <h3 className="font-bold">{title}</h3>
            <p>{description.slice(0,100) + '...'}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
