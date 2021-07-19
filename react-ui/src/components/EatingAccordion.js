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

export default function EatingAccordion() {
  const colors = ['#b93232', '#c18f1c', '#0d8c29', '#5f1313']
  const [expanded, setExpanded] = React.useState('panel1')

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Why Eat Healthy?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          When you stick to a diet of healthy food, you’re setting yourself up for fewer mood fluctuations, 
          an overall happier outlook and an improved ability to focus. Studies have even found that healthy diets can help with symptoms of depression and anxiety.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Points</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Log your meals to earn points. Nutritous meals with a good balance can grant up to 100 points</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Additional Resources</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>
              <Link href={'https://www.aetna.com/health-guide/food-affects-mental-health.html#:~:text=When%20you%20stick%20to%20a,symptoms%20of%20depression%20and%20anxiety.'}>More Information</Link>
            </li>
            <li>
              <Link
                href={'https://www.verywellfit.com/recipe-nutrition-analyzer-4157076'}>
                {"Calorie & Nutrition Calculator"}
              </Link>
            </li>
            <li>
              <Link
                href={'https://www.foodnetwork.com/healthy/packages/healthy-every-week/healthy-mains/foodnetwork-most-saved-healthy-recipes'}>
                {"Some Healthy Recipes"}
              </Link>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
