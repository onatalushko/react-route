import React from 'react';
import { Link } from 'react-router-dom';

import './post-list-item.css';

const renderImage = (url, title) => {
  return (
    <div className="post__image">
      <a href={ url }>
        <img src="https://placeimg.com/400/200/nature" alt={ title } />
      </a>
    </div>
  );
};

const PostListItem = (props) => {
  const { item: { id, title }, hasImage } = props;

  const url = `/posts/${ id }`;

  const modifier = hasImage ? 'image' : 'simple';
  const classes = `post post--${modifier}`;

  const image = hasImage ? renderImage(url, title) : null;

  return (
    <article className={ classes }>
      { image }
      <h3 className="post__title">
        <Link to={ url }>{ title }</Link>
      </h3>
    </article>
  );
};

export default PostListItem;