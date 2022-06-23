import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Slide from '@material-ui/core/Slide';
import moment from 'moment'

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

export default function PointsModal(props) {
    const task = {
        desc: props.title,
        points: props.points,
        start: moment(),
        end: props.duration,
        can_expire: props.can_expire,
        progress: 0,
    }
    console.log(task)
    return (
        <div>
            <Dialog TransitionComponent={Transition} onClose={props.handleClose} aria-labelledby="customized-dialog-title" open={props.open}>
                <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
                    {props.title}
                </DialogTitle>
                <DialogContent dividers>
                    {props.accordion}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => { props.addTask({ task }); props.handleClose() }} color="primary">
                        Add to tasks
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}