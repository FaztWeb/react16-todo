import React, { Component } from "react";

import TaskBanner from "./components/TaskBanner";
import TaskCreator from "./components/TaskCreator";
import TaskRow from "./components/TaskRow";
import CompletedSection from "./components/CompletedSection";

import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Fazt",
      tasks: [
        { name: "Buy Flowers", done: false },
        { name: "Make a Website", done: false },
        { name: "Buy Shoes", done: true },
        { name: "repair my computer", done: false }
      ],
      showCompleted: true
    };
  }

  updateTaskInputValue = e => {
    this.setState({ newTaskItem: e.target.value });
  };

  toggleTask = task =>
    this.setState({
      tasks: this.state.tasks.map(t =>
        t.name === task.name ? { ...t, done: !t.done } : t
      )
    });

  tableRows = doneValue =>
    this.state.tasks
      .filter(t => t.done === doneValue)
      .map(task => (
        <TaskRow key={task.name} task={task} callback={this.toggleTask} />
      ));

  createNewTask = task => {
    if (!this.state.tasks.find(t => t.name === task)) {
      this.setState(
        {
          tasks: [...this.state.tasks, { name: task, done: false }]
        },
        () => localStorage.setItem("tasks", JSON.stringify(this.state))
      );
    }
  };

  componentDidMount = () => {
    const data = localStorage.getItem("tasks");
    this.setState(
      data != null
        ? JSON.parse(data)
        : {
            username: "Fazt",
            tasks: [],
            showCompleted: true
          }
    );
  };

  render = () => (
    <div>
      <TaskBanner username={this.state.username} tasks={this.state.tasks} />
      <div className="container">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <TaskCreator callback={this.createNewTask} />

            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Done</th>
                </tr>
              </thead>
              <tbody>{this.tableRows(false)}</tbody>
            </table>

            <div className="bg-secondary text-white text-center p-2">
              <CompletedSection
                description="Completed Tasks"
                isChecked={this.state.showCompleted}
                callback={checked => this.setState({ showCompleted: checked })}
              />
            </div>

            {this.state.showCompleted && (
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Done</th>
                  </tr>
                </thead>
                <tbody>{this.tableRows(true)}</tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
