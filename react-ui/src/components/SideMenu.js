import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import DehazeRoundedIcon from '@material-ui/icons/DehazeRounded';
import StorefrontIcon from '@material-ui/icons/Storefront';
import LoyaltyIcon from '@material-ui/icons/Loyalty';

import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import HelpIcon from '@material-ui/icons/Help';
import HomeIcon from '@material-ui/icons/Home';
import ListAltIcon from '@material-ui/icons/ListAlt';

import { useHistory } from 'react-router-dom';

export default function SideMenu(props) {
    const [menuOpen, setMenuOpen] = React.useState(false);
    let history = useHistory();
    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        console.log(open, event)
        setMenuOpen(open);
    };

    const redirect = (page) => {
        
        // console.log("/"+page)
        history.push('/'+page)
    }

    return (
        <React.Fragment>
            {/* style={{outline: "auto", marginLeft: "8px", marginTop: "8px"}} */}
            <Button onClick={toggleDrawer(true)}><DehazeRoundedIcon style={{ fontSize: props.size !== undefined ? props.size : 45 }} /></Button>
            <SwipeableDrawer
                anchor={"left"}
                open={menuOpen}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                <div>
                    <List>
                        <ListItem button key={"home"} onClick={() => redirect("home")}>
                            <ListItemIcon><HomeIcon fontSize="large"></HomeIcon></ListItemIcon>
                            <ListItemText primary={"Home"} />
                        </ListItem>
                        <ListItem button key={"shop"}  onClick={() => redirect("shop")}>
                            <ListItemIcon><StorefrontIcon fontSize="large"></StorefrontIcon></ListItemIcon>
                            <ListItemText primary={"Shop"} />
                        </ListItem>
                        <ListItem button key={"points"}  onClick={() => redirect("points")}>
                            <ListItemIcon><LoyaltyIcon fontSize="large"></LoyaltyIcon></ListItemIcon>
                            <ListItemText primary={"Points"} />
                        </ListItem>
                        <ListItem button key={"tasks"}  onClick={() => redirect("tasks")}>
                            <ListItemIcon><ListAltIcon fontSize="large"></ListAltIcon></ListItemIcon>
                            <ListItemText primary={"Tasks"} />
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem button key={"help"}  onClick={() => redirect("help")}>
                            <ListItemIcon><HelpIcon fontSize="large"></HelpIcon></ListItemIcon>
                            <ListItemText primary={"Help"} />
                        </ListItem>
                    </List>
                </div>
            </SwipeableDrawer>
        </React.Fragment>
    );
}