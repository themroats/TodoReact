import * as React from "react";
import Todo from './Todo';

class TodoList extends React.Component {
  render() {
    return <div>
      <ul>
        {this.props.todos.map((item) => <Todo task={item}/>)}
      </ul>
    </div>

  }
}

export default TodoList