import React from 'react';
import { View, Text } from 'react-native';
import globalStyles from '../../constants/global.styles';

const MessageItem = ({ text, text2, time }) => {
  return (
    <View style={globalStyles.messageItem}>
      <View style={globalStyles.notificationAvatarStyle} />
      <View style={globalStyles.messageTextContainer}>
        <Text style={globalStyles.messageText}>{text}</Text>
        <Text style={globalStyles.messageText2}>{text2}</Text>
        <Text style={globalStyles.messageTime}>{time}</Text>
      </View>
    </View>
  );
};

export default MessageItem;
