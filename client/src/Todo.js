import * as React from "react";

class Todo extends React.Component {


  render() {
    return (
    <li>
      <button onClick={() => this.props.xClick(this.props.task._id)}>X</button>
      <button onClick={() => this.props.toggleClick(this.props.task._id)}>Toggle</button>

      <span style={{
        textDecoration: this.props.task.completed ? 'line-through' : 'none'
      }}>{this.props.task.task}</span>

    </li>
        );
  }

}
export default Todo;