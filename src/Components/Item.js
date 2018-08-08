import React from "react";
import { DragSource } from "react-dnd";

const itemSource = {
  beginDrag(props) {
    return props.item;
  },
  endDrag(props, monitor) {
    return props.handleDrop(props.item.id);
  }
};

function collect(connect, monitor, component) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}

class Item extends React.Component {
  render() {
    const { connectDragSource } = this.props;
    return connectDragSource(
      <div className="Item">
        <span>{this.props.description}</span>
      </div>
    );
  }
}

export default DragSource("item", itemSource, collect)(Item);
