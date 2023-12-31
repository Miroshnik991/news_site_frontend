import React, { useState, memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import AuthorizationWindow from '../Authorization/AuthorizationWindow';
import { requestSignOut, requestAuth } from '../../redux/actionCreators';

function Header() {
  const dispatch = useDispatch();
  const { isAuth, userData } = useSelector((state) => state.authReducer);
  const [open, setOpen] = useState(false);
  const [target, setTarget] = useState('');

  useEffect(() => {
    if (isAuth && !userData.id) dispatch(requestAuth());
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">News</Link>
          </Typography>
          {!isAuth && (
          <>
            <Button
              color="inherit"
              className="log-in"
              onClick={() => {
                handleOpen();
                setTarget('sign-up');
              }}
            >
              Sign up
            </Button>
            <Button
              color="inherit"
              className="sign-in"
              onClick={() => {
                handleOpen();
                setTarget('sign-in');
              }}
            >
              Sign in
            </Button>
          </>
          )}
          {isAuth && (
          <>
            <Button
              color="inherit"
              className="sign-out"
            />
            <Link to={`/users/${userData.id}`}>My Profile</Link>
            <Button
              color="inherit"
              className="sign-out"
              onClick={() => {
                dispatch(requestSignOut());
              }}
            >
              Sign out
            </Button>
          </>
          )}
          <AuthorizationWindow open={open} target={target} handleClose={handleClose} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default memo(Header);
