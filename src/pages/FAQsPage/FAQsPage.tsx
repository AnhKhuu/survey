import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Container,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import ContentMenu from "./ContentMenu/ContentMenu";

export default function FAQsPage() {
  return (
    <MainLayout>
      <Container sx={{marginTop: '54px'}}>
        <h1 className='text-lg text-anger font-bold text-center mb-5'>FAQs</h1>
        <ContentMenu />
      </Container>
    </MainLayout>
  );
}
