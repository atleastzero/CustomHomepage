import React, { Component } from 'react';

import TodoItem from './TodoItem/TodoItem'

import classes from './TodoList.css'

class TodoList extends Component {
    state = {
        items: [],
        currentInput: ""
    }

    _handleKeyDown = (e) => {
        if (e.key === 'Enter')
            this.addItem(this.state.currentInput);
    }

    addItem = (text) => {
        const newItem = (<TodoItem>{text}</TodoItem>);
        let newList = [...this.state.items, newItem];
        this.setState({items: newList});
    }

    deleteItem = (index) => {
        let newList = [...this.state.items];
        newList.splice(index, 1);
        this.setState({items: newList});
    }

    componentWillMount() {
        this.addItem("Add your first todo item!");
    }

    componentDidMount() {
        this.addItem("Delete your first todo item!");
    }

    render() {
        let items = this.state.items
            .map(item => {
                return (
                    <li className={classes.Item} key={item.index}><span onClick={() => this.deleteItem(item.index)}>x</span> {item}</li>
                );
            });

        return (
            <div className={classes.TodoList}>
                <h1 className={classes.Title}>To-do</h1>
                <input id="input" className={classes.Input} onKeyDown={(e) => 
                    {
                        this.setState({currentInput: document.getElementById("input").value})
                        this._handleKeyDown(e);
                    }} type="text" />
                <ul className={classes.List}>
                    {items}
                </ul>
            </div>
        )
    }
}

export default TodoList;