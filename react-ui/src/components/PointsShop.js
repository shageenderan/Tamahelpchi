import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import { pointsData } from '../assets/pointsData';
import SideMenu from './SideMenu';
import Inventory from './Inventory';
import PointsCard from './PointsCard';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';

import ReactList from 'react-list';

import ExerciseAccordion from './ExerciseAccordion';
import SleepingAccordion from './SleepingAccordion';
import EatingAccordion from './EatingAccordion';

import exercising from '../assets/exercising.jpg'
import sleeping_1 from '../assets/sleeping_1.jpg'
import sleeping_2 from '../assets/sleeping_2.jpg'
import sleeping_3 from '../assets/sleeping_3.jpeg'
import eating_1 from '../assets/eating_1.jpg'
import eating_2 from '../assets/eating_2.png'
import mindfullness_1 from '../assets/mindfullness_1.jpg'
import mindfullness_2 from '../assets/mindfullness_2.png'
import mindfullness_3 from '../assets/mindfullness_3.jpg'
import MindfullnessAccordion from './MindfullnessAccordion';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        id: 'Mario',
        padding: "20px",
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    imageList: {
        backgroundColor: "#BBEEDB",
        width: 500,
        height: 600,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

export default function PointsShop() {
    // const classes = useStyles();
    const points = [
        <PointsCard title="Exercise" subtitle="Earn points by exercising" img={exercising} points={40} accordion={<ExerciseAccordion />}></PointsCard>,
        <PointsCard title="Sleeping" subtitle="Earn points by sleeping consistently" img={sleeping_2} points={200} accordion={<SleepingAccordion />}></PointsCard>,
        <PointsCard title="Meditation" subtitle="Earn points by practicing mildfulness" img={mindfullness_2} points={50} accordion={<MindfullnessAccordion />}></PointsCard>,

        <PointsCard title="Meditation" subtitle="Earn points by practicing mildfulness" img={mindfullness_3} points={50} accordion={<MindfullnessAccordion />}></PointsCard>,
        <PointsCard title="Eating" subtitle="Earn points by eating healty meals" img={eating_2} points={100} accordion={<EatingAccordion />}></PointsCard>,
        <PointsCard title="Coming Soon..." subtitle="Stay tuned for more ways to earn points" img={eating_1} points={100} accordion={<EatingAccordion />}></PointsCard>

    ]
    return (
        <div >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <SideMenu></SideMenu>
                <Inventory></Inventory>
            </div>
            <h1 style={{ textAlign: "center" }}>Earn Points</h1>
            <div style={{ overflow: 'auto', maxHeight: 600 }}>
                <ReactList
                    itemRenderer={(index, key) => points[index]}
                    length={points.length}
                    type='simple'
                />
            </div>
        </div>


    )
}
