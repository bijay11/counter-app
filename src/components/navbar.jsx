import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
            <span className={this.addClassName()}> {this.props.count}</span>
          </a>
        </div>
      </nav>
    );
  }

  addClassName() {
    let custClassName = "badge badge-pill badge-";
    let badgeName = this.props.count === 0 ? "danger" : "primary";
    custClassName += badgeName;
    return custClassName;
  }
}

export default Navbar;
