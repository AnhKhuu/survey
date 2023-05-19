import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { FAQDetail } from '../../../types/faq';
import { useGetFAQs } from '../../../hooks/queries';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
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

type FAQ = {
  faq_id: string,
  faq_question: string,
  faq_content: string
}

export default function ContentMenu() {
  const [expanded, setExpanded] = React.useState<number | false>(1);
  const { data, refetch } = useGetFAQs();
  let faqs:FAQDetail[] = []
  if(data) {
    faqs = data.data.data
  }
  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      {faqs.map(({faqId, faqContent, faqQuestion}) => (
        <Accordion expanded={expanded === faqId} onChange={handleChange(faqId)}>
        <AccordionSummary aria-controls={`${faqId}`} id={`${faqId}`}>
          <Typography>{faqQuestion}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {faqContent}
          </Typography>
        </AccordionDetails>
      </Accordion>
      ))}
    </div>
  );
}