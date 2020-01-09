import React from 'react';

import TodoItem from './TodoItem/TodoItem'

import classes from './TodoList.css'

const todoList = props => {
    return (
        <div className={classes.TodoList}>
            <h1>To-do</h1>
            <input type="text" />
            <ul>
                <li><span>x</span> <TodoItem>Add a todo!</TodoItem></li>
            </ul>
        </div>
    )
}

export default todoList;