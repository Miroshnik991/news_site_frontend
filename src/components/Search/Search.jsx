import React, {
  useMemo,
  useState,
  useEffect,
  memo,
} from 'react';
import PropTypes from 'prop-types';

import {
  TextField,
  DialogContent,
  Radio,
  RadioGroup,
  FormControlLabel,
  Box,
} from '@mui/material';

import PostsFilter from '../../utils/postsFilter';

function Search(props) {
  const { setFilteredPosts, posts } = props;

  const [textInput, setTextInput] = useState('');
  const [tab, setTab] = useState('all');

  const filteredposts = useMemo(() => PostsFilter(textInput, tab, posts), [textInput, tab]);

  useEffect(() => {
    setFilteredPosts(filteredposts);
  }, [filteredposts]);

  return (
    <div>
      <Box
        sx={{
          width: 500,
          maxWidth: '100%',
        }}
      >
        <DialogContent>
          <TextField
            id="Search"
            fullWidth
            label="Search"
            type="text"
            name="Search"
            value={textInput}
            onChange={(event) => {
              setTextInput(event.target.value);
            }}
          />
        </DialogContent>
      </Box>
      <RadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="all"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="all"
          control={<Radio />}
          label="All"
          onClick={(event) => {
            setTab(event.target.value);
          }}
        />
        <FormControlLabel
          value="tags"
          control={<Radio />}
          label="Tags"
          onClick={(event) => {
            setTab(event.target.value);
          }}
        />
        <FormControlLabel
          value="authors"
          control={<Radio />}
          label="Authors"
          onClick={(event) => {
            setTab(event.target.value);
          }}
        />
      </RadioGroup>
    </div>
  );
}

Search.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape(
    {
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      image: PropTypes.string,
      user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        username: PropTypes.string.isRequired,
        avatar: PropTypes.string,
      }).isRequired,
    }.isRequired,
  )).isRequired,
  setFilteredPosts: PropTypes.func.isRequired,
};

export default memo(Search);
