import React, { Component } from 'react';
import './Todo.scss';
import Todo from './Todo';

// Receive list of Todos from App

class TodoList extends Component {
  render() {
    return (
      <div>
        Todo List:
        {this.props.todos.map((todo, index) => <Todo key={index} todo={todo} handleOnClick={this.props.handleTodoClick} />)}
      </div>
     );
  }
}
 
export default TodoList;
