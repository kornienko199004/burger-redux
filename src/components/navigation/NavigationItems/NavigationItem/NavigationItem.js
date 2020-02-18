import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.css';

const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <NavLink
            exact
            to={props.link}
            activeClassName={classes.active}
            // activeStyle={{
            // backgroundColor: '#8f5c2c',
            // borderBottom: '4px solid #40a4c8',
            // color: 'white'}}
            >{props.children}</NavLink>
    </li>
);

export default navigationItem;