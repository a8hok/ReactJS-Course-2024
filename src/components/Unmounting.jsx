import { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.timerID = null;
  }

  componentDidMount() {
    console.log("componentdidmount called");
    // Start the timer when the component mounts
    this.timerID = setInterval(() => {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    // Clear the timer when the component is about to unmount
    console.log("componentWillUnmount called");
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h2>Timer: {this.state.count} seconds</h2>
      </div>
    );
  }
}

export default Timer;
