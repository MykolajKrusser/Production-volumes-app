import React from 'react';
import classes from './Input.css';

const input = (props)=>(
    <input 
        className={classes.Input} 
        type={props.type} 
        value={props.value} 
        title={props.title}
        onChange={props.onChange}/>
);

export default input;