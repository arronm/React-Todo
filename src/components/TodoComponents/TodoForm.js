import React, { Component } from 'react';
import './Todo.scss';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleClearCompleted = this.handleClearCompleted.bind(this);

    this.handleBlur = this.handleBlur.bind(this);
  }

  componentDidMount() {
    this.nameInput.focus();
    
    // Check if this form has a handle blur function, meaning it's a child form
    if (this.props.handleBlur) {
      document.addEventListener('mousedown', this.handleBlur, false);
    }
  }

  componentWillUnmount() {
    if (this.props.handleBlur) {
      document.removeEventListener('mousedown', this.handleBlur, false);
    }
  }

  handleBlur(event) {
    if (!event.path[2].matches('.TodoForm')) {
      this.props.handleBlur();
    }
  }

  handleOnChange(event) {
    this.setState({
      ...this.state,
      value: event.target.value,
    })
  }

  handleOnSubmit(event) {
    event.preventDefault();
    if (this.state.value === '') return;

    const todo = {
      task: this.state.value,
      id: Date.now(),
      completed: false,
    }
    
    this.props.handleAddTodo(todo);
    
    this.setState(state => {
      return {
        ...state,
        value: '',
      };
    });
  }

  handleClearCompleted(event) {
    this.props.handleClearCompleted(event);
    event.preventDefault();
  }

  render() {
    return (
      <div className="TodoForm">
        <form onSubmit={this.handleOnSubmit}>
          <input
            ref={(input) => { this.nameInput = input; }}
            className="todo-input"
            type="text"
            value={this.state.value}
            onChange={this.handleOnChange}
            placeholder="What needs to be done?"
          />
          <input className="todo-submit" type="submit" value="Add" />
        </form>
        {
          this.props.completed &&
          <input className="clear-todos" type="button" value="Clear Completed" onClick={this.handleClearCompleted} />
        }
      </div>
    );
  }
}
 
export default TodoForm;
