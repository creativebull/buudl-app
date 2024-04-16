import React from 'react';
import NotificationList from './NotificationList';


const likesData = [
  { id: '1', text: 'Alice liked your post', text2: 'Green dress been shipped', time: '5m ago' },
  { id: '2', text: 'Bob liked your photo', text2: 'Green dress been shipped', time: '15m ago' },
  { id: '3', text: 'Charlie liked your comment', text2: 'Green dress been shipped', time: '30m ago' },
];

const Likes = () => {
  return <NotificationList data={likesData} />;
};

export default Likes;