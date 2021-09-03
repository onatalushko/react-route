import React from 'react';
import { withRouter } from 'react-router-dom';

import PostList from '../post-list';

const HomePage = () => {
  return (
    <article className="home-page">
      <PostList count={ 6 } hasImage={ true } />
    </article>
  );
};

export default withRouter(HomePage);