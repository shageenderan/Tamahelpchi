import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import DialogContentText from '@material-ui/core/DialogContentText';

import Slide from '@material-ui/core/Slide';
import ExerciseAccordion from './ExerciseAccordion';
import { StaticFlipClock, FlipClock } from './Clock';
import MusicPlayer from './MusicPlayer';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

export function ExerciseTasksModal(props) {
    const [tick, setTick] = useState(false);

    return (
        <div>
            <Dialog TransitionComponent={Transition} onClose={props.handleClose} aria-labelledby="customized-dialog-title" open={props.open}>
                <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
                    Exercise
                </DialogTitle>
                <DialogContent >
                    <Typography> Target Time</Typography>
                       
                        <StaticFlipClock hours={0} minutes={30} ></StaticFlipClock>
                    

                </DialogContent>
                <DialogContent >
                    <Typography> Current Time</Typography>
                       
                        <FlipClock tick={tick}></FlipClock>
                        <Button onClick={() => {console.log(tick); setTick(prev => !prev)}}>Start</Button>
                    

                </DialogContent>
                <DialogContent dividers>
                    <MusicPlayer></MusicPlayer>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose} color="primary">
                        Update Task
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}