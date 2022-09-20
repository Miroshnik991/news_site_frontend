import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PostCard from '../PostCard/PostCard';
import { getPosts } from '../../redux/actionCreators';

function MainPage() {
  const dispatch = useDispatch();
  const res = useSelector((state) => state.post.posts);
  const isFetching = useSelector((state) => state.post.isFetching);
  const error = useSelector((state) => state.post.error);
  let content;

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  if (isFetching) {
    content = (
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  } else if (error) {
    content = (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  } else content = res.map((post) => <PostCard postData={post} key={post.id} />);
  return content;
}

export default memo(MainPage);
