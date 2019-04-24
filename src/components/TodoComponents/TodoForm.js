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
  }

  handleOnChange(event) {
    this.setState({
      ...this.state,
      value: event.target.value,
    })
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.handleOnSubmit();
  }

  render() { 
    return (
      <div>
        TodoForm: 
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleOnChange} />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}
 
export default TodoForm;
