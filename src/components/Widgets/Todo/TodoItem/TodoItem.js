import React, { Component } from 'react';

import classes from './TodoItem.css'

class TodoItem extends Component {
    state = {
        click: false,
        styles: []
    }

    click = () => {
        let newStyle = [...this.state.styles];
        let newClick = true;
        if (!this.state.click)
            newStyle.push(classes.Strike);
        else {
            newStyle = [classes.Mouse];
            newClick = false;
        }
        this.setState({styles: newStyle, click: newClick});
    }

    mouse = () => {
        let newStyle = [...this.state.styles];
        newStyle.push(classes.Mouse);
        this.setState({styles: newStyle});
    }

    render() {
        return (
            <span onClick={this.click} onMouseOver={this.mouse} className={this.state.styles.join(" ")}>
                {this.props.children}
            </span>
        )
}
}

export default TodoItem;