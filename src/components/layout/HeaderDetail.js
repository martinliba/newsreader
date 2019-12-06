import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HeaderDetail = ({ NavTitle, hist, url }) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-secondary sticky-top mb-3 py-0">
      <div className="container">
        <div className="navbar-nav">
          <ul className="navbar-nav ">
            <li className="nav-item ">
              <div onClick={() => hist.goBack()} className="pointerBack">
                <i className="fas fa-angle-left nav-link" />
              </div>
            </li>
          </ul>
        </div>
        <Link to="/" className="navbar-brand mx-auto pr-2">
          {NavTitle}
        </Link>
        <div className="navbar-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href={url} className="nav-link ">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

HeaderDetail.propTypes = {
  NavTitle: PropTypes.string.isRequired
};

export default HeaderDetail;
