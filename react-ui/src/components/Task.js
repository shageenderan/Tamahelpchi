import { makeStyles, withStyles } from '@material-ui/core/styles';
import { PieChart } from 'react-minimal-pie-chart';
import TimerIcon from '@material-ui/icons/Timer';
import moment from 'moment'

import LoyaltyOutlinedIcon from '@material-ui/icons/LoyaltyOutlined';
import { useSizedIconButtonStyles } from '@mui-treasury/styles/iconButton/sized';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import React, { useState } from 'react'
import TimerStyled from './TimerStyled';
import { useHistory } from 'react-router-dom';

import { useStopwatch } from 'react-timer-hook';
import DigitalTimer from './DigitalTimer';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import CallMade from '@material-ui/icons/CallMade';

const StyledTooltip = withStyles({
    tooltip: {
        backgroundColor: 'rgba(0,0,0,0.72)',
        color: '#fff',
    },
})(Tooltip);

const useStyles = makeStyles(() => ({
    card: {
        padding: "5px 5px 0px 5px",
        border: '2px solid',
        borderColor: '#34f0cd',
        borderRadius: 16,
        transition: '0.4s',
        backgroundColor: 'azure',
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
    }
}));


function Task({ task, onTglStatus }) {
    const styles = useStyles();
    const max_time = task.start.clone().add(task.end._i)
    const expired = moment().isSameOrAfter(max_time)
    console.log(task, max_time, expired)

    const [playing, setPlaying] = useState(false)
    const {
        seconds,
        minutes,
        hours,
        days,
        start,
        pause,
        reset,
    } = useStopwatch({ autoStart: false });

    const history = useHistory();
    const iconBtnStyles = useSizedIconButtonStyles({ color: "#524c4c", childSize: 20 });

    return (
        <div className={`card text-left ${styles.card}`} key={task.id}>
            <div className="row" onClick={() => history.push('/tasks/exercise')}>
                <div style={{ display: "flex" }}>
                    <h4 style={{ marginLeft: "5px" }}>{task.desc}</h4>
                    <StyledTooltip style={{marginLeft: "-8px", marginTop: "-5px"}} title={'See details'}>
                        <IconButton classes={iconBtnStyles}>
                            <CallMade />
                        </IconButton>
                    </StyledTooltip>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }} className="row">
                <div className="col-8 is-center" style={{ maxHeight: "15vh" }}>
                    {/* <Donut value={task.progress} onClick={() => { playing ? pause() : start(); setPlaying(!playing) }} label={playing ? <PauseIcon htmlColor='#4b545c' fontSize='small'></PauseIcon> : <PlayArrowIcon htmlColor='#4b545c' fontSize='small'></PlayArrowIcon>}></Donut> */}
                    <DigitalTimer playing={playing} onClick={() => { playing ? pause() : start(); setPlaying(!playing) }} hours={hours} minutes={minutes} seconds={seconds}></DigitalTimer>
                </div>
            </div>
            <div className="row">
                <div className="col-8">
                    <div className="task-meta" style={{ display: "flex", paddingTop: "10px", marginLeft: "2px" }}>
                        <TimerIcon></TimerIcon>
                        <div style={{ marginLeft: "3px" }}>{expired ? 'expired' : `${max_time.from(moment(), true)} remaining`}</div>
                    </div>
                </div>
                <div className="task-meta col-4">
                    <div style={{ float: "right" }}>
                        {`${task.progress}/${task.points}`} <LoyaltyOutlinedIcon style={{ marginBottom: "2px" }} fontSize={"small"}></LoyaltyOutlinedIcon>
                    </div>

                </div>
            </div>
        </div>
    );
}

const getColor = (value) => {
    if (value <= 40) {
        return '#C13C37'
    }

    else if (value <= 80) {
        return '#FF9800'
    }

    else {
        return "#4CAF50"
    }
}

function Donut(props) {
    return (
        <div style={{ height: "100%" }} onClick={props.onClick}>
            <PieChart
                data={[{ value: props.value, key: 1, color: getColor(props.value) }]}
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
                startAngle={90}
                rounded
                animate
            />
        </div>

    )
}

function MyStopwatch(props) {
    const {
        seconds,
        minutes,
        hours,
        days,
        start,
        pause,
        reset,
    } = useStopwatch({ autoStart: false });

    if (props.play) {
        start()
    }
    else {
        pause()
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <div>
                <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
            </div>
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}




export default Task;