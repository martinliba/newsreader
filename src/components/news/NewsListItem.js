import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NewsListItem = props => {
  const { id, title, img } = props.newsitem;
  return (
    <div className="row mb-4">
      <div className=" col-md-8 offset-md-2 ">
        <Link
          to={`/NewsDetail/${id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="col">
            <img src={img} alt="No Picture" className="img-fluid" />
          </div>
          <div className="col">
            <h3>{title}</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

NewsListItem.propTypes = {
  newsitem: PropTypes.object.isRequired
};

export default NewsListItem;
