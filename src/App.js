import React, { Component } from 'react';
import './App.scss';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import TodosDatabase from './helpers/TodosDatabase';

class App extends Component {
  constructor(props) {
    super(props);

    this.todos = new TodosDatabase();

    this.state = {
      todos: this.todos.database,
      completed: this.checkCompleted(this.todos.database),
    }

    this.handleTodoClick = this.handleTodoClick.bind(this);
    this.handlers = {
      handleClearCompleted: this.handleClearCompleted.bind(this),
      handleAddTodo: this.handleAddTodo.bind(this),
    };
  }

  handleTodoClick(todoId) {
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

      this.todos.update(todos);

      return {
        ...state,
        todos: todos,
        completed: this.checkCompleted(todos),
      };

    });
  };

  checkCompleted(todos) {
    return todos.filter(todo => todo.completed).length > 0;
  }

  handleClearCompleted() {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => !todo.completed),
      completed: false,
    });


    this.todos.update(this.state.todos.filter(todo => !todo.completed))
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo],
    });

    this.todos.add(todo);
  }

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <TodoForm {...this.handlers} completed={this.state.completed} />
        <TodoList {...this.state} handleTodoClick={this.handleTodoClick}  />
      </div>
     );
  }
}

export default App;
