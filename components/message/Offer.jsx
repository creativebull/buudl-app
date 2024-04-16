import React from 'react';
import MessageList from './MessageList';

const offerData = [
  { id: '1', text: 'Mary',text2: 'Make an offer with the green dress', time: '2h ago' },
  { id: '2', text: 'Jennifer',text2: 'Make an offer with the red dress', time: '9h ago' },
  { id: '3', text: 'Gwyneth',text2: 'Make an offer with the black dress', time: '1d ago' },
];

const Offer = () => {
  return <MessageList data={offerData} />;
};

export default Offer;