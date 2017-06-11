import React, { Component } from 'react';

import EmployeeBody from './EmployeeBody';

class EmployeeList extends Component {
  render() {
    return (
      <ul className="media-list">
        {
          this.props.listado.map((employees) => {
            return <EmployeeBody key={ employees.id }
                                name={ employees.fullName }
                                picture={ employees.pic }
                                title={ employees.title }
                                department={ employees.department } />
          })
        }
      </ul>
    )
  }
}

export default EmployeeList;
