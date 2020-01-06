import React from 'react';

import Aux from '../../hoc/Aux'

import classes from './Corkboard.css'

const corkboard = props => (
    <div className={classes.Corkboard}>
        <ul>
            <li>Dropdown</li>
            <li>Searchbar</li>
            <li>Link to landing page</li>
        </ul>
        <main>
            {props.children}
        </main>
    </div>
);

export default corkboard;