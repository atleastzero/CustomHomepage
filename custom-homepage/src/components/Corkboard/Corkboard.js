import React from 'react';

import Sticky from '../Widgets/Sticky/Sticky'

import classes from './Corkboard.css'

const corkboard = props => (
    <div className={classes.Corkboard}>
        <ul>
            <li>Dropdown</li>
            <li>Searchbar</li>
            <li>Link to landing page</li>
        </ul>
        <main>
            <Sticky />
        </main>
    </div>
);

export default corkboard;