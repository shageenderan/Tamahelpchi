import { makeStyles, withStyles } from '@material-ui/core/styles';
import { PieChart } from 'react-minimal-pie-chart';
import TimerIcon from '@material-ui/icons/Timer';
import moment from 'moment'


const useStyles = makeStyles(() => ({
    card: {
        padding: "5px 5px 0px 5px",
        border: '2px solid',
        borderColor: '#5B9FED',
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
    console.log(task, expired)
    return (
        <div className={`card text-left ${styles.card}`} key={task.id}>
            <div className="row">
                <div className="col-9">
                    <h4 style={{marginLeft: "5px"}}>{task.desc}</h4>
                    <div className="task-meta" style={{display: "flex", paddingTop: "10px", marginLeft: "2px"}}>
                        <TimerIcon></TimerIcon>
                        <div style={{marginLeft: "3px"}}>{expired ? 'expired' : `${max_time.from(moment(), true)} remaining`}</div>
                    </div>
                </div>

                <div className="col-3 is-center">
                    <Donut value={task.progress} label="Progress"></Donut>
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
    return (<div>
        <PieChart
            style={{ width: "85%" }}
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
    </div>)
}
export default Task;