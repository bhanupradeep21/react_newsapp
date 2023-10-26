import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="/">Daily News</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li>
      <li className="nav-item active"><Link className="nav-link" to="/about">About</Link></li>
      <li className="nav-item active"><Link className="nav-link" to="/business">Business</Link></li>
      <li className="nav-item active"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
      <li className="nav-item active"><Link className="nav-link" to="/general">General</Link></li>
      <li className="nav-item active"><Link className="nav-link" to="/health">Health</Link></li>
      <li className="nav-item active"><Link className="nav-link" to="/science">Science</Link></li>
      <li className="nav-item active"><Link className="nav-link" to="/sports">sports</Link></li>
      <li className="nav-item active"><Link className="nav-link" to="/technology">technology</Link></li>

    </ul>
  </div>
</nav>
      </div>
    )
  }
}
