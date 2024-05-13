import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import MessageItem from './ChatItem';
import { useNavigation } from '@react-navigation/native';
import styles from '../../constants/global.styles';

const chatData = [
  { messageId: '1', text: 'James Smith', text2: 'Sure, I will send them over.', time: '5m ago' },
  { messageId: '2', text: 'John Doe', text2: 'Lorem Ipsum', time: '15m ago' },
  { messageId: '3', text: 'Jane Doe', text2: 'Lorem Ipsum', time: '30m ago' },
];

const Chat = () => {
  const navigation = useNavigation();

  const handleSelectChat = (message) => {
  navigation.navigate('MessageDetails', { messageId: message.messageId });
};

  return (
    <ScrollView style={styles.listContainer}>
      {chatData?.map((message) => (
        <TouchableOpacity key={message.messageId} onPress={() => handleSelectChat(message)}>
          <MessageItem text={message.text} text2={message.text2} time={message.time} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Chat;
