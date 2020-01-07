import React from 'react';

import Counter from './Counter/Counter'
import Sticky from '../../Widgets/Sticky/Sticky'

import classes from './StickyCount.css'

const stickyCount = props => {
    let allStickies = Array(props.count);

    for (let i = 1; i <= props.count; i++) {
        allStickies[i - 1] = <Sticky key={i} />
    }

    return (<div className={classes.StickyCount}>
        <Counter 
            added={() => props.addCount("Sticky")}
            removed={() => props.minusCount("Sticky")}
            disabled={props.disabled}
        />
        {allStickies}
    </div>);
};

export default stickyCount;