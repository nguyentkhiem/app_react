import React from "react";
import { Route } from "react-router-dom";

class Basic extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <React.Fragment>
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Basic>
        <Component {...props} />
      </Basic>
    )}
  />
);
