import { Container } from "@mui/material";
import { BsFillEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import SupportForm from "./SupportForm";

export default function SupportPage() {
  return (
    <MainLayout>
      <Container sx={{ marginTop: "54px" }}>
        <h1 className="text-lg text-green font-bold text-center mb-5">
          Contact Inforamtion
        </h1>
        <p className="font-semibold">Hotline:</p>
        <a
          href="tel: 0985748293"
          className="flex items-center mb-5 hover:text-green"
        >
          <BsFillTelephoneFill />
          <p className="ml-2">0985748293</p>
        </a>
        <p className="font-semibold">Email:</p>
        <a
          href="mailto: environmentalsurvey@edu.com.vn"
          className="flex items-center hover:text-green"
        >
          <BsFillEnvelopeFill />
          <p className="ml-2">environmentalsurvey@edu.com.vn</p>
        </a>
        <h1 className='text-lg text-green font-bold text-center mt-5'>Let us know how to contact to you</h1>
        <SupportForm />
      </Container>
    </MainLayout>
  );
}
