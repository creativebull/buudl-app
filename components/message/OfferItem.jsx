import React from 'react';
import { View, Text } from 'react-native';
import globalStyles from '../../constants/global.styles';

const MessageItem = ({ text, text2, time }) => {
  return (
    <View style={globalStyles.offerMessageItem}>
      <View style={globalStyles.offerProductImagePlaceholder} />
      <View style={globalStyles.offerMessageTextContainer}>
        <Text style={globalStyles.offerMessageText}>{text}</Text>
        <Text style={globalStyles.offerMessageText2}>{text2}</Text>
        <Text style={globalStyles.offerMessageTime}>{time}</Text>
      </View>
    </View>
  );
};
export default MessageItem;
