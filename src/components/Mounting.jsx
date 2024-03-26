import { Component } from "react";

class ExampleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Constructor called");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps called");
    // Typically used to update state based on props
    return null;
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillMount() {
    console.log("componentWillMount called");
    // Deprecated and rarely used, avoid using it
  }

  componentDidMount() {
    console.log("componentDidMount called");
    // Invoked after the component is mounted to the DOM
    // Ideal for network requests or DOM manipulation
  }

  render() {
    console.log("render called");
    return (
      <div>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}

export default ExampleComponent;
