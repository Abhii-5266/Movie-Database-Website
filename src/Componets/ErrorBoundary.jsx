import React from "react";
import Header from "./Header";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super();
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <img src="https://demofree.sirv.com/nope-not-here.jpg" alt="" />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
