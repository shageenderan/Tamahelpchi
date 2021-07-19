import { Link } from '@material-ui/core'
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import MuiAccordion from '@material-ui/core/Accordion'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion)

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary)

const AccordionDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails)

export default function MindfullnessAccordion() {
  const colors = ['#b93232', '#c18f1c', '#0d8c29', '#5f1313']
  const [expanded, setExpanded] = React.useState('panel1')

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Why Practice Mindfullness?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Relaxation exercises and prayer can improve your state of mind and outlook on life. 
          In fact, research shows that meditation may help you feel calm and enhance the effects of therapy. 
          Mindfulness meditation has also been shown to reduce stress, improve sleep, and improve cognitive functioning.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Points</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Practicing Mindfullness for just 15 minutes a day can net you 50 points</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Additional Resources</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>
              <Link href={'https://uhs.umich.edu/mindfulness'}>More Information</Link>
            </li>
            <li>
              <Link
                href={'https://www.mayoclinic.org/healthy-lifestyle/consumer-health/in-depth/mindfulness-exercises/art-20046356'}>
                Mindfulness Exercises
              </Link>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
