import * as React from "react";

class Todo extends React.Component {

  render() {
    return (
    <li>
      <button onClick={this.props.xClick}>X</button>
      <button onClick={this.props.toggleClick}>Toggle</button>

      <span style={{
        textDecoration: this.props.task.completed ? 'line-through' : 'none'
      }}>{this.props.task.taskText}</span>

    </li>
        );
  }

}
export default Todo