import * as React from "react";
import TodoList from "./TodoList";
import InputLine from "./InputLine";

class TodoApp extends React.Component {
  render() {
    return (
      <div>
        <InputLine/>
        <TodoList/>
      </div>
    );
  }
}

export default TodoApp;