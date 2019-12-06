import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ApolloProvider } from "react-apollo";
import NewsList from "./components/news/NewsList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewsDetail from "./components/news/NewsDetail";
import NotFound from "./components/pages/NotFound";
import client from "./apollo/ApolloClient";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/" component={NewsList} />
          <Route exact path="/NewsDetail/:id" component={NewsDetail} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
