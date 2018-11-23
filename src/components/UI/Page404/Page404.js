import React from 'react';
import classes from './Page404.css';

const page404 =()=>(
            <div className={[classes.Cont_principal, classes.Cont_principal, classes.Cont_error_active ].join(' ')}>
                <div className={classes.Cont_error}>
                <h1>Oops</h1>  
                <p>The Page you're looking for isn't here.</p>
                </div>
                <div className={classes.Cont_aura_1}></div>
                <div className={classes.Cont_aura_2}></div>
            </div>
);
export default page404;