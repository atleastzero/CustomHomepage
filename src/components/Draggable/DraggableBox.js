import React from 'react'
import { useDrag } from 'react-dnd'
import ItemTypes from '../../ItemTypes'
import Box from '../../Box'

function getStyles(left, top, isDragging) {
  const transform = `translate3d(${left}px, ${top}px, 0)`
  return {
    position: 'absolute',
    transform,
    WebkitTransform: transform,
    // IE fallback: hide the real node using CSS when dragging
    // because IE will ignore our custom "empty image" drag preview.
    opacity: isDragging ? 0 : 1,
    height: isDragging ? 0 : '',
  }
}
const DraggableBox = props => {
  const id = props.id
  const left = props.left
  const top = props.top

  const [{ isDragging }, drag, ] = useDrag({
    item: { type: ItemTypes.BOX, id, left, top },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })
  // useEffect(() => {
  //   preview(getEmptyImage(), { captureDraggingState: true })
  // }, [])
  return (
    <div ref={drag} style={getStyles(left, top, isDragging)}>
      <Box content={props.children} /> 
    </div>
  )
}
export default DraggableBox
