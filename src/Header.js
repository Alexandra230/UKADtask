import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './UKAD_logo.svg';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <nav className="navbar display-flex">
            <Link className="logo">
              <img src={logo} alt="UKAD" />
            </Link>

            <ul className="navul display-flex">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
