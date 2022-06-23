import "./assets/styles.css";

import React, { useRef, useState, useEffect } from 'react'
import Turtle from './components/Turtle'
import { Illustration, Anchor, Ellipse, Shape, RoundedRect, Hemisphere, useRender } from 'react-zdog'
import SideMenu from './components/SideMenu'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Shop from './components/Shop'
import Inventory from './components/Inventory'
import PointsShop from './components/PointsShop'
import Tasks from './components/Tasks'
import Help from './components/Help'
import Container from '@material-ui/core/Container';
import { Icon } from '@material-ui/core';
import { loadCSS } from 'fg-loadcss';
import moment from 'moment'

import { UserAPI } from "./apis/UserAPI";
import ExercisePage from "./components/ExercisePage";

const TAU = Math.PI * 2

const useStyles = makeStyles((theme) => ({
  root: {
    '& > .fa': {
      margin: theme.spacing(2),
    },
  },
}));

const StyledHeartRating = withStyles({
  iconFilled: {
    color: '#ff3d47',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);

const StyledWaterRating = withStyles({
  iconFilled: {
    color: '#00b8ff',
  },
  iconHover: {
    color: '#00b8ff',
  },
})(Rating);

const StyledHungerRating = withStyles({
  iconFilled: {
    color: '#ff8d00d9',
  },
  iconHover: {
    color: '#ff8d00d9',
  },
})(Rating);


function Home(props) {
  const classes = useStyles();

  loadCSS(
    'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
    document.querySelector('#font-awesome-css'),
  );

  return [
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <SideMenu></SideMenu>
      <button onClick={() => props.eat()}>FEED HIM</button>
      <Inventory {...props}></Inventory>
    </div>
    ,
    <Illustration onClick={() => { console.log("hi") }} style={{ "height": "600px" }} zoom={1.2} dragRotate={true} rotate={{ x: (TAU * 10) / 128, y: -0.05 }}>
      <Turtle eating={props.isEating}></Turtle>
    </Illustration>,
    <div style={{ "textAlign": "center", "marginTop": "-150px" }}>
      <StyledHeartRating
        name="read-only"
        value={5}
        precision={0.5}
        icon={<FavoriteIcon></FavoriteIcon>}
        readOnly
      />
    </div>,
    <div className={classes.root} style={{ "textAlign": "center" }}>
      <StyledHungerRating
        name="read-only"
        value={5}
        precision={0.5}
        icon={<Icon className="fa fa-hamburger"></Icon>}
        readOnly
      />
    </div>,
    <div className={classes.root} style={{ "textAlign": "center" }}>
      <StyledWaterRating
        name="read-only"
        value={5}
        precision={0.5}
        icon={<Icon className="fa fa-tint"></Icon>}
        readOnly
      // style={{ "padding": "10px" }}
      />
    </div>



  ]
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      points: 0,
      inventory: { food: [], clothes: [], backgrounds: [] },
      tasks: [],
      isEating: false,
    }
  }

  eat = () => { this.setState({ isEating: true }, () => { setTimeout(() => { this.setState({ isEating: false }) }, 2500) }) }

  addTask = (newTask) => {
    UserAPI.AddTask(newTask).then(res => { console.log(res); this.getUserData() })
  }

  updateInventory = (newItem, category) => {
    console.log("inventory update:", newItem, category)
    const updatedInventory = [...this.state.inventory[category]]
    console.log("Initial:", updatedInventory)
    if (updatedInventory.filter(item => item.title === newItem.title).length) {
      // item already exists, update the quantity
      let indx = updatedInventory.findIndex(item => item.title === newItem.title)
      console.log(indx)
      const new_quantity = updatedInventory[indx].quantity + newItem.quantity;

      if (new_quantity > 0) { updatedInventory[indx] = { ...updatedInventory[indx], quantity: new_quantity } }
      else {
        // delete item from inventory
        updatedInventory.splice(indx, 1)
      }
    }
    else {
      // add item to inventory
      updatedInventory.push(newItem)
    }
    console.log("Old Inventory:", this.state.inventory)

    console.log("New Inventory:", { ...this.state.inventory, [category]: updatedInventory })
    this.setState({ inventory: { ...this.state.inventory, [category]: updatedInventory } })
  }

  updatePoints = (newPoints) => {
    const updatedPoints = newPoints
    this.setState({ points: updatedPoints })
  }

  getUserData = async () => {
    fetch('/api/user').then((resp) => resp.json()).then(res => { return { ...res, tasks: res.tasks.map(elem => { return { ...elem, "start": moment(elem.start), "end": moment(elem.end) } }) } }).then((res) => this.setState({ ...res }, () => console.log("State:", this.state)))
  }

  componentDidMount() {
    this.getUserData();
  }

  render() {

    return (
      <Router>
        <div>
          <Switch>
            <Route path="/shop">
              <Shop {...this.state} updateInventory={this.updateInventory} updatePoints={this.updatePoints}></Shop>
            </Route>
            <Route path="/tasks/exercise">
              <ExercisePage {...this.state}></ExercisePage>
            </Route>
            <Route path="/tasks">
              <Tasks tasks={this.state.tasks}></Tasks>
            </Route>
            <Route path="/points">
              <PointsShop addTask={this.addTask} />
            </Route>
            <Route path="/help">
              <Help></Help>
            </Route>
            <Route path="/home">
              <Home {...this.state} eat={this.eat} updateInventory={this.updateInventory} updatePoints={this.updatePoints} />
            </Route>
            <Route path="/" exact>
              <Home {...this.state} eat={this.eat} updateInventory={this.updateInventory} updatePoints={this.updatePoints} />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}
