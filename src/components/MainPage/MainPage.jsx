/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PostCard from '../PostCard/PostCard';
import { getPosts } from '../../redux/actions';

function MainPage() {
  const dispatch = useDispatch();
  const res = useSelector((state) => state.post.post);
  const isFetching = useSelector((state) => state.post.isFetching);
  const error = useSelector((state) => state.post.error);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return res.map((post) => <PostCard postData={post} key={post.id} />);
}

export default memo(MainPage);
