import React, { Component } from "react";
import { Mutation } from "@apollo/react-components";
import gql from "graphql-tag";
import PropTypes from "prop-types";

const ADD_COMMENT = gql`
  mutation addComment($newsId: ID!, $email: String!, $content: String!) {
    createComment(
      input: { newsId: $newsId, email: $email, content: $content }
    ) {
      id
      email
      content
    }
  }
`;

const GET_COMMENTS = gql`
  query getcomments($id: ID!) {
    newsItem(id: $id) {
      id
      comments {
        id
        email
        content
      }
    }
  }
`;

class AddComment extends Component {
  state = {
    content: "",
    email: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { content, email } = this.state;
    const { idcode } = this.props;
    return (
      <>
        <Mutation
          mutation={ADD_COMMENT} //Mutation part
          update={(cache, { data: { createComment } }) => {
            //Updating cache part
            const cache_comments = cache.readQuery({
              query: GET_COMMENTS,
              variables: { id: idcode }
            });
            cache_comments.newsItem.comments.push(createComment);
            cache.writeQuery({
              query: GET_COMMENTS,
              data: cache_comments
            });
          }}
        >
          {(addComment, { data, error }) => (
            <div className="row">
              <div className="col-xs-6 col-md-7  ">
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    const { email } = this.state;
                    addComment({
                      variables: {
                        newsId: idcode,
                        content: content,
                        email: email
                      }
                    });
                    this.setState({
                      content: "",
                      email: ""
                    });
                  }}
                >
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={email}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="content">Comment</label>
                    <textarea
                      type="text"
                      className="form-control"
                      name="content"
                      rows="3"
                      value={content}
                      onChange={this.onChange}
                    ></textarea>
                  </div>

                  <input
                    type="submit"
                    value="Submit comment"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          )}
        </Mutation>
      </>
    );
  }
}

AddComment.propTypes = {
  idcode: PropTypes.string.isRequired
};

export default AddComment;
