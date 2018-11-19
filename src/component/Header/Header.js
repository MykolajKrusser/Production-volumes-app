import React from 'react';
import classes from './Header.css';
import NavigationItem from '../Navigation/NavigationItem/NavigationItem';
import Logo from '../UI/Logo/Logo';
import Avatar from '../UI/Avatar/Avatar';
import MessageBtn from '../UI/MessageBtn/MessageBtn';

const header = (props)=>(
    <header className={classes.Header}>
        <Logo/>
        <NavigationItem link='/' exact>Main</NavigationItem>
        <MessageBtn/>
        <Avatar/>
    </header>
);

export default header;