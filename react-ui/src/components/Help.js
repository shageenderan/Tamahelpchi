import { Container, Link, Typography } from '@material-ui/core'
import React from 'react'
import Inventory from './Inventory'
import SideMenu from './SideMenu'

import ContactSupportIcon from '@material-ui/icons/ContactSupport';

export default function Help(props) {
    return [
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <SideMenu></SideMenu>
        </div>,
        <Container>
            <Typography variant={"h2"}>Find Help <ContactSupportIcon style={{fontSize: "inherit"}}/></Typography>
            <Typography variant={"h5"}>If you are going through a rough period or experiencing dark thoughts dont hesistate to reach for help</Typography>
            <Typography style={{padding: "30px"}} variant={"h6"}>
                <ul>
                    <li>
                        <Link href={'https://www.befrienders.org.my/'}>BefriendersKL (03-7627 2929)</Link>
                    </li>
                    <li>
                        <Link
                            href={'https://miasa.org.my/'}>
                            {"Mental Illness Awareness & Support Association (03-7932 1409)"}
                        </Link>
                    </li>
                </ul>
            </Typography>
        </Container>
    ]

}