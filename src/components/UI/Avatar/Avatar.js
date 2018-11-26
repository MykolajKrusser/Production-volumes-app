import React from 'react';
import classes from './Avatar.css';


const avatar = (props)=>(
    <img className={classes.Avatar} alt={props.avatarTitle} src={props.src}/>
);

export default avatar;