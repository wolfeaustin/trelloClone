import React from "react";
import BoardContainer from "./BoardContainer";
import ListContainer from "./ListContainer";
import { Modal } from "antd";

class Trello extends React.Component {
  constructor() {
    super();

    this.state = {
      boards: [{ name: "Board 1", id: 1 }, { name: "Board 2", id: 2 }],
      lists: [
        { name: "List 1", id: 1, board_id: 1 },
        { name: "List 2", id: 2, board_id: 2 }
      ],
      cards: [
        { name: "Item 1", id: 1, list_id: 1 },
        { name: "Item 2", id: 2, list_id: 2 }
      ],
      active_board: -1
    };
  }

  handleBoardSelection = id => {
    this.setState({
      active_board: id
    });
  };

  handleBackToBoards = () => {
    this.setState({
      active_board: -1
    });
  };

  addBoard = name => {
    this.setState({
      boards: [
        ...this.state.boards,
        {
          name: name,
          id: this.state.boards[this.state.boards.length - 1].id + 1
        }
      ]
    });
  };
  addList = name => {
    this.setState({
      lists: [
        ...this.state.lists,
        {
          name: name,
          id: this.state.lists[this.state.lists.length - 1].id + 1,
          board_id: this.state.active_board
        }
      ]
    });
  };
  addCard = (name, list_id) => {
    this.setState({
      cards: [
        ...this.state.cards,
        {
          name: name,
          id: this.state.cards[this.state.cards.length - 1].id + 1,
          list_id: list_id
        }
      ]
    });
  };

  handleItemDrop = (itemId, newListId) => {
    let items = this.state.cards.map(
      e => (e.id == itemId ? { name: e.name, id: e.id, list_id: newListId } : e)
    );
    this.setState({
      cards: items
    });
  };

  render() {
    return (
      <div>
        {this.state.active_board == -1 ? (
          <BoardContainer
            addBoard={this.addBoard}
            boards={this.state.boards}
            handleClick={this.handleBoardSelection}
          />
        ) : (
          <ListContainer
            handleBackToBoards={this.handleBackToBoards}
            handleItemDrop={this.handleItemDrop}
            addList={this.addList}
            lists={this.state.lists.filter(
              e => e.board_id == this.state.active_board
            )}
            addCard={this.addCard}
            cards={this.state.cards}
          />
        )}
      </div>
    );
  }
}

export default Trello;
