import React from 'react';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const style = { width: '40%' };

function PostCard({ postData }) {
  return (
    <Card sx={style}>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <Typography gutterBottom variant="h5" component="div">
            {postData.title}
          </Typography>
        </Typography>
      </CardContent>
      {
        postData.image && (
        <CardMedia
          component="img"
          height="200"
          image={postData.image}
        />
        )
      }
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {postData.content}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {postData.user.name}
        </Typography>
        <Stack direction="row" spacing={1}>
          {postData.tags.map((tag) => <Chip label={tag.tag_name} key={tag.id} size="small" />)}
        </Stack>
      </CardContent>
    </Card>
  );
}

PostCard.propTypes = {
  postData: PropTypes.shape({
    content: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      tag_name: PropTypes.string.isRequired,
    })).isRequired,
    image: PropTypes.string,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default React.memo(PostCard);
