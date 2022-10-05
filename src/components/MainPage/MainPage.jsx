import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import PostCard from '../PostCard/PostCard';
import { createPostsLoader } from '../../redux/actionCreators';
import Search from '../Search/Search';
import usePagination from '../../utils/usePagination';

const postsPerPage = 6;

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

  const [filteredposts, setFilteredPosts] = useState([]);

  useEffect(() => {
    setFilteredPosts(posts);
  }, [posts]);

  const {
    totalPages, currentPage, setCurrentPage, nposts,
  } = usePagination(postsPerPage, filteredposts);

  return (
    <>
      <Search setFilteredPosts={setFilteredPosts} posts={posts} />
      <div style={mainPageStyle}>
        {isFetching && <CircularProgress />}
        {error && <Alert severity="error">{error}</Alert>}
        {Boolean(posts.length) && nposts.map((post) => <PostCard postData={post} key={post.id} />)}
      </div>
      <div>
        <Stack spacing={2}>
          <Pagination
            count={totalPages}
            page={currentPage}
            size="large"
            onChange={(event, value) => {
              setCurrentPage(value);
            }}
          />
        </Stack>
      </div>
    </>
  );
}

export default React.memo(MainPage);
