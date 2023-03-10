import React from "react";

class Test extends React.Component {
  state = {};

  handleClick() {
    this.setState({ a: 1 }, () => this.setState({ b: 1 }));
  }

  render() {
    console.log(this.state);
    return <button onClick={() => this.handleClick()}>Handle Click</button>;
  }
}

export default Test;
