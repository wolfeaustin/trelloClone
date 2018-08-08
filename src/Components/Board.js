import React from "react";
import { Card } from "antd";

class Board extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div class="Board" onClick={this.props.onClick}>
        <Card>{this.props.name}</Card>
      </div>
    );
  }
}

export default Board;
