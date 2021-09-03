import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import BlogService from '../../services/blog-service';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';

import './post-page.css';


class PostPage extends Component {
  blogService = new BlogService();

  state = {
    post: {
      title: null,
      body: null,
      image: null,
    },
    error: false,
    loading: true,
  }

  componentDidMount() {
    this.blogService.getPost(this.props.id).then((data) => {
      const { title, body } = data;

      this.setState({
        post: {
          title,
          body,
        },
        loading: false,
      });
    })
    .catch(this.onError);
  }

  onError = (err) => {
    this.setState({
      error: true,
      loading: false,
    });
  }

  render() {
    const { post: { title, body }, error, loading } = this.state;

    const hasData = !(loading || error);
    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;

    const content = (
      <div className="post-page__content">
        <div className="post-page__image">
          {/* TODO: add real image from API */}
          <img src="https://placeimg.com/1200/400/nature" alt={ title }/>
        </div>

        <h1 className="post-page__title">{ title }</h1>
        <div className="post-page__body">{ body }</div>
      </div>
    );

    return (
      <article className="post-page">
        { errorMessage }
        { spinner }
        { hasData ? content : null}
      </article>
    );
  }
};

export default withRouter(PostPage);