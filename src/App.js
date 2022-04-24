import React, { Component } from "react";
import Home from "./Home";

class App extends Component {
  state = { count: 0, show: true };
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.state.count > 0 && this.setState({ count: this.state.count - 1 });
  };
  componentDidMount() {
    alert("mounting");
  }
  componentDidUpdate(){
    alert('this component is updated');
  }
 
  handleShow = () => {
    this.state.show
      ? this.setState({ show: false })
      : this.setState({ show: true });
  };
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div>
          <button onClick={this.increment}>+</button>
        </div>
        <h1> {this.state.count}</h1>
        <div>
          <button onClick={this.decrement}>-</button>
        </div>
        <button onClick={this.handleShow}>show</button>
        {this.state.show && <Home />}
      </div>
    );
  }
}

export default App;
