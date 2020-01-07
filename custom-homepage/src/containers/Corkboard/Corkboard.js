import React, { Component } from 'react';

import StickyCount from '../../components/BuildControls/Counters/StickyCount'

import classes from './Corkboard.css'

class Corkboard extends Component { 
    state = {
        widgets: {
            "Sticky" : {
                count : 1,
                disabled : false
            }
        }
    }

    addWidgetHandler = type => {
        const newCount = this.state.widgets[type].count + 1;

        const updatedWidgets = {
            ...this.state.widgets
        };
        updatedWidgets[type].count = newCount;
        updatedWidgets[type].disabled = false;

        this.setState({widgets: updatedWidgets});
    }

    removeWidgetHandler = type => {
        const newCount = this.state.widgets[type].count - 1;

        const updatedWidgets = {
            ...this.state.widgets
        };
        updatedWidgets[type].count = newCount;
        if (newCount === 0) {
            updatedWidgets[type].disabled = true
        } else {
        updatedWidgets[type].disabled = false;
        }

        this.setState({widgets: updatedWidgets});
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
                    <StickyCount
                        count={this.state.widgets["Sticky"].count}
                        addCount={this.addWidgetHandler}
                        minusCount={this.removeWidgetHandler}
                        disabled={this.state.widgets["Sticky"].disabled}
                    />
                </main>
            </div>
        );
    }
}

export default Corkboard;