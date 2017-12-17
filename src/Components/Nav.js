import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <ul className='nav'>
      <li>
        <NavLink exact activeClassName='active' to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName='active' to='/Search'>
          Search
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName='active' to='/Mine'>
          Mine
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName='active' to='/Count'>
          Counter
        </NavLink>
      </li>
      </ul>
    );
  };

  export default Nav;