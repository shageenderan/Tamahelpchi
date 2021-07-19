// import Offcanvas from 'react-bootstrap/Offcanvas'
import Offcanvas from '../components/Offcanvas/Offcanvas'
import React, { useRef, useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import LocalMallIcon from '@material-ui/icons/LocalMall'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import Carousel, { arrowsPlugin } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'
import ImageListItemBar from '@material-ui/core/ImageListItemBar'
import ListSubheader from '@material-ui/core/ListSubheader'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

// import { itemData, foodData, backgroundData } from '../assets/itemData';
import { foodData } from '../assets/inventoryData'
import Card from './Card'
import { Paper } from '@material-ui/core'

export default function Inventory(props) {
  console.log("Inventory", props)

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button>
        <LocalMallIcon onClick={handleShow} style={{ fontSize: '45', color: '#f78006' }}></LocalMallIcon>
      </Button>
      <Offcanvas style={{ height: '60vh' }} show={show} onHide={handleClose} placement="bottom" name="bottom">
        <Box boxShadow={0} >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Inventory</Offcanvas.Title>
          </Offcanvas.Header>
        </Box>

        <Offcanvas.Body>
          <Bag {...props} closeInventory={handleClose}></Bag>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'inherit',
  },
  imageList: {
    width: 250,
    height: 250,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}))

function Bag(props) {
  console.log("bag", props)

  const classes = useStyles()
  const theme = useTheme()
  const [value, setValue] = React.useState(0)

  const foodInventory = props.inventory.food
  const clothesInventory = props.inventory.clothes
  const backgroundInventory = props.inventory.backgroundInventory

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleChangeIndex = index => {
    setValue(index)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
          aria-label="full width tabs example">
          <Tab label="Food" {...a11yProps(0)} />
          <Tab label="Clothes" {...a11yProps(1)} />
          <Tab label="Background" {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0} dir={theme.direction}>
        {foodInventory.length ?
          <Carousel plugins={['centered', 'infinite',
            {
              resolve: arrowsPlugin,
              options: {
                arrowLeft: <button><KeyboardArrowLeftIcon /></button>,
                arrowLeftDisabled: <button><KeyboardArrowLeftIcon /></button>,
                arrowRight: <button><KeyboardArrowRightIcon /></button>,
                arrowRightDisabled: <button><KeyboardArrowRightIcon /></button>,
                addArrowClickHandler: true,
              }
            }
          ]}>
            {foodInventory.map(item => {
              return <Card category={"food"} {...item} {...props} subtitle={<span>Quantity: {item.quantity}</span>} size="small"></Card>
            })}
          </Carousel>
          :
          <Paper elevation={3}><h1>Nothing to show</h1></Paper>

        }
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        Bag
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        Bag
      </TabPanel>
    </div>
  )
}

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      // style={{ backgroundColor: '#BBEEDB' }}
      {...other}>
      {value === index && (
        <Box id={'MyBOX'} boxShadow={3} style={{ height: '100%' }} p={1}>
          {children}
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  }
}
