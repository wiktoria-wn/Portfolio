import React from "react";
import { Menu, MenuItem, LinkItem } from "../styles/NavigationStyles";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <Menu>
        <Link style={LinkItem} to="/">
          <MenuItem>Home</MenuItem>
        </Link>
        <Link style={LinkItem} to="/about">
          <MenuItem>About</MenuItem>
        </Link>
        <Link style={LinkItem} to="/work">
          <MenuItem>Work</MenuItem>
        </Link>
        <Link style={LinkItem} to="contact">
          <MenuItem>Contact</MenuItem>
        </Link>
      </Menu>
    );
  }
}

export default Nav;
