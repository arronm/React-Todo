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
  }

  handleTodoClick(todo) {
    // Toggle state of todo.completed
  };

  handleClearCompleted() {
    // Filter this.state.todos and only keep ones that are completed: false
  }

  handleAddTodo(todo) {
    // Update our state with our new Todo data
  }

  render() {
    return (
      <div>
        Todo App
        <TodoList {...this.state} />
        <TodoForm />
      </div>
     );
  }
}

export default App;
