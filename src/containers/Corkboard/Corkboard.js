import React, { useState, useCallback } from 'react';
import { useDrop } from 'react-dnd';
import update from 'immutability-helper';

// import StickyCount from '../../components/BuildControls/Counters/StickyCount';
import Sticky from '../../components/Widgets/Sticky/Sticky';
import DraggableBox from '../../components/Draggable/DraggableBox';
import ItemTypes from '../../ItemTypes';
import TodoList from '../../components/Widgets/Todo/TodoList'

import classes from './Corkboard.css';

const renderBox = (item, key) => {
  return <DraggableBox key={key} id={key} {...item}>
      </DraggableBox>
}

const styles = {
  width: "100vw",
  height: "100vh"
}

const Corkboard = () => { 
  const [boxes, setBoxes] = useState({
      a: { top: 20, left: 80},
      b: { top: 180, left: 20},
      sticky : { top: 200, left: 500, children: <Sticky /> },
      todo : { top: 200, left: 50, children: <TodoList /> }
  })
    
    const moveBox = useCallback(
      (id, left, top) => {
        setBoxes(
          update(boxes, {
            [id]: {
              $merge: { left, top },
            },
          }),
        )
      },
      [boxes],
    )
    
    const [, drop] = useDrop({
      accept: ItemTypes.BOX,
      drop(item, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset()
        let left = Math.round(item.left + delta.x)
        let top = Math.round(item.top + delta.y)
        moveBox(item.id, left, top)
        return undefined
      },
    })


    return (
        <div className={classes.Corkboard} style={styles} ref={drop}>
            {Object.keys(boxes).map(key => renderBox(boxes[key], key))}
            <ul>
                <li>Dropdown</li>
                <li>Searchbar</li>
                <li>Link to landing page</li>
            </ul>
        </div>
    );
}

export default Corkboard;
