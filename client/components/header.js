import React, { Component } from 'react';

export class Header extends Component {
  render() {
    return (
      <nav className='nav navbar-default'>
        <div className='navbar-header'>
          <a href='/' className='navbar-brand'>
            WorkSpace
          </a>
        </div>
        <ul className='nav navbar-nav'>
          <li>
            <a href=''>Sign Up</a>
          </li>
          <li>
            <a href=''>Create Bin</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
