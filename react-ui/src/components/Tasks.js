import Task from "./Task";
import SideMenu from './SideMenu';
import Inventory from './Inventory';
import ReactList from 'react-list';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Image from 'react-bootstrap/Image'
import turtle0 from '../assets/task turtles/turtle0.png'
import turtle1 from '../assets/task turtles/turtle1.png'
import turtle2 from '../assets/task turtles/turtle2.png'
import turtle3 from '../assets/task turtles/turtle3.png'
import turtle4 from '../assets/task turtles/turtle4.png'

const task_turtles = [turtle0, turtle1, turtle2, turtle3, turtle4]

const useStyles = makeStyles(() => ({
    card: {
        padding: "0px 10px 0px 10px"
    },
}));


function Tasks({ tasks, onTglStatus }) {
    const styles = useStyles();
    
    return (
        <div >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <SideMenu></SideMenu>
                <Inventory></Inventory>
            </div>
            <h1 style={{ textAlign: "center" }}>Tasks</h1>
            <div style={{ display: "flex", flexDirection:"column", justifyContent: "space-between" }}>
                {/* <div style={{ overflow: 'auto', maxHeight: "55vh" }}> */}
                <div style={{ overflow: 'auto', maxHeight: 600 }}>
                    <ReactList
                        itemRenderer={(index, key) => {
                            return (
                                <div className={`col-12 ${styles.card}`} key={tasks[index].id}>
                                    <Task task={tasks[index]} onTglStatus={onTglStatus} />
                                </div>)
                        }}
                        length={tasks.length}
                        type='simple'
                    />
                </div>
                {/* <div style={{bottom: "10px", position: "absolute", left: "15%"}}>
                    {tasks.length <= 50 ? <Image height="250px" src={task_turtles[0]} rounded></Image> : null}
                </div> */}
            </div>            
        </div>
    );
}

export default Tasks;