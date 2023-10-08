import React from "react";
import AddTask from "./AddTask/AddTask";
import Task from "./Task/Task";
import DeleteTask from "./DeleteTask/DeleteTask";

class ToDo extends React.Component {
  state = {
    tasks: [{ name: "Task1" }, { name: "Task2" }, { name: "Task3" }],
    inputValue: "",
  };

  onChange = (e) => {
    const value = e.target.value;
    this.setState({
      inputValue: value,
    });
  };

  onChange2 = (e) => {
    const value = e.target.value;
    this.setState({
      inputValue2: value,
    });
  };

  submit = () => {
    const tasks = this.state.tasks;
    tasks.push({ name: this.state.inputValue });
    // this.state.tasks = tasks;  sxal tarberak
    this.setState({
      tasks,
    });
  };

  delete = () => {
    const tasks = this.state.tasks;
    tasks.map((item) => {
      if (item.name === this.state.inputValue2 || item.name === "") {
        delete tasks[tasks.indexOf(item)];
        this.setState({
          tasks,
        });
      }
    });
  };

  render() {
    console.log(this.state.inputValue);
    return (
      <div>
        <h1>ToDo</h1>
        <AddTask onChange={this.onChange} submit={this.submit} />
        <DeleteTask onChange={this.onChange2} delete={this.delete} />
        <div>
          {this.state.tasks.map((item, index) => {
            return <Task name={item.name} />;
          })}
        </div>
      </div>
    );
  }
}

export default ToDo;
