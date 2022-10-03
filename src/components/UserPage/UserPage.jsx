import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  Avatar,
  Typography,
  Button,
  Alert,
  CircularProgress,
  Box,
} from '@mui/material';

import PostCard from '../PostCard/PostCard';
import AddPostWindow from '../AddPostWindow/AddPostWindow';
import { requestCurrentUser } from '../../redux/usersActionCreators';
import EditProfileWindow from '../EditProfileWindow/EditProfileWindow';

function UserPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(requestCurrentUser(id));
  }, []);

  const {
    userData,
  } = useSelector((state) => state.authReducer);

  const [open, setOpen] = useState(false);
  const [target, setTarget] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
              onClick={() => {
                setTarget('add-news');
                handleOpen();
              }}
            >
              Add news
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                setTarget('editing-user');
                handleOpen();
              }}
            >
              Editing user
            </Button>
          </div>
          )}
        </div>
        <div>
          {currentUserPosts.map((item) => (
            <PostCard
              key={item.id}
              postData={{ ...item, user: { name: currentUser.name, id: currentUser.id } }}
            />
          ))}
        </div>
        {target === 'add-news' && <AddPostWindow open={open} handleClose={handleClose} />}
        {target === 'editing-user' && <EditProfileWindow open={open} handleClose={handleClose} />}
      </>
    );
  }
  return null;
}

export default UserPage;
