import * as React from "react";

class Todo extends React.Component {

  render() {
    return <li><button>X</button> {this.props.task}</li>
  }

}
export default Todo