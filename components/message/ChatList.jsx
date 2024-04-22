import React from 'react';
import { ScrollView } from 'react-native';
import MessageItem from './ChatItem';
import globalStyles from '../../constants/global.styles';

const ChatList = ({ data }) => {
  return (
    <ScrollView style={globalStyles.listContainer}>
      {data.map((message) => (
        <MessageItem
          key={message.messageId}
          text={message.text}
          text2={message.text2}
          time={message.time}
        />
      ))}
    </ScrollView>
  );
};

export default ChatList;
