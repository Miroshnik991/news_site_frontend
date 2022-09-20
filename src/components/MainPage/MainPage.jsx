import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PostCard from '../PostCard/PostCard';
import { getPosts } from '../../redux/actionCreators';

function MainPage() {
  const dispatch = useDispatch();
  const res = useSelector((state) => state.post.post);
  const isFetching = useSelector((state) => state.post.isFetching);
  const error = useSelector((state) => state.post.error);

  useEffect(() => {
    dispatch(getPosts());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isFetching) {
    return (
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  }
  return res.map((post) => <PostCard postData={post} key={post.id} />);
}

export default memo(MainPage);
