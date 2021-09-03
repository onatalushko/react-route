/**
 * Uses https://jsonplaceholder.typicode.com/ fake API server.
 * @see https://github.com/typicode/json-server
 *
 * TODO: replace this with real API.
*/

export default class BlogService {
  _apiBase = 'https://jsonplaceholder.typicode.com';
  _image = 'https://placeimg.com/400/400/nature';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }

    return await res.json();
  };

  getAllPosts = async (count, pager = false) => {
    // TODO: implement pager functionality.
    const query = count ? `?_start=0&_end=${count}` : '';
    const res = await this.getResource(`/posts${query}`);

    return res.map(this._transformPost);
  }

  getPost = async (id) => {
    const post = await this.getResource(`/posts/${id}`);
    return this._transformPost(post);
  }

  getPostComments = async (id) => {
    const res = await this.getResource(`/post/${id}/comments`);
    return res.map(this._transformComment);
  }

  _transformPost = (post) => {
    return {
      userId: post.userId,
      id: post.id,
      title: post.title,
      body: post.body,
    };
  }

  _transformComment = (comment) => {
    return {
      userId: comment.userId,
      title: comment.title,
      body: comment.body,
    };
  }
}

