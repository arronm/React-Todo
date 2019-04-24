import React, { Component } from 'react';
import './Todo.scss';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.todo,
    }
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(event) {
    this.props.handleOnClick(event);
  }

  render() {
    return (
      <div onClick={this.handleOnClick}>
        {this.state.task}
      </div>
     );
  }
}
 
export default Todo;
