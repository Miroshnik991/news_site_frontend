import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

import PostCard from '../PostCard/PostCard';
import { createPostsLoader } from '../../redux/actionCreators';

const mainPageStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  gap: '50px',
  flexWrap: 'wrap',
  alignItems: 'center',
};

function MainPage() {
  const dispatch = useDispatch();
  const { posts, isFetching, error } = useSelector((state) => state.postsReducer);
  useEffect(() => {
    dispatch(createPostsLoader());
  }, []);

  return (
    <div style={mainPageStyle}>
      {isFetching && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}
      {Boolean(posts.length) && posts.map((post) => <PostCard postData={post} key={post.id} />)}
    </div>
  );
}

export default React.memo(MainPage);
