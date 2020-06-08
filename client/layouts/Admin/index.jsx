import React from "react";
import { Route } from "react-router-dom";
import Header from './Header';
import Sidebar from './Sidebar';
import { FaHome } from 'react-icons/fa';
import { FaLine } from 'react-icons/fa';
import { MdSettings } from 'react-icons/md';
import { MdUsb } from 'react-icons/md';
import { FaKickstarterK } from 'react-icons/fa';
import { FaSortDown } from 'react-icons/fa';
import { FaHeading } from 'react-icons/fa';
import './styles.scss';

const categories = [
    {
      icon: <FaHome/>,
      id: 'dashboard',
      path: '/dashboard',
    },
    {
      icon: <MdSettings/>,
      id: 'simple_order_system',
      path: '/simple-order-system',
    },
  ];

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  renderContent = () => {
    const activePath = this.props.match.path;
    const { isOpen } = this.state;
    const { children } = this.props;

    return (
      <div id="wrapper">
        <Sidebar active={isOpen} categories={categories} activePath={activePath}></Sidebar>
        <div id="rightsidebar">
            <Header toggle={this.toggle}></Header>
            <div id="content">
                {children}
            </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      this.renderContent()
    );
  }
}

export default ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Dashboard {...props}>
        <Component {...props} />
      </Dashboard>
    )}
  />
);
