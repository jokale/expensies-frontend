import React from 'react'
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: '#D7E1F6',
  textDecoration: 'underline overline',
  textDecorationColor: 'white',
  color: 'black',
 
}

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <NavLink
          to="/"
          exact
          style={link}
          activeStyle={{
            background: '#375595'
          }}
        >Home</NavLink>
        <NavLink
          to="/about"
          exact
          style={link}
          activeStyle={{
            background: '#375595'
          }}
        >About</NavLink>
             <NavLink
          to="/expenses"
          exact
          style={link}
          activeStyle={{
            background: '#375595'
          }}
        >Expenses</NavLink>

        <NavLink
          to="/expense/new"
          exact
          style={link}
          activeStyle={{
            background: '#375595'
          }}
        >New expense</NavLink>
     
      </div>
    )
  }
}

export default Navbar;