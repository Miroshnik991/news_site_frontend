import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const style = { maxWidth: '300px' };

function PostCard({ postData }) {
  const tags = postData.tags.map((tag) => `#${tag.tag_name} `);
  return (
    <Card sx={style}>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <Typography gutterBottom variant="h5" component="div">
            {postData.title}
          </Typography>
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="140"
        image="https://i.pinimg.com/originals/be/2d/23/be2d23ad226fdee3fd0bcb5b83ad6f3b.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {postData.content}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {postData.user.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {tags}
        </Typography>
      </CardContent>
    </Card>
  );
}

PostCard.propTypes = {
  postData: PropTypes.shape({
    content: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.shape({
      tag_name: PropTypes.string.isRequired,
    })).isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostCard;
