import React from "react";
import Slider from "react-slick";
import "../../../slick.css";
import "../../../slick-theme.css";
import DUMMY_DATA from "./mockData.json";
import Button from "@mui/material/Button";

export default function SurveySlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container">
      <Slider {...settings}>
        {DUMMY_DATA.map(({ imgUrl, content, surveyUrl }) => (
          <ImageWrapper
            imgUrl={require(`../../../images/${imgUrl}`)}
            content={content}
            surveyUrl={surveyUrl}
          />
        ))}
      </Slider>
    </div>
  );
}

function ImageWrapper({
  imgUrl,
  content,
  surveyUrl,
}: {
  imgUrl: string;
  content: string;
  surveyUrl: string;
}) {
  return (
    <div className="relative">
      <img
        src={imgUrl}
        alt=""
        className="w-full max-h-[500px] object-cover object-center"
      />
      <div className="absolute bottom-12 p-4 right-0 bg-vani bg-opacity-80 w-2/5 h-1/2 rounded-tl-lg rounded-bl-lg flex flex-col justify-between">
        {content}
        <div className="self-end">
          <Button variant="contained" href="#contained-buttons" color="anger">
            Take survey
          </Button>
        </div>
      </div>
    </div>
  );
}
