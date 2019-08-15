import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: []
  };

  //   styles = {
  //     fontSize: 15,
  //     fontWeight: "bold"
  //   };

  renderTags() {
    if (this.state.tags.length === 0) return <p> There are no tags </p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "Please create a new tag"}
        {this.renderTags()}
      </div>
    );
  }

  // getBadgeClasses() {
  //   let classes = "badge m-2 badge-";
  //   classes += this.state.count === 0 ? "warning" : "primary";
  //   return classes;
  // }

  // formatCount() {
  //   const { count } = this.state;
  //   return count === 0 ? "Zero" : count;
  // }
}

export default Counter;
