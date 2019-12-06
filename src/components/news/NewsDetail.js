import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import SpinLoader from "../layout/SpinLoader";
import Comments from "./Comments";
import AddComment from "./AddComment";
import HeaderDetail from "../layout/HeaderDetail";
import NotFound from "../pages/NotFound";

const newsdetailquery = gql`
  query newsquery($id: ID!) {
    newsItem(id: $id) {
      title
      content
      img
      url
      id
      comments {
        id
        email
        content
      }
    }
  }
`;

class NewsDetail extends Component {
  state = {
    showComments: false
  };

  render() {
    let { id } = this.props.match.params;
    const { showComments } = this.state;
    const { history } = this.props;
    return (
      <>
        <Query query={newsdetailquery} variables={{ id }}>
          {({ loading, error, data }) => {
            if (loading) return <SpinLoader />;
            if (error) return `Error! ${error.message}`;
            if (data.newsItem != null) {
              const { title, content, img, url, comments } = data.newsItem;
              const ide = data.newsItem.id;
              return (
                <div>
                  <HeaderDetail NavTitle="News" hist={history} url={url} />
                  <div className="container ">
                    <div className="row ">
                      <div className=" col-md-8 offset-md-2 ">
                        <div className="card border-0">
                          <div className="card-body">
                            <h4 className="card-title">{title}</h4>
                            <img
                              src={img}
                              className="card-img-top"
                              alt="No Picture"
                            />
                            <p>{content}</p>
                            <button
                              type="button"
                              className="btn btn-secondary "
                              onClick={() =>
                                this.setState({
                                  showComments: !this.state.showComments
                                })
                              }
                            >
                              Comments ({comments.length})
                            </button>
                            {showComments ? (
                              <div>
                                <AddComment idcode={ide} />
                                {comments.map(comment => (
                                  <Comments
                                    key={comment.id}
                                    comment={comment}
                                  />
                                ))}
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            return <NotFound />;
          }}
        </Query>
      </>
    );
  }
}

export default NewsDetail;
