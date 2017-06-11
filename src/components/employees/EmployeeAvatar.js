import React, { Component } from 'react';

// Create component avatar to employee and class for render
class EmployeeAvatar extends Component {
  render() {
      return (
        <figure className="media-left">
          <img className="media-object" width="64px" src={`folder/${this.props.picture}`} />
        </figure>
      )
  }
}

export default EmployeeAvatar;
