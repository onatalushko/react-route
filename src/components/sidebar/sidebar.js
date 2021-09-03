import React from 'react';

import PostList from '../post-list';

import './sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <PostList count={ 6 } title={ 'Recent Posts' } />
    </aside>
  );
};

export default Sidebar;