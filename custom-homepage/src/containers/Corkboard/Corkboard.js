import React from 'react';

import Sticky from '../../components/Widgets/Sticky/Sticky'

import classes from './Corkboard.css'

class Corkboard { 
    state = {
        stickies: 1
    }

    render() {
        return (
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
    }
}

export default corkboard;