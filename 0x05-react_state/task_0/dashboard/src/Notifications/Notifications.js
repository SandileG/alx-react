import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Notifications extends Component {
  // Define propTypes
  static propTypes = {
    displayDrawer: PropTypes.bool,
    handleDisplayDrawer: PropTypes.func.isRequired,
    handleHideDrawer: PropTypes.func.isRequired,
  };

  // Set defaultProps
  static defaultProps = {
    displayDrawer: false,
  };

  render() {
    const { displayDrawer, handleDisplayDrawer, handleHideDrawer } = this.props;
    return (
      <div>
        <p>Your notifications</p>
        <button onClick={handleDisplayDrawer}>Menu</button>
        {displayDrawer && (
          <div className="notificationsDrawer">
            <button onClick={handleHideDrawer}>Close</button>
            <p>Here are your notifications</p>
          </div>
        )}
      </div>
    );
  }
}

export default Notifications;
