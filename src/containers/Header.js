//React imports
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


class Header extends Component {
  render() {
    return (
      <div>
        <NavLink activeClassName="active" to="/articlefeed">
          <h1>N(y)o͞oz</h1>
        </NavLink>
        <NavLink activeClassName="active" to="/articleform">
          <button>New Article</button>
        </NavLink>
      </div>
    )
  }
}
