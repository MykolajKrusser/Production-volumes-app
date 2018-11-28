import React from 'react';
import classes from './Header.css';
import Logo from '../UI/Logo/Logo';
import Avatar from '../UI/Avatar/Avatar';
import MessageBtn from '../UI/MessageBtn/MessageBtn';
import NavigationItem from '../Navigation/NavigationItem/NavigationItem';

import img from '../../assets/img/user.jpg';

const header = (props)=>(
    <header className={classes.Header}>
        <Logo/>
        <div>
            <NavigationItem link='/chat'>
                <MessageBtn/>
            </NavigationItem>
            <Avatar src={img}/>
        </div>
    </header>
);

export default header;