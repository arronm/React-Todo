import React, { Component } from 'react';
import './Todo.scss';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
    }
  }
  render() { 
    return (
      <div>
        TodoForm
      </div>
    );
  }
}
 
export default TodoForm;
