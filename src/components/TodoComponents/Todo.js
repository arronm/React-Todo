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

  // I haven't looked into exactly what this does, but componentWillReceiveProps
  //   will be depreciated, this is the replacement
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      ...nextProps.todo,
    }
  }

  handleOnClick() {
    this.props.handleOnClick(this.state.id);
  }

  render() {
    const completedClass = `completed-${this.state.completed}`;
    return (
      <div onClick={this.handleOnClick} className={`Todo ${completedClass}`}>
        {this.state.task}
      </div>
     );
  }
}
 
export default Todo;
