import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CircularProgress, Alert } from '@mui/material';
import PostCard from '../PostCard/PostCard';
import { getPosts } from '../../redux/actionCreators';

function MainPage() {
  const dispatch = useDispatch();
  const { posts, isFetching, error } = useSelector((state) => state.postsReducer);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <>
      {isFetching && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}
      {Boolean(posts.length) && posts.map((post) => <PostCard postData={post} key={post.id} />)}
    </>
  );
}

export default React.memo(MainPage);
