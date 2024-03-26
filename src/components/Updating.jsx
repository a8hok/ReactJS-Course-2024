/* eslint-disable react/no-deprecated */
import React, { Component } from "react";

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

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps called");
    // Deprecated lifecycle method, replaced by getDerivedStateFromProps
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate called");
    // Determines if the component should re-render
    // Return true to allow re-rendering, false to prevent it
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate called");
    // Deprecated lifecycle method, replaced by getDerivedStateFromProps and shouldComponentUpdate
  }

  render() {
    console.log("render called");
    return (
      <div>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate called");
    // Captures information from the DOM before it potentially changes
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate called");
    // Invoked after the component's updates are flushed to the DOM
    // Ideal for interacting with the DOM or performing side effects
  }
}

export default ExampleComponent;
