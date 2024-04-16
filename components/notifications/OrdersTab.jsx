import React from 'react';
import NotificationList from './NotificationList';

const ordersData = [
  { id: '1', text: 'Order #123 has been shipped',text2: 'Green dress been shipped', time: '2h ago' },
  { id: '2', text: 'Order #456 has been delivered',text2: 'Green dress been shipped', time: '9h ago' },
  { id: '3', text: 'Order #789 has been placed',text2: 'Green dress been shipped', time: '1d ago' },
];

const Orders = () => {
  return <NotificationList data={ordersData} />;
};

export default Orders;