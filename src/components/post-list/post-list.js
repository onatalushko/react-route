import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PostListItem from '../post-list-item';
import BlogService from '../../services/blog-service';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './post-list.css';


export default class PostList extends Component {
  blogService = new BlogService();

  static propTypes = {
    count: PropTypes.number,
    title: PropTypes.string,
    hasImage: PropTypes.bool,
    pager: PropTypes.bool,
  }

  state = {
    postList: [],
    error: false,
    loading: true,
  }

  componentDidMount() {
    const { count, pager } = this.props;

    this.blogService
      .getAllPosts(count, pager)
      .then((postList) => {
        this.setState({
          postList,
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

  renderItems(arr) {
    const { hasImage } = this.props;

    return arr.map((item) => {
      return (
        <PostListItem item={ item } hasImage={ hasImage } key={ item.id } />
      );
    });
  }

  render() {
    const { postList, loading, error } = this.state;
    const { title, hasImage } = this.props;

    const hasData = !(loading || error);
    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? this.renderItems(postList) : null;

    const classes = hasImage ? 'posts posts--grid' : 'posts';
    const heading = title ? <h2 className="posts__title">{ title }</h2> : null;

    return (
      <div className={ classes }>
        { heading }
        { errorMessage }
        { spinner }
        { content }
      </div>
    );
  }
};

