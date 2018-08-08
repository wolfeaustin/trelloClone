import React from "react";
import { Card, Button, Input, Modal } from "antd";

import Item from "./Item";

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
    console.log(e);

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

  render() {
    return (
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
          {this.props.cards.map(c => <Item description={c.name} />)}
        </Card>
        <Button onClick={this.handleNewClick}>Add Item</Button>
      </div>
    );
  }
}

export default List;
