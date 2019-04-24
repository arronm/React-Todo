import React, { Component } from 'react';
import './App.scss';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false,
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false,
        }
      ],
    }
    this.handlers = {
      handleClearCompleted: this.handleClearCompleted.bind(this),
      handleAddTodo: this.handleAddTodo.bind(this),
    }
  }

  handleTodoClick(todo) {
    // Toggle state of todo.completed
    console.log('handling todos');
  };

  handleClearCompleted() {
    // Filter this.state.todos and only keep ones that are completed: false
    console.log('Clearing all completed');
  }

  handleAddTodo(todo) {
    // Update our state with our new Todo data
    this.setState({
      todos: [...this.state.todos, todo],
    });
  }

  render() {
    return (
      <div>
        Todo App
        <TodoList {...this.state} handleTodoClick={this.handleTodoClick}  />
        <TodoForm {...this.handlers} />
      </div>
     );
  }
}

export default App;
