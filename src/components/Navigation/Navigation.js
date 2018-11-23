import React from 'react';
import classes from './Navigation.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigation = (props)=>(
    <nav className={classes.SideNav}>
        <NavigationItem link='/' exact>Main</NavigationItem>
        <NavigationItem link='/workflow'>Workflow</NavigationItem>
        <NavigationItem link='/chat'>Chat</NavigationItem>
        <NavigationItem link='/total'>Total</NavigationItem>
    </nav>
);

export default navigation;