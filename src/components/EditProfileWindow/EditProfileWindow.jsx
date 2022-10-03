import React, { useCallback } from 'react';
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
  Input,
} from '@mui/material';

import { requestEditingUser } from '../../redux/usersActionCreators';
import EditProfileSsheme from '../../utils/editProfileValidationScheme';

function EditProfileWindow(props) {
  const dispatch = useDispatch();

  const {
    userPageError,
    userPageLoading,
    currentUser,
  } = useSelector((state) => state.usersReducer);

  const {
    open, handleClose,
  } = props;

  const formik = useFormik({
    initialValues: {
      username: currentUser.name,
      file: null,
    },
    validationSchema: EditProfileSsheme,
    onSubmit: (values, { resetForm }) => {
      dispatch(requestEditingUser({ ...values, id: currentUser.id }));
      resetForm();
      handleClose();
    },
  });

  const changeFile = useCallback((event) => {
    const [files] = event.target.files;
    formik.values.file = files;
  }, [formik.values]);

  return (
    <Dialog open={open} onClose={handleClose}>
      <form onSubmit={formik.handleSubmit} encType=" multipart/form-data ">
        <DialogTitle>Editing user</DialogTitle>
        {userPageError && (<Alert severity="error">{userPageError}</Alert>)}
        <DialogContent>
          <TextField
            error={!!(formik.touched.username && formik.errors.username)}
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            type="text"
            fullWidth
            variant="standard"
            name="username"
            value={formik.values.username}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <Input
            error={!!(formik.touched.file && formik.errors.file)}
            accept="image/*"
            id="file"
            type="file"
            fullWidth
            name="file"
            onBlur={formik.handleBlur}
            onChange={changeFile}
          />
        </DialogContent>
        {userPageLoading && (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}><CircularProgress /></Box>
        )}
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Change</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
EditProfileWindow.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default EditProfileWindow;
