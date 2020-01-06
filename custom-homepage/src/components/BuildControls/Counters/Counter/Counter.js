import React from 'react';

import classes from './Counter.css';

const buildControl = props => (
    <div className={classes.Counter}>
        <button 
            className={classes.Less} 
            onClick={props.removed}
            disabled={props.disabled}
        >
                -
        </button>
        <button 
            className={classes.More} 
            onClick={props.added}
        >
            +
        </button>
    </div>
);

export default buildControl;