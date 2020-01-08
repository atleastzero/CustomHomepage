/* Taken from  https://react-dnd.github.io/react-dnd/examples/drag-around/custom-drag-layer */

import React from 'react'
const styles = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  cursor: 'move',
}
const Box = ({ content, yellow }) => {
  const backgroundColor = yellow ? 'yellow' : 'white'
  return <div style={{ ...styles, backgroundColor }}>{content}</div>
}
export default Box

