import React from 'react';

import PostCard from '../PostCard/PostCard';

function MainPage() {
  const res = [
    {
      id: 1,
      image: 'none',
      user_id: 1,
      email_verified_at: null,
      title: 'title1',
      content: 'content',
      created_at: null,
      updated_at: null,
      user: {
        id: 1,
        name: 'antony',
        avatar: 'loh',
        email: 'a.m@mail.com',
        created_at: null,
        updated_at: null,
      },
      tags: [
        {
          id: 1,
          tag_name: 'tag1',
        },
        {
          id: 3,
          tag_name: 'tag3',
        },
      ],
    },
    {
      id: 2,
      image: 'none',
      user_id: 1,
      email_verified_at: null,
      title: 'title2',
      content: 'content2',
      created_at: null,
      updated_at: null,
      user: {
        id: 1,
        name: 'antony',
        avatar: 'loh',
        email: 'a.m@mail.com',
        created_at: null,
        updated_at: null,
      },
      tags: [
        {
          id: 2,
          tag_name: 'tag2',
        },
      ],
    },
  ];

  return res.map((post) => <PostCard postData={post} key={post.id} />);
}

export default MainPage;
