import { Container } from "@mui/material";
import React from "react";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import ContentMenu from "../FAQsPage/ContentMenu/ContentMenu";
import SupportForm from "./SupportForm";
import { BsFillTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs";

export default function SupportPage() {
  return (
    <MainLayout>
      <Container sx={{ marginTop: "54px" }}>
        <h1 className="text-lg text-anger font-bold text-center mb-5">
          Contact Inforamtion
        </h1>
        <p className="font-semibold">Hotline:</p>
        <a
          href="tel: 0985748293"
          className="flex items-center mb-5 hover:text-anger"
        >
          <BsFillTelephoneFill />
          <p className="ml-2">0985748293</p>
        </a>
        <p className="font-semibold">Email:</p>
        <a
          href="mailto: environmentalsurvey@edu.com.vn"
          className="flex items-center hover:text-anger"
        >
          <BsFillEnvelopeFill />
          <p className="ml-2">environmentalsurvey@edu.com.vn</p>
        </a>
        <h1 className='text-lg text-anger font-bold text-center mt-5'>Let us know how to contact to you</h1>
        <SupportForm />
      </Container>
    </MainLayout>
  );
}
