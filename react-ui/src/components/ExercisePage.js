import SideMenu from './SideMenu';
import Inventory from './Inventory';
import React, { PureComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

import { useHistory } from 'react-router-dom';

import {
    Label,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ReferenceArea,
    AreaChart,
    Area,
    ResponsiveContainer,
} from 'recharts';

const initialData = [
    { name: 1, cost: 4.11, impression: 100 },
    { name: 2, cost: 2.39, impression: 120 },
    { name: 3, cost: 1.37, impression: 150 },
    { name: 4, cost: 1.16, impression: 180 },
    { name: 5, cost: 2.29, impression: 200 },
    { name: 6, cost: 3, impression: 499 },
    { name: 7, cost: 0.53, impression: 50 },
    { name: 8, cost: 2.52, impression: 100 },
    { name: 9, cost: 1.79, impression: 200 },
    { name: 10, cost: 2.94, impression: 222 },
    { name: 11, cost: 4.3, impression: 210 },
    { name: 12, cost: 4.41, impression: 300 },
    { name: 13, cost: 2.1, impression: 50 },
    { name: 14, cost: 8, impression: 190 },
    { name: 15, cost: 0, impression: 300 },
    { name: 16, cost: 9, impression: 400 },
    { name: 17, cost: 3, impression: 200 },
    { name: 18, cost: 2, impression: 50 },
    { name: 19, cost: 3, impression: 100 },
    { name: 20, cost: 7, impression: 100 },
];

const useStyles = makeStyles(() => ({
    card: {
        padding: "0px 20px 0px 20px"
    },
}));

export default function ExercisePage(props) {
    const styles = useStyles();
    const history = useHistory();

    console.log("exercise", props)
    return ([<div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <SideMenu></SideMenu>
        <Inventory {...props}></Inventory>
    </div>,
    <div style={{}}>
        <div style={{ display: "flex", justifyContent: "center" }}>
            <ArrowBackIosIcon onClick={() => history.push('/tasks')} style={{ marginTop: "6px" }} fontSize='medium'></ArrowBackIosIcon>
            <h1 style={{ textAlign: "center" }}>Exercise</h1>
        </div>

        <div className={styles.card}>
            <div style={{ border: '2px solid', borderColor: 'black', borderRadius: 16, height: "200px"}}><Graph></Graph></div>
            <div style={{ marginTop: "10px" }}></div>
            <div style={{ border: '2px solid', borderColor: 'black', borderRadius: 16 }}><Graph></Graph></div>
            <div style={{ marginTop: "10px" }}></div>
            <h5 style={{ textAlign: "center" }}>Points Earned Today: 50</h5>
            <div style={{ marginTop: "10px" }}></div>
            <h5 style={{ textAlign: "center" }}>Total Points Earned: 3500</h5>
        </div>
    </div>])
}

const getAxisYDomain = (from, to, ref, offset) => {
    const refData = initialData.slice(from - 1, to);
    let [bottom, top] = [refData[0][ref], refData[0][ref]];
    refData.forEach((d) => {
        if (d[ref] > top) top = d[ref];
        if (d[ref] < bottom) bottom = d[ref];
    });

    return [(bottom | 0) - offset, (top | 0) + offset];
};

const initialState = {
    data: initialData,
    left: 'dataMin',
    right: 'dataMax',
    refAreaLeft: '',
    refAreaRight: '',
    top: 'dataMax+1',
    bottom: 'dataMin-1',
    top2: 'dataMax+20',
    bottom2: 'dataMin-20',
    animation: true,
};

const data = [
    {
        name: 'Mon',
        uv: 2000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Tues',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Wed',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Thurs',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Fri',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Sat',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Sun',
        uv: null,
        pv: 4300,
        amt: 2100,
    },
];

class Graph extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 20,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    
                    <XAxis tick={{ fill: 'black' }} stroke="black" dataKey="name" />
                    <YAxis type="number" domain={['dataMin-100', 'dataMax+50']} hide/>
                    <defs>
                        <linearGradient id="colorPv2" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="10%" stopColor="green" stopOpacity={0.7} />
                            <stop offset="90%" stopColor="white" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    
                    <Area type="monotone" dataKey="uv" stroke="green" fill="url(#colorPv2)" fillOpacity={0.3} dot/>
                    <Tooltip />
                </AreaChart>
            </ResponsiveContainer>
        );
    }
}
