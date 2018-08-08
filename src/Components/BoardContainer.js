import React from "react";
import Board from "./Board";
import { Modal, Button, Input } from "antd";

class BoardContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      visible: false,
      nameToAdd: ""
    };
  }

  handleNewClick = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);

    this.props.addBoard(this.state.nameToAdd);
    this.setState({
      visible: false,
      nameToAdd: ""
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
      nameToAdd: ""
    });
  };

  text = name => {
    this.setState({
      nameToAdd: name
    });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleNewClick}>Add Board</Button>
        <Modal
          title="Add a Board"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Enter name for new Board</p>
          <Input
            placeholder="To-Do"
            onChange={e => this.text(e.target.value)}
          />
        </Modal>
        <div class="BoardContainer">
          {this.props.boards.map(b => (
            <Board name={b.name} onClick={() => this.props.handleClick(b.id)} />
          ))}
        </div>
      </div>
    );
  }
}

export default BoardContainer;
