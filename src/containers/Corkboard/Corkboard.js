import React, { useState, useCallback } from 'react';
import { useDrop } from 'react-dnd'
import update from 'immutability-helper'

import StickyCount from '../../components/BuildControls/Counters/StickyCount'
import DraggableBox from '../../components/Draggable/DraggableBox'
import ItemTypes from '../../ItemTypes'

import classes from './Corkboard.css'

let widgets = {
    "Sticky" : {
        count : 1,
        disabled : false
    }
}

const renderBox = (item, key) => {
    return <DraggableBox key={key} id={key} {...item} />
}

const addWidgetHandler = type => {
    widgets[type].count += 1;

    widgets[type].disabled = false;
}

const removeWidgetHandler = type => {
    const newCount = this.state.widgets[type].count - 1;

    if (newCount === 0) {
        widgets[type].disabled = true
    } else {
        widgets[type].disabled = false;
    }
}

const styles = {
  width: 300,
  height: 300,
  border: '1px solid black',
  position: 'relative',
}

const Corkboard = () => { 
    const [boxes, setBoxes] = useState({
        a: { top: 20, left: 80, title: 'Drag me around' },
        b: { top: 180, left: 20, title: 'Drag me too' },
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
        <div className={classes.Corkboard}>
            {Object.keys(boxes).map(key => renderBox(boxes[key], key))}
            <ul>
                <li>Dropdown</li>
                <li>Searchbar</li>
                <li>Link to landing page</li>
            </ul>
            <main>
                <StickyCount
                    count={widgets["Sticky"].count}
                    addCount={addWidgetHandler}
                    minusCount={removeWidgetHandler}
                    disabled={widgets["Sticky"].disabled}
                />
            </main>
        </div>
    );
}

export default Corkboard;

// const styles = {
//   width: 300,
//   height: 300,
//   border: '1px solid black',
//   position: 'relative',
// }
// function renderBox(item, key) {
//   return <DraggableBox key={key} id={key} {...item} />
// }
// const Container = ({ snapToGrid }) => {
//   const [boxes, setBoxes] = useState({
//     a: { top: 20, left: 80, title: 'Drag me around' },
//     b: { top: 180, left: 20, title: 'Drag me too' },
//   })
//   const moveBox = useCallback(
//     (id, left, top) => {
//       setBoxes(
//         update(boxes, {
//           [id]: {
//             $merge: { left, top },
//           },
//         }),
//       )
//     },
//     [boxes],
//   )
//   const [, drop] = useDrop({
//     accept: ItemTypes.BOX,
//     drop(item, monitor) {
//       const delta = monitor.getDifferenceFromInitialOffset()
//       let left = Math.round(item.left + delta.x)
//       let top = Math.round(item.top + delta.y)
//       if (snapToGrid) {
//         ;[left, top] = doSnapToGrid(left, top)
//       }
//       moveBox(item.id, left, top)
//       return undefined
//     },
//   })
//   return (
//     <div ref={drop} style={styles}>
//       {Object.keys(boxes).map(key => renderBox(boxes[key], key))}
//     </div>
//   )
// }
// export default Container
