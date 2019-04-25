import React, { Component } from 'react';
import './Todo.scss';
import TodoForm from './TodoForm';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.todo,
    }
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleAddSubTodo = this.handleAddSubTodo.bind(this);
    this.toggleChildForm = this.toggleChildForm.bind(this);
  }
  
  componentDidMount() {
    if (!this.props.child) {
      this.setState({
        ...this.state,
        adding: false,
      });
    }
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

  handleAddSubTodo(todo) {
    this.props.handleAddSubTodo(this.state, todo);
    this.setState({
      ...this.state,
      adding: false,
    })
  }

  toggleChildForm(e) {
    e.stopPropagation();
    this.setState({
      ...this.state,
      adding: !this.state.adding,
    });
  }

  render() {
    const completedClass = `completed-${this.state.completed}`;
    return (
      <div className={this.props.child ? 'child' : 'parent'}>
        <div onClick={this.handleOnClick} className={`Todo ${completedClass}`}>
          {this.state.task}
          { this.props.child
            ? null
            : (
                <span className="toggle-child-form" onClick={this.toggleChildForm}>
                  { this.state.adding ? String.fromCharCode(215) : '+' }
                </span>
              )
          }
        </div>
        { this.state.adding
          ? (
              <div className="childForm">
                <TodoForm handleAddTodo={this.handleAddSubTodo} />
              </div>
            )
          : null
        }
        { this.state.todos
          ? (
            this.state.todos.map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                child={this}
                handleOnClick={this.props.handleOnClick}
              />
            )).sort((a, b) => a.props.todo.completed ? 1 : -1)
          )
          : null
        }
      </div>
     );
  }
}
 
export default Todo;
