/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PostCard from '../PostCard/PostCard';

function MainPage() {
  const dispatch = useDispatch();
  const res = useSelector((state) => state.post.post);

  return res.map((post) => <PostCard postData={post} key={post.id} />);
}

export default MainPage;
