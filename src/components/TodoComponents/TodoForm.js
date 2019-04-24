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
  }

  handleOnChange(event) {
    this.setState({
      ...this.state,
      value: event.target.value,
    })
  }

  handleOnSubmit(event) {
    const todo = {
      task: this.state.value,
      id: Date.now(),
      completed: false,
    }
    this.props.handleAddTodo(todo);
    this.setState({
      ...this.state,
      value: '',
    })
    event.preventDefault();
  }

  handleClearCompleted(event) {
    this.props.handleClearCompleted(event);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        TodoForm: 
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleOnChange} />
          <input type="submit" value="submit" />
          <input type="button" value="clear" onClick={this.handleClearCompleted} />
        </form>
      </div>
    );
  }
}
 
export default TodoForm;
