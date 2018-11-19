import React from 'react';
import {NavLink} from 'react-router-dom';

import classes from './NavigationItem.css';

const navigationItem = (props)=>(
    <NavLink
        className={classes.NavItem}
        to={props.link} 
        exact={props.exact}
    >
    {props.children}
    </NavLink>
);

export default navigationItem;