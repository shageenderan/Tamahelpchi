import React, { useState } from 'react';
import SideMenu from './SideMenu';
import Inventory from './Inventory';
import { PieChart } from 'react-minimal-pie-chart';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import {ExerciseTasksModal} from './TasksModal';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: "table",
        position: "absolute",
        top: 50,
        left: 0,
        height: "100%",
        width: "100%",
    },
    verticalCenter: {
        textAlign: "center",
        display: "table-cell",
        verticalAlign: "middle",
      }
}));

export default function Tasks() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        [
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <SideMenu></SideMenu>
                <Inventory></Inventory>
            </div>,
            <div>
                <div className={classes.root}>
                    <div className={classes.verticalCenter}>
                         <Grid style={{marginTop: "-50px"}} container spacing={3} justifyContent="space-around" alignItems="center">
                        <Grid item xs={6} onClick={handleClickOpen} >
                            <Donut value={80} label="Exercise"></Donut>
                        </Grid>
                        <Grid item xs={6}>
                            <Donut value={50} label="Sleep"></Donut>
                        </Grid>
                        <Grid item xs={6}>
                            <Donut value={50} label="Eat"></Donut>
                        </Grid>
                        <Grid item xs={6}>
                            <Donut value={50} label="Eat"></Donut>
                        </Grid>
                        <Grid item xs={6}>
                            <Donut value={50} label="Eat"></Donut>
                        </Grid>
                    </Grid>
                    <ExerciseTasksModal open={open} handleClose={handleClose}></ExerciseTasksModal>
                    </div>
                </div>
            </div>
        ]


    )
}

function Donut(props) {
    return (<div>
        <PieChart
            style={{ width: "90%" }}
            data={[{ value: props.value, key: 1, color: 'url(#gradient1)' }]}
            reveal={props.value}
            lineWidth={20}
            background="rgb(164 180 204)"
            totalValue={100}
            label={({ dataEntry }) => props.label}
            labelStyle={{
                fontSize: '17px',
                // fontFamily: 'sans-serif',
                fill: 'rgb(9 16 111)',
            }}
            labelPosition={0}
            rounded
            animate
        ><defs>
                <linearGradient id="gradient1">
                    <stop offset="0%" stopColor="#4CAF50" />
                    <stop offset="45%" stopColor="#ffb961" />
                    <stop offset="55%" stopColor="#ffb961" />
                    <stop offset="100%" stopColor="#C13C37" />
                </linearGradient>
            </defs></PieChart>
    </div>)
}

