import React from 'react';
import classes from './Control.css';

import Input from '../Input/Input';
import Button from '../Button/Button';

const control = (props)=>(
    <div className={classes.Control}>
        <h3>{props.children}</h3>
        <Input 
            type='text'
            value={props.value}
            onChange={props.input}
            width='70%'/>
        <Button onClick={props.click}>Calc</Button>
    </div>
);

export default control;