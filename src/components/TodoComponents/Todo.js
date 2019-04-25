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

  handleOnClick(e) {
    const child = this.props.child || false;
    this.props.handleOnClick(this.state.id, child);
  }

  render() {
    const completedClass = `completed-${this.state.completed}`;
    return (
      <div className={this.props.child ? 'child' : 'parent'}>
        <div onClick={this.handleOnClick} className={`Todo ${completedClass}`}>
          {this.state.task}
        </div>
        { this.state.todos
          ? (
            this.state.todos.map((todo, index) => (
              <Todo
                key={index}
                todo={todo}
                child={this}
                handleOnClick={this.props.handleOnClick}
              />
            ))
          )
          : null
        }
      </div>
     );
  }
}
 
export default Todo;
