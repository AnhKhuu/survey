import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { Button } from '@mui/material';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { BsPlusLg, BsTrashFill } from 'react-icons/bs';
import QuestionInput from '../QuestionInput/QuestionInput';
import { getRandomId } from '../../../../../utils';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function QuestionAccordion() {
  const [questionIds, setQuestionIds] = useState([getRandomId()]);

  const handleAddQuestion = () => {
    setQuestionIds([...questionIds, getRandomId()])
  }
  return (
    <div>
      {questionIds.map((id, index) => (
        <Accordion key={id}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Question {index + 1}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <QuestionInput />
          </AccordionDetails>
      </Accordion>
      ))}
      <Button variant="outlined" color="anger" onClick={() => handleAddQuestion()}>
        <BsPlusLg />
        <p className="ml-2">Add more question</p>
      </Button>
    </div>
  );
}