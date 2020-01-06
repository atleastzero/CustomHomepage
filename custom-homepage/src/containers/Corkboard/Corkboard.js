import React, { Component } from 'react';

import Sticky from '../../components/Widgets/Sticky/Sticky'
import StickyCount from '../../components/BuildControls/Counters/StickyCount'

import classes from './Corkboard.css'

class Corkboard extends Component { 
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
                    <StickyCount />
                    <Sticky />
                </main>
            </div>
        );
    }
}

export default Corkboard;