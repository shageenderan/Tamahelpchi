import React, { useRef, useState, useEffect } from 'react'
import Turtle from './components/Turtle'
import { Illustration, Anchor, Ellipse, Shape, RoundedRect, Hemisphere, useRender } from './components/react-zdog'
import SideMenu from './components/SideMenu'
import Button from '@material-ui/core/Button'

import LocalMallIcon from '@material-ui/icons/LocalMall'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Shop from './components/Shop'
import Inventory from './components/Inventory'
import PointsShop from './components/PointsShop'
import Tasks from './components/Tasks'
import Help from './components/Help'

const TAU = Math.PI * 2

function Home(props) {
  return [
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <SideMenu></SideMenu>
      <Inventory {...props}></Inventory>
    </div>,
    <Illustration zoom={1.2} dragRotate={true} rotate={{ x: (TAU * 10) / 128, y: -0.05 }}>
      <Turtle></Turtle>
    </Illustration>,
  ]
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      points: 0,
      inventory: { food: [], clothes: [], backgrounds: [] },
      tasks: []
    }
  }

  updateInventory = (newItem, category) => {
    console.log("inventory update:", newItem, category)
    const updatedInventory = [ ...this.state.inventory[category] ]
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

    console.log("New Inventory:", {...this.state.inventory, [category]: updatedInventory})
    this.setState({inventory: {...this.state.inventory, [category]: updatedInventory}})
  }

  updatePoints = (newPoints) => { 
    const updatedPoints = newPoints
    this.setState({points: updatedPoints})
  }

  getUserData = async () => {
    fetch('/api/user').then((resp) => resp.json()).then((res) => this.setState({ ...res }, () => console.log(this.state)))
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
            <Route path="/tasks">
              <Tasks></Tasks>
            </Route>
            <Route path="/points">
              <PointsShop />
            </Route>
            <Route path="/help">
              <Help></Help>
            </Route>
            <Route path="/home">
              <Home {...this.state} updateInventory={this.updateInventory} updatePoints={this.updatePoints}/>
            </Route>
            <Route path="/" exact>
              <Home {...this.state} updateInventory={this.updateInventory} updatePoints={this.updatePoints} />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}
