import React, { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {
  render() {
    const { name, count, incrementCount } = this.props;
    return (
      <button onClick={incrementCount}>
        {name} Clicked {count} times
      </button>
    );
  }
}

export default withCounter(ClickCounter, 2);
