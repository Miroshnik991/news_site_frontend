import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
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

import { requestAddPost } from '../../redux/usersActionCreators';
import SignupSchema from '../../utils/addPostValidationScheme';

function AddPostWindow(props) {
  const dispatch = useDispatch();
  const {
    userPageError,
    userPageloading,
    currentUser,
  } = useSelector((state) => state.usersReducer);
  const {
    open, handleClose,
  } = props;

  const formik = useFormik({
    initialValues: {
      title: '',
      content: '',
      tags: '',
      file: null,
      user_id: currentUser.id,
    },
    validationSchema: SignupSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(requestAddPost(values));
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
        <DialogTitle>Add news</DialogTitle>
        {userPageError && (<Alert severity="error">{userPageError}</Alert>)}
        <DialogContent>
          <TextField
            error={!!(formik.touched.title && formik.errors.title)}
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            name="title"
            value={formik.values.title}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <TextField
            error={!!(formik.touched.content && formik.errors.content)}
            margin="dense"
            id="content"
            label="Content"
            type="text"
            fullWidth
            variant="standard"
            name="content"
            value={formik.values.content}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <TextField
            error={!!(formik.touched.tags && formik.errors.tags)}
            margin="dense"
            id="tags"
            label="Tags"
            type="text"
            fullWidth
            variant="standard"
            name="tags"
            value={formik.values.tags}
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
        {userPageloading && (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}><CircularProgress /></Box>
        )}
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add Post</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
AddPostWindow.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default AddPostWindow;
