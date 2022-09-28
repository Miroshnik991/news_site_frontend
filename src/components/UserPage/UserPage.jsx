import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  Avatar, Typography, Button, Alert, CircularProgress, Box,
} from '@mui/material';

import PostCard from '../PostCard/PostCard';
import { requestCurrentUser } from '../../redux/usersActionCreators';

function UserPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(requestCurrentUser(id));
  }, [dispatch, id]);

  const {
    userData,
  } = useSelector((state) => state.authReducer);
  const {
    currentUser,
    userPageLoading,
    userPageError,
    currentUserPosts,
  } = useSelector((state) => state.usersReducer);
  if (userPageError) {
    return (
      <Alert severity="error">{userPageError}</Alert>
    );
  }
  if (userPageLoading) {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    );
  }
  if (currentUser) {
    return (
      <>
        <div>
          <Avatar
            alt="Remy Sharp"
            sx={{ width: 250, height: 250 }}
          />
          <Typography gutterBottom variant="h5">
            {currentUser.name}
          </Typography>
          {currentUser.id === userData.id && (
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
          {currentUserPosts.map((post) => (
            <PostCard
              key={post.id}
              postData={{ ...post, user: { name: currentUser.name, id: currentUser.id } }}
            />
          ))}
        </div>
      </>
    );
  }
  return null;
}

export default UserPage;
