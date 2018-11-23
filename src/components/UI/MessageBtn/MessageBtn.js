import React from 'react';
import classes from './MessageBtn.css';

const initclasses="far fa-bell"

const messageBtn = (props)=>(
    <i className={[initclasses, classes.Icon].join(' ')}>
        <div className={classes.Dot}></div>
    </i>
);

export default messageBtn;