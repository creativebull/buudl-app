import React from 'react';
import MessageList from './OfferList';
//this should be the data for hook
const offerData = [
  { id: '1', text: '4 offers', text2: 'Polo shirt', time: 'P200' },
  { id: '2', text: '1 offer', text2: 'Vintage Jorts', time: 'P200' },
];

const Offer = () => {
  return <MessageList data={offerData} />;
};

export default Offer;