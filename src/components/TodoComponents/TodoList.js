import React, { Component } from 'react';
import './Todo.scss';
import Todo from './Todo';

// Receive list of Todos from App

class TodoList extends Component {
  render() {
    return (
      <div className="TodoList">
        {
          this.props.todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              handleOnClick={this.props.handleTodoClick}
            />
          )).sort((a, b) => a.props.todo.completed ? 1 : -1)
        }
      </div>
     );
  }
}
 
export default TodoList;
