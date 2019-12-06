import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = ({ NavTitle }) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-secondary sticky-top mb-3 py-0">
      <div className="container">
        <Link to="/" className="navbar-brand mx-auto">
          {NavTitle}
        </Link>
      </div>
    </nav>
  );
};

Header.propTypes = {
  NavTitle: PropTypes.string.isRequired
};

export default Header;
