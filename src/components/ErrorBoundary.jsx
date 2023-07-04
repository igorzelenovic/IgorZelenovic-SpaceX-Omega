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
    // Možete logovati grešku ili je poslati servisu za praćenje grešaka
    console.error("Greška uhvaćena od strane ErrorBoundary komponente:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Prikaz fallback UI-a kada se desi greška
      return <h1>Došlo je do greške.</h1>;
    }

    // Prikaz dece ako nije bilo greške
    return this.props.children;
  }
}

export default ErrorBoundary;
