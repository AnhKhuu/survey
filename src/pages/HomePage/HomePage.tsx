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
      <BodyWrapper>
        <Honors />
        <SurveyForFaculty />
        <SurveyForStudent />
      </BodyWrapper>
    </MainLayout>
  )
}

function BodyWrapper({children}: {children:any}) {
  return <div className='container px-20 mt-16'>
    {children}
  </div>
}
