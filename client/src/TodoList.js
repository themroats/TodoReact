import * as React from "react";
import Todo from './Todo';

class TodoList extends React.Component {
  render() {
    return <div>
      <ul>
        {this.props.todos.map((item, index) => <Todo key={item._id} toggleClick={this.props.todoToggleClick} xClick={this.props.todoXClick} task={item}/>)}
      </ul>
    </div>

  }
}

export default TodoList