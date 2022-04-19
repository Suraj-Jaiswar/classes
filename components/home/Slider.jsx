import Link from 'next/link';
import React, { useState, useEffect } from "react";
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import {CgClose} from "react-icons/cg";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export default function Slider(props) {

    return(
        <Drawer
			anchor={'right'}
			open={props.showDrawer}
			onClose={()=> props.toggleDrawer(false)}
		>
            <div className="drawer-holder">
                <IconButton
                onClick={() => {
                    props.toggleDrawer(false);
                }}
                className="CloseButton"
                >
                    <CgClose color="primary" />
                </IconButton>
                <List className="NavBarList">
                    <ListItem className="pdlr-0">
                        <Link href="/">
                            <a >Home</a>
                        </Link>
                    </ListItem>
                    <ListItem className="pdlr-0">
                        <Link href="/about">
                            <a >About Us</a>
                        </Link>
                    </ListItem>
                    {/* <ListItem className="pdlr-0">
                        <Link href="/career">
                            <a >Courses</a>
                        </Link>
                    </ListItem> */}
                    <ListItem className="pdlr-0">
                        <Link href="/contact">
                            <a >Contact Us</a>
                        </Link>
                    </ListItem>
                </List>
            </div>
		</Drawer>
    )

}        