import React from 'react';
import classes from './Header.css';
import NavigationItem from '../Navigation/NavigationItem/NavigationItem';

const header = (props)=>(
    <header className={classes.Header}>
        <div className={classes.Logo}>
            ProdVol
        </div>
        <NavigationItem link='/' exact>Main</NavigationItem>
    </header>
);

export default header;