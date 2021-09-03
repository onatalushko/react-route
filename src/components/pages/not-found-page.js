import React from 'react';
import { withRouter } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <article className="page-404">
      <h1>404</h1>
      <h2>Page Not Found</h2>
    </article>
  );
};

export default withRouter(NotFoundPage);