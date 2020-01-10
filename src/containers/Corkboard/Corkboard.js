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

const movieStyles = {
  border: 0,
  width: 800, 
  height: 600, 
  frameborder: 0, 
  scrolling: "no"
}

const movieCalendar = (
  <iframe title="movies" src="https://calendar.google.com/calendar/embed?src=pfutdblf1gi8jmfsvroh76f6jg%40group.calendar.google.com&ctz=America%2FLos_Angeles" style={movieStyles}></iframe>
)

const spotifyPlayer = (
  <iframe title="music" src="https://open.spotify.com/embed/playlist/37i9dQZF1EtgIKeqbyrga8" width="300" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
)

const Corkboard = () => { 
  const [boxes, setBoxes] = useState({
      // a: { top: 20, left: 80},
      // b: { top: 180, left: 20},
      sticky : { top: 200, left: 500, children: <Sticky /> },
      todo : { top: 200, left: 50, children: <TodoList /> },
      calendar: {top: 75, left: 800, children: movieCalendar},
      spotify: {top: 300, left: 600, children: spotifyPlayer}
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
        </div>
    );
}

export default Corkboard;
