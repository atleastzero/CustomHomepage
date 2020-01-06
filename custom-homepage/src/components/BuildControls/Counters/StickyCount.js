import React from 'react';

import Counter from './Counter/Counter'

import classes from './StickyCount.css'

const stickyCount = props => (
    <div className={classes.StickyCount}>
        <Counter 
            added={() => props.addCount("Sticky")}
            removed={() => props.minusCount("Sticky")}
            disabled={props.disabled}
        />
    </div>
);

export default stickyCount;