import React from 'react';

import classes from './Sticky.css'

const sticky = props => {
    const styles = {
        border: "0",
        backgroundColor: "inherit",
        font: "600 15px system-ui"
    }

    return (
        <div className={classes.Sticky}>
            <textarea style={styles} defaultValue="Write something..."></textarea>
        </div>
    )
}

export default sticky;