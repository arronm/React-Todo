import React, { PureComponent } from 'react';
import './Todo.scss';
import Todo from './Todo';

// Receive list of Todos from App

class TodoList extends PureComponent {
  render() {
    return (
      <div className="TodoList">
        {
          this.props.todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              child={false}
              handleOnClick={this.props.handleTodoClick}
              handleAddSubTodo={this.props.handleAddSubTodo}
            />
          )).sort((a, b) => a.props.todo.completed ? 1 : -1)
        }
      </div>
     );
  }
}
 
export default TodoList;
