import React from "react";
import { DragSource } from "react-dnd";

const Item = props => {
  return <div className="Item">{props.description}</div>;
};

// export default DragSource('item', spec, collect)(Item);
export default Item;
