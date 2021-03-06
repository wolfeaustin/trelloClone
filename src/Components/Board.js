import React from "react";
import { Card } from "antd";

class Board extends React.Component {
  render() {
    return (
      <div className="Board" onClick={this.props.onClick}>
        <Card>{this.props.name}</Card>
      </div>
    );
  }
}

export default Board;
