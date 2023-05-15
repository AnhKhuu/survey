import {
  Container
} from "@mui/material";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import ContentMenu from "./ContentMenu/ContentMenu";

const DUMMY_DATA = [{
  faq_id: "1",
  faq_question: "This is memo",
  faq_content: "This is memo",
},
{
  faq_id: "2",
  faq_question: "This is memo",
  faq_content: "This is memo",
},
{
  faq_id: "3",
  faq_question: "This is memo",
  faq_content: "This is memo",
},]

export default function FAQsPage() {
  return (
    <MainLayout>
      <Container sx={{marginTop: '54px'}}>
        <h1 className='text-lg text-anger font-bold text-center mb-5'>FAQs</h1>
        <ContentMenu data={DUMMY_DATA} />
      </Container>
    </MainLayout>
  );
}
