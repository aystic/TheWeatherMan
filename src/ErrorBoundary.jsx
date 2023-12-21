import React from "react";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            width: "100vw",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="../public/emergency.svg"
            style={{
              height: "100px",
            }}
          ></img>
          <h1
            style={{
              color: "red",
            }}
          >
            Something went wrong!
          </h1>
        </div>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
