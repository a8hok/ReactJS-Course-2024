import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    console.log("getDerivedStateFromError called");
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.log("componentDidCatch called");
    // You can also log the error to an error reporting service
    console.error("Error caught by componentDidCatch:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h1>Something went wrong!</h1>
          <p>Error: {this.state.error.message}</p>
        </div>
      );
    }

    return this.props.children; // Render children if there's no error
  }
}

export default ErrorBoundary;
