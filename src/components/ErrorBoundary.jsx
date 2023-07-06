import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(
      "Greška uhvaćena od strane ErrorBoundary komponente:",
      error,
      errorInfo
    );
  }

  render() {
    if (this.state.hasError) {
      return <h1>Došlo je do greške.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
