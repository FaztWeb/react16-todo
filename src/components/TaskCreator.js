import React, { Component } from "react";

export default class TodoCreator extends Component {
  state = {
    newItem: ""
  };

  updateNewTaskValue = e => {
      this.setState({newItem: e.target.value });
  }

  createNewTask = () => {
      this.props.callback(this.state.newItem);
      this.setState({newItem: ''});
  }

  render() {
    return (
      <div className="my-3">
        <input
          type="text"
          className="form-control"
          value={this.state.newItem}
          onChange={this.updateNewTaskValue}
          placeholder="Write your New Task"
          autoFocus
        />
        <button className="btn btn-primary btn-block mt-1" onClick={this.createNewTask}>
          Add
        </button>
      </div>
    );
  }
}