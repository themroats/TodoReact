import * as React from "react";
import Todo from './Todo';
let dummyData = ['laundry', 'homework', 'dusting'];

class TodoList extends React.Component {
  render() {
    return <div>
      <ul>
        {dummyData.map((item) => <Todo task={item}/>)}
      </ul>
    </div>

  }
}

export default TodoList