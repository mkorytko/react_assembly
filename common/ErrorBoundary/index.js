import React from "react";
import * as PropTypes from "prop-types";
import ErrorMSG from "./errorMSG";

class ErrorBoundary extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      errorInfo: {
        errorTitle: error.message,
        msg: errorInfo.componentStack,
      },
    });
  }

  render() {
    if (this.state.errorInfo) {
      return <ErrorMSG {...this.state.errorInfo} />;
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
