import React from 'react';

import Counter from './Counter/Counter'
import Sticky from '../../Widgets/Sticky/Sticky'
import DraggableBox from '../../Draggable/DraggableBox'

import classes from './StickyCount.css'

const stickyCount = props => {
    let allStickies = Array(props.count);

    for (let i = 1; i <= props.count; i++) {
        allStickies[i - 1] = <DraggableBox id={1000+i} left={0} top={0}><Sticky key={i} /></DraggableBox>
    }

    return (<div className={classes.StickyCount}>
        <Counter 
            added={() => props.addCount("Sticky")}
            removed={() => props.minusCount("Sticky")}
            disabled={props.disabled}
            render={() => props.render()}
        />
        {props.render()}
    </div>);
};

export default stickyCount;