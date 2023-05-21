import React from "react";
import Slider from "react-slick";
import "../../../slick.css";
import "../../../slick-theme.css";
import DUMMY_DATA from "./mockData.json";
import Button from "@mui/material/Button";
import { useGetSurveys } from "../../../hooks/queries";
import { SurveyInfo } from "../../../types/survey";

export default function SurveySlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const { data, refetch } = useGetSurveys();

  return (
    <div className="container">
      <Slider {...settings}>
        {data?.data.data &&
          data?.data.data.map((data: SurveyInfo) => <ImageWrapper {...data} />)}
      </Slider>
    </div>
  );
}

function ImageWrapper(data: SurveyInfo) {
  return (
    <div className="relative">
      <img
        src={'https://images.unsplash.com/photo-1586400792375-d6b8f82db2e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'}
        alt=""
        className="w-full max-h-[500px] object-cover object-center"
      />
      <div className="absolute bottom-12 p-4 right-0 bg-vani bg-opacity-80 w-2/5 h-1/2 rounded-tl-lg rounded-bl-lg flex flex-col justify-between">
        <div>
          <h3 className="font-bold">{data.title}</h3>
          <p>{data.description}</p>
        </div>
        <div className="self-end">
          <Button variant="contained" href="#contained-buttons" color="blue">
            Take survey
          </Button>
        </div>
      </div>
    </div>
  );
}
