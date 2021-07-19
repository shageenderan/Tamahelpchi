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

export default function SleepingAccordion() {
  const colors = ['#b93232', '#c18f1c', '#0d8c29', '#5f1313']
  const [expanded, setExpanded] = React.useState('panel1')

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Why Sleep Consistently?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Sleeping helps regulate your mental and emotional health which equips you to take on challengex with more resilience. You’re also more likely to get sick 
            when sleep-deprived, which could mean missing out on social activities, class, and other important events. Also, getting quality sleep boosts productivity, 
            which can free up time for friends, hobbies, or more sleep!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Points</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Sleeping between 8-10 hours a day at a consistent time will grant you 200 points.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Additional Resources</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>
              <Link href={'https://uhs.umich.edu/sleep'}>More Information</Link>
            </li>
            <li>
              <Link
                href={'https://www.everydayhealth.com/sleep/insomnia/resetting-your-clock.aspx'}>
                Tips To Fix Your Sleep Schedule
              </Link>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
