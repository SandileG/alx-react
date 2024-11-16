import React, { Component } from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';

class App extends Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      displayDrawer: false,
    };
    // Bind the methods to the component instance
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  // Function to display the drawer
  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  // Function to hide the drawer
  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <Notifications
          displayDrawer={this.state.displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
        />
      </div>
    );
  }
}

export default App;
