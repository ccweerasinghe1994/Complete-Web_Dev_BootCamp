import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
    });
  }
  render() {
    return (
      <div>
        {this.state.hasError ? (
          <h1>Oooooopps thats not good</h1>
        ) : (
          this.props.children
        )}
      </div>
    );
  }
}
