import * as React from "react";
import TodoList from "./TodoList";
import InputLine from "./InputLine";
import axios from 'axios';
import $ from 'jquery'
import assert from 'assert';
const apiUrl = "http://localhost:3001/todos";

// let dummyData = [{ taskText: "Yeet skeet", completed: true }, { taskText: "Skeet yeet", completed: false }, { taskText: "Catch 'em all", completed: false }];

class TodoApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {todos: []};
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }

  addTodo(task) {
    const newTask = {taskText: task, completed: false};
    axios.post("http://localhost:3001/todos/add", newTask)
      .then((response) => {
        this.setState({ todos: this.state.todos.concat(response.data)});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  removeTodo(id) {
    axios.post(apiUrl + '/remove', id).then((response) => {
      console.log(response);
      this.setState({ todos: this.state.todos.concat(response.data)});
    }).catch((e) => {
      console.log(e);
    });
  }

  toggleTodo(id) {
    axios.post(apiUrl + '/toggle', {"id": id}).then(() => {
      this.setState((state) => {
        $.each(state.todos, function() {
          if (this._id === id) {
            this.completed = !this.completed;
          }
        });
      });
      this.forceUpdate();
    }).catch((e) => {
      console.log(e);
    });
  }

  componentDidMount() {
    axios.get(apiUrl + '/all').then((response) => {
      this.setState({todos: response.data});
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <InputLine onSubmit={this.addTodo}/>
        <TodoList todoToggleClick={this.toggleTodo} todoXClick={this.removeTodo} todos={this.state.todos}/>
      </div>
    );
  }
}

export default TodoApp;