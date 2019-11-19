import React, { Component } from "react";

export default class TodoRows extends Component {
  render() {
    return (
      <tr key={this.props.task.name}>
        <td>{this.props.task.name}</td>
        <td>
          <input
            type="checkbox"
            checked={this.props.task.done}
            onChange={() => this.props.callback(this.props.task)}
          />
        </td>
      </tr>
    );
  }
}
