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
    this.handleTodoClick = this.handleTodoClick.bind(this);
    this.handlers = {
      handleClearCompleted: this.handleClearCompleted.bind(this),
      handleAddTodo: this.handleAddTodo.bind(this),
    };
  }

  handleTodoClick(todoId) {
    // Toggle state of todo.completed
    this.setState(state => {
      const todos = state.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }

        return todo;
      });
      return {
        ...state,
        todos: todos,
      };
    });
  };

  handleClearCompleted() {
    // Filter this.state.todos and only keep ones that are completed: false
    this.setState(state => {
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed),
      }
    });
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
