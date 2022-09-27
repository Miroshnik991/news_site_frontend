import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  CircularProgress,
  Box,
  Alert,
} from '@mui/material';

import { requestRegistration, requestAuth } from '../../redux/actionCreators';
import SignupSchema from '../../utils/singupValidationScheme';

function AuthorizationWindow(props) {
  const dispatch = useDispatch();
  const { isAuth, isLoading, isError } = useSelector((state) => state.authReducer);
  const { open, handleClose, target } = props;
  useEffect(() => {
    handleClose();
  }, [isAuth]);
  const currentForm = target === 'sign-up' ? 'Sign up' : 'Sign in';
  const singupLoaderStyle = { display: 'flex', justifyContent: 'center' };

  const formik = useFormik({
    initialValues: {
      value: target,
      email: '',
      name: '',
      password: '',
    },
    validationSchema: SignupSchema,
    onSubmit: (values, { resetForm }) => {
      if (target === 'sign-up') {
        dispatch(requestRegistration(values));
      } else {
        dispatch(requestAuth(values));
      }
      resetForm();
    },
  });
  useEffect(() => {
    formik.resetForm();
  }, [target]);
  return (
    <Dialog open={open} onClose={handleClose}>
      <form onSubmit={formik.handleSubmit}>
        <DialogTitle>{currentForm}</DialogTitle>
        {isError && (<Alert severity="error">{isError}</Alert>)}
        <DialogContent>
          {target === 'sign-up' ? (
            <TextField
              error={!!((formik.touched.name && formik.errors.name))}
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
              variant="standard"
              name="name"
              value={formik.values.name}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          ) : null}
          <TextField
            error={!!((formik.touched.email && formik.errors.email))}
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            name="email"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <TextField
            error={!!((formik.touched.password && formik.errors.password))}
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            name="password"
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
        </DialogContent>
        {isLoading && (
          <Box sx={singupLoaderStyle}><CircularProgress /></Box>
        )}
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">{currentForm}</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
AuthorizationWindow.propTypes = {
  target: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default AuthorizationWindow;
