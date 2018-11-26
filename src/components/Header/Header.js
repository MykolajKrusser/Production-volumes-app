import React from 'react';
import classes from './Header.css';
import Logo from '../UI/Logo/Logo';
import Avatar from '../UI/Avatar/Avatar';
import MessageBtn from '../UI/MessageBtn/MessageBtn';

import img from '../../assets/img/avatar.jpeg';

const header = (props)=>(
    <header className={classes.Header}>
        <Logo/>
        <div>
            <MessageBtn/>
            <Avatar src={img}/>
        </div>
    </header>
);

export default header;