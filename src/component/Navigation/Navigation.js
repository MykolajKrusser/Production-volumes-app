import React from 'react';
import classes from './Navigation.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigation = (props)=>(
    <nav className={classes.SideNav}>
        <NavigationItem link='/' exact>Main</NavigationItem>
        <NavigationItem link='/workflow' exact>Workflow</NavigationItem>
        <NavigationItem link='/chat' exact>Chat</NavigationItem>
        <NavigationItem link='/total' exact>Total</NavigationItem>
    </nav>
);

export default navigation;