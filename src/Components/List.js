import React from "react";
import { Card, Button, Input, Modal } from "antd";
import { DropTarget } from "react-dnd";
import Item from "./Item";

const dropItem = {
  drop(props, monitor, component) {
    component.props.itemDrop(monitor.getItem().id, props.id);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class List extends React.Component {
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
    this.props.addCard(this.state.nameToAdd, this.props.id);
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

  moveItem = id => {};

  render() {
    const { connectDropTarget, isOver } = this.props;
    return connectDropTarget(
      <div class="List">
        <Modal
          title="Add an Item to the List"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Enter name for new the Item</p>
          <Input
            placeholder="To-Do"
            onChange={e => this.text(e.target.value)}
          />
        </Modal>
        <Card title={this.props.name}>
          {this.props.cards.map(c => (
            <Item
              handleDrop={id => this.moveItem(id)}
              item={c}
              description={c.name}
            />
          ))}
        </Card>
        <Button onClick={this.handleNewClick}>Add Item</Button>
      </div>
    );
  }
}

export default DropTarget("item", dropItem, collect)(List);
