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

import Slide from '@material-ui/core/Slide';

import ExerciseAccordion from './ExerciseAccordion';

import Rating from '@material-ui/lab/Rating';
import FavoriteIcon from '@material-ui/icons/Favorite';

import eggplant from '../assets/eggplant.png'
import LoyaltyIcon from '@material-ui/icons/Loyalty';

import { InputGroup, InputNumber } from 'rsuite'
import 'rsuite/lib/styles/index.less';
import 'rsuite/dist/styles/rsuite-default.css'
import './ItemModal.scss'
import { Divider } from '@material-ui/core';

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

export default function ItemModal(props) {
    console.log("itm modal", props)
    const [value, setValue] = useState(1);

    const handleMinus = () => {
        if (value > 1)
        setValue(prev => prev-1)
    };
    const handlePlus = () => {
        if (value < 99)
        setValue(prev => prev+1)
    };

    const purchase = () => {
        let total = props.price*value
        if (total <= props.user.points)
        {
            let new_item = {title: props.title, stats: props.stats, quantity: value, description:props.description, img: props.img}
            props.user.updateInventory(new_item, props.category)
            props.user.updatePoints(props.user.points-total)
        }
    }

    return (
        <div>
            <Dialog TransitionComponent={Transition} onClose={props.handleClose} aria-labelledby="customized-dialog-title" open={props.open}>
                <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
                    Purchase
                </DialogTitle>
                <DialogContent dividers>
                    <ItemModalBody {...props} value={value} handleMinus={handleMinus} handlePlus={handlePlus}></ItemModalBody>
                </DialogContent>
                <DialogContent dividers>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4>
                    Total
                </h4> 
                <h4><LoyaltyIcon /> {props.price*value}</h4>
            </div>
                </DialogContent>

                <DialogActions>
                    <Button onClick={()=> {props.handleClose(); purchase()}} color="primary">
                        Purchase
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

const StyledRating = withStyles({
    iconFilled: {
        color: '#ff6d75',
    },
    iconHover: {
        color: '#ff3d47',
    },
})(Rating);

function Quantity(props) {
    return (
        <InputGroup style={{ width: "150px" }}>
            <InputGroup.Button onClick={props.handleMinus}>-</InputGroup.Button>
            <InputNumber
                className={'custom-input-number'}
                value={props.value}
                max={99}
                min={1}
            />
            <InputGroup.Button onClick={props.handlePlus}>+</InputGroup.Button>
        </InputGroup>
    )
}

function ItemModalBody(props) {
    return (
            <div style={{ display: "flex" }}>
                <img style={{ marginRight: "20px" }} width={80} height={80} src={props.img} alt={"Food"}></img>
                
                <div>
                    <Typography>
                        <h4>{props.title}</h4>
                    </Typography>

                    <Typography>
                        {props.description}
                    </Typography>

                    <Typography>
                        Stats
                    </Typography>
                    <StyledRating
                        name="read-only"
                        value={props.stats}
                        precision={0.5}
                        icon={<FavoriteIcon></FavoriteIcon>}
                        readOnly
                    />
                    {/* <QuantityInput></QuantityInput> */}
                    <Typography>
                        <div style={{ display: "inline-block" }}>
                            <Quantity value={props.value} handleMinus={props.handleMinus} handlePlus={props.handlePlus}></Quantity>
                        </div>
                    </Typography>


                </div>

            </div>
    )
}