import { Container } from '@mui/material';
import MainLayout from '../../Layout/MainLayout/MainLayout';
import Honors from './Honors/Honors';
import SliderComp from './Projects/Slider';
import SurveyForFaculty from './SurveyForFaculty/SurveyForFaculty';
import SurveyForStudent from './SurveyForStudent/SurveyForStudent';
import SurveySlider from './SurveySlider/SurveySlider';

export default function HomePage() {
  return (
    <MainLayout>
      {/* <SliderComp /> */}
      <SurveySlider />
      <Container sx={{marginTop: '54px'}}>
        <Honors />
        <SurveyForFaculty />
        <SurveyForStudent />
      </Container>
    </MainLayout>
  )
}
