import React from 'react';
import classes from './Header.css';
import Logo from '../UI/Logo/Logo';
import Avatar from '../UI/Avatar/Avatar';
import MessageBtn from '../UI/MessageBtn/MessageBtn';

const header = (props)=>(
    <header className={classes.Header}>
        <Logo/>
        <div>
            <MessageBtn/>
            <Avatar/>
        </div>
    </header>
);

export default header;