import React, { Component } from "react";

export default class TodoBanner extends Component {
  render = () => (
    <h4 className="bg-dark text-white text-center p-4">
      {this.props.username}'s Todo App (
      {this.props.tasks.filter(t => !t.done).length} Tasks to do)
    </h4>
  );
}
