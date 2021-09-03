import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  AboutPage,
  NotFoundPage,
  ArchivePage,
  ContactPage,
  HomePage,
  PostsPage,
  PostPage,
} from '../pages';

import './main.css';

const Main = () => {
  return (
    <main className="main">
      <Switch>
        <Route path="/" component={ HomePage } exact />
        <Route path="/posts" component={ PostsPage } exact />
        <Route path="/posts/:id?" render={({ match }) => {
          const { id } = match.params;
          return <PostPage id={ id }/>;
        }}/>
        <Route path="/archive" component={ ArchivePage } exact />
        <Route path="/about" component={ AboutPage } exact />
        <Route path="/contact" component={ ContactPage } exact />
        <Route component={ NotFoundPage } />
      </Switch>
    </main>
  );
};

export default Main;