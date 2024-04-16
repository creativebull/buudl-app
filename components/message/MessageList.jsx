import React from 'react';
import { ScrollView } from 'react-native';
import MessageItem from './MessageItem';
import globalStyles from '../../constants/global.styles';

const NotificationList = ({ data }) => {
  return (
    <ScrollView style={globalStyles.listContainer}>
      {data.map((notification) => (
        <MessageItem
          key={notification.id}
          text={notification.text}
          text2={notification.text2}
          time={notification.time}
        />
      ))}
    </ScrollView>
  );
};

export default NotificationList;
