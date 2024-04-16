import React from 'react';
import { View, Text } from 'react-native';
import globalStyles from '../../constants/global.styles';

const NotificationItem = ({ text, text2, time }) => {
  return (
    <View style={globalStyles.notificationItem}>

      <View style={globalStyles.notificationTextContainer}>
        <Text style={globalStyles.notificationText}>{text}</Text>
        <Text style={globalStyles.notificationText2}>{text2}</Text>
        <Text style={globalStyles.notificationTime}>{time}</Text>
      </View>
    </View>
  );
};

export default NotificationItem;
