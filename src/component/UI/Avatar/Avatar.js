import React from 'react';
import classes from './Avatar.css';
import img from '../../../assets/img/avatar.jpeg';

const avatar = (props)=>(
    <img src={img} className={classes.Avatar} alt={props.avatarTitle}/>
);

export default avatar;