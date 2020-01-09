/* Taken from  https://react-dnd.github.io/react-dnd/examples/drag-around/custom-drag-layer */

import React from 'react'
const styles = {
  // border: '1px dashed gray',
  // padding: '0.5rem 1rem',
  paddingTop: "30px",
  backgroundColor: "gray",
  cursor: 'move'
}
const Box = ({ content }) => {
  return <div style={styles}>{content}</div>
}
export default Box

