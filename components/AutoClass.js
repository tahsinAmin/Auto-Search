import React from "react";

export default class AutoClass extends React.Component {
  state = {
    todo: "",
    todoArr: [],
  };
  render() {
    const addItem = () => {
      const list = [...this.state.todoArr, this.state.todo];
      this.setState({ todoArr: list, todo: "" });
    };
    return (
      <div>
        <input
          type="text"
          value={this.state.todo}
          onChange={(e) => this.setState({ todo: e.target.value })}
          placeholder="Todo..."
          className="border-2 border-gray-600 p-2 rounded-md"
        />
        <button onClick={addItem}>Add Item</button>
        {this.state.todoArr.map((todo, i) => {
          return <p key={i}>{todo}</p>;
        })}
      </div>
    );
  }
}
