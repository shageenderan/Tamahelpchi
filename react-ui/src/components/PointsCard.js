import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CallMade from '@material-ui/icons/CallMade';

import { Row, Column, Item } from '@mui-treasury/components/flex';
import { useSizedIconButtonStyles } from '@mui-treasury/styles/iconButton/sized';

import Image from 'react-bootstrap/Image'

import LoyaltyIcon from '@material-ui/icons/Loyalty';
import PointsModal from './PointsModal';
import ExerciseAccordion from './ExerciseAccordion';

const StyledTooltip = withStyles({
  tooltip: {
    marginTop: '0.2rem',
    backgroundColor: 'rgba(0,0,0,0.72)',
    color: '#fff',
  },
})(Tooltip);

const useBasicProfileStyles = makeStyles(({ palette }) => ({
  avatar: {
    borderRadius: 8,
    backgroundColor: '#495869',
  },
  overline: {
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: '#8D9CAD',
  },
  name: {
    fontSize: 14,
    fontWeight: 500,
    color: '#495869',
  },
}));

const BasicProfile = props => {
  const styles = useBasicProfileStyles();
  return (
    <Row {...props}>
      <Item><Avatar className={styles.avatar}><LoyaltyIcon></LoyaltyIcon></Avatar></Item>
      <Item position={'middle'} pl={{ sm: 0.5, lg: 0.5 }}>
        <Typography className={styles.overline}>Points</Typography>
        <Typography className={styles.name}>{props.points}</Typography>
      </Item>
    </Row>
  );
};

const useCardHeaderStyles = makeStyles(() => ({
  root: { paddingBottom: 0 },
  title: {
    fontSize: '1.25rem',
    color: '#122740',
  },
  subheader: {
    fontSize: '0.875rem',
    color: '#495869',
  },
}));

const CardHeader = props => {
  const styles = useCardHeaderStyles();
  const iconBtnStyles = useSizedIconButtonStyles({ padding: 8, childSize: 20 });
  return (
    <Row {...props}>
      <Item position={'middle'}>
        <Typography className={styles.title}>
          <b>{props.title}</b>
        </Typography>
        <Typography className={styles.subheader}>
          {props.subtitle}
        </Typography>
      </Item>
      <Item position={'right'} mr={-0.5}>
        <StyledTooltip title={'See details'}>
          <IconButton classes={iconBtnStyles}>
            <CallMade />
          </IconButton>
        </StyledTooltip>
      </Item>
    </Row>
  );
};

const useStyles = makeStyles(() => ({
  card: {
    border: '2px solid',
    // borderColor: '#519fec',
    
    borderRadius: 16,
    transition: '0.4s',
    '&:hover': {
      borderColor: '#5B9FED',
    },
  },
}));

export const PointsCard = React.memo(function ShowcaseCard(props) {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const styles = useStyles();
  const gap = { xs: 1, sm: 1.5, lg: 2 }
  return (
    [
      <Grid container spacing={4} justify={'center'}>
        <Grid item xs={11} sm={4} md={3}>
          <Column onClick={handleClickOpen} boxShadow={3} style={{borderColor: props.borderColor ?  props.borderColor : '#ec5183'}} className={styles.card} p={{ xs: 0.5, sm: 0.75, lg: 1 }} gap={gap}>
            <CardHeader {...props} />
            <Item>
              <Box maxHeight={250} bgcolor={'#F4F7FA'} borderRadius={8}>
                <Image fluid src={props.img} rounded></Image>
              </Box>
            </Item>
            <BasicProfile {...props} />
          </Column>
        </Grid>
      </Grid>,
      <PointsModal {...props} open={open} handleClose={handleClose}></PointsModal>
    ]

  );
});
export default PointsCard