import React from "react";
import PropTypes from "prop-types";

const Comments = props => {
  const { content, email } = props.comment;
  return (
    <div>
      <table className="table table-borderless">
        <thead>
          <tr>
            <th scope="col">{email}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{content}</td>
          </tr>
        </tbody>
      </table>
      <hr />
    </div>
  );
};

Comments.propTypes = {
  comment: PropTypes.object.isRequired
};

export default Comments;
