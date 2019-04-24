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

  handleOnClick() {
    // This function should toggle the todo completed state;
    // Can I pass this.state.id?
    this.props.handleOnClick(this.state.id);
  }

  render() { 
    return ( 
      <div>
        Todo
      </div>
     );
  }
}
 
export default Todo;
