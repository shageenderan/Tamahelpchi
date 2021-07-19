import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ShopContents from './ShopContents';
import SideMenu from './SideMenu'
import Toolbar from '@material-ui/core/Toolbar';
import LoyaltyIcon from '@material-ui/icons/Loyalty';

import { itemData, foodData, backgroundData } from '../assets/itemData';
import { Button } from '@material-ui/core';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      style={{ backgroundColor: "#BBEEDB" }}
      {...other}
    >
      {value === index && (
        <Box id={"MyBOX"} style={{ height: "100%" }} p={1}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#BBEEDB",
  },
}));

export default function Shop(props) {
  console.log("Shop", props)
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar style={{ backgroundColor: "rgb(99 214 171)" }}>
          <SideMenu size={35}></SideMenu>

          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
            aria-label="full width tabs example"
          >
            <Tab label="Food" {...a11yProps(0)} />
            <Tab label="Clothes" {...a11yProps(1)} />
            <Tab label="Background" {...a11yProps(2)} />
          </Tabs>
        </Toolbar>

      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <ShopContents category="food" user={props} data={foodData}></ShopContents>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <ShopContents user={props} data={itemData}></ShopContents>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <ShopContents user={props} data={backgroundData}></ShopContents>
        </TabPanel>
      </SwipeableViews>

      <div style={{textAlign: "center"}}>
        <Typography variant="h4">Your Points: <LoyaltyIcon fontSize="inherit"/>{props.points}</Typography>
      </div>
      
      
    </div>
  );
}