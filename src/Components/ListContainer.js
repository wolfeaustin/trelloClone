import React from "react";
import List from "./List";
import { Modal, Button, Input } from "antd";

class ListContainer extends React.Component {
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
    this.props.addList(this.state.nameToAdd);
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
        <Modal
          title="Add a List"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Enter name for new the List</p>
          <Input
            placeholder="To-Do"
            onChange={e => this.text(e.target.value)}
          />
        </Modal>

        <Button onClick={this.props.handleBackToBoards}>Back To Boards</Button>
        <Button onClick={this.handleNewClick}>Add List</Button>
        <div class="ListContainer">
          {this.props.lists.map(e => (
            <List
              name={e.name}
              id={e.id}
              cards={this.props.cards.filter(c => c.list_id == e.id)}
              addCard={this.props.addCard}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ListContainer;
