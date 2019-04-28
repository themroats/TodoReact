import * as React from "react";
import TodoList from "./TodoList";
import InputLine from "./InputLine";

let dummyData = [{ taskText: "Yeet skeet", completed: true }, { taskText: "Skeet yeet", completed: false }, { taskText: "Catch 'em all", completed: false }];

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todos: []};
    this.addTodo = this.addTodo.bind(this);
  }
  addTodo(task) {
    dummyData.push({taskText: task, completed: false});
    this.setState({todos: dummyData});
  }
  componentDidMount() {
    this.setState({todos: dummyData});
  }
  render() {
    return (
      <div>
        <InputLine onSubmit={this.addTodo}/>
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default TodoApp;