import React from 'react';
import { withRouter } from 'react-router-dom';

import PostList from '../post-list';

const PostsPage = () => {
  return (
    <article className="posts-page">
      <PostList count={ 12 } hasImage={ true } pager={ true } />
    </article>
  );
};

export default withRouter(PostsPage);