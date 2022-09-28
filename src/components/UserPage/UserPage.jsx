import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  Avatar, Typography, Button, Alert, CircularProgress, Box,
} from '@mui/material';

// import PostCard from '../PostCard/PostCard';
// import returnImage from '../../lib/returnImage';
import { requestCurrentUser } from '../../redux/usersActionCreators';

function UserPage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(requestCurrentUser(id));
  }, [dispatch, id]);

  const {
    isLoading,
    isError,
    userData,
  } = useSelector((state) => state.authReducer);

  //   const { posts } = useSelector((state) => state.postReducer);
  const { current } = useSelector((state) => state.usersReducer);

  if (isError) {
    return (
      <Alert severity="error">{isError}</Alert>
    );
  }

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    );
  }
  if (current) {
    return (
      <>
        <div>
          <Avatar
            alt="Remy Sharp"
            // src={returnImage(posts.image)}
            sx={{ width: 250, height: 250 }}
          />
          <Typography gutterBottom variant="h5">
            {current.name}
          </Typography>
          {current.id === userData.id && (
          <div>
            <Button
              variant="contained"
            >
              Add news
            </Button>
            <Button
              variant="contained"
            >
              Editing user
            </Button>
          </div>
          )}
        </div>
        <div>
          {/* {posts.map((item) => (
          <PostCard
            key={item.id}
            data={{ ...item, user: { name: posts.name, id: posts.id } }} */}
          {/* /> */}
          {/* ))} */}
        </div>
      </>
    );
  }
  return null;
}

export default UserPage;
