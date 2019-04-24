import React, { Component } from 'react';
import './Todo.scss';
import Todo from './Todo';

// Receive list of Todos from App

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.todos);
    return (
      <div>
        Todo List:
        {this.props.todos.map(todo => <Todo key={todo.id} />)}
      </div>
     );
  }
}
 
export default TodoList;
