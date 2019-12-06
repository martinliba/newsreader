import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import NewsListItem from "./NewsListItem";
import SpinLoader from "../layout/SpinLoader";
import Header from "../layout/Header";

const newsquery = gql`
  query {
    newsList(skip: 0, limit: 100) {
      rows {
        id
        title
        img
      }
    }
  }
`;

class NewsList extends Component {
  render() {
    return (
      <>
        <Header NavTitle="News" />
        <Query query={newsquery}>
          {({ loading, error, data }) => {
            if (loading) return <SpinLoader />;
            if (error) return `Error! ${error.message}`;
            return (
              <>
                <div className="container mb-5">
                  {data.newsList.rows.map(newsitem => (
                    <NewsListItem key={newsitem.id} newsitem={newsitem} />
                  ))}
                </div>
              </>
            );
          }}
        </Query>
      </>
    );
  }
}

export default NewsList;
