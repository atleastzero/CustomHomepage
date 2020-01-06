import React from 'react';

import Aux from '../../hoc/Aux'

const corkboard = props => (
    <Aux>
        <ul>
            <li>Dropdown</li>
            <li>Searchbar</li>
            <li>Link to landing page</li>
        </ul>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default corkboard;