import React from 'react';
import MessageList from './MessageList';


const chatData = [
  { id: '1', text: 'James Arthur', text2: 'Can I be him', time: '5m ago' },
  { id: '2', text: 'John Doe', text2: 'Lorem Ipsum', time: '15m ago' },
  { id: '3', text: 'Jane Doe', text2: 'Lorem Ipsum', time: '30m ago' },
];

const Chat = () => {
  return <MessageList data={chatData} />;
};

export default Chat;