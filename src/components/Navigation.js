import React, { Component } from 'react';
import './Navigation.scss';
import { Link } from "react-router-dom";

class Navigation extends Component {

  _getLinkClassName = (link) => {
    const path = this.props.match.params.id || "";
    return (path.startsWith(link) && link !== "") || path === link ? "active" : "";
  };

  render() {

    const links = [
      { path: "", name: "Home" },
      { path: "about", name: "About" },
      { path: "design", name: "Design" },
      { path: "illustration", name: "Illustration" },
      { path: "experiments", name: "Experiments" },
      { path: "teaching", name: "Teaching" }
    ];

    return (

      <nav className="navigation col-2">
        {links.map((link) => {
          return <Link className={this._getLinkClassName(link.path)} to={`/${link.path}`}>{link.name}</Link>
          })
        }
      </nav>
    );
  }
}

export default Navigation
