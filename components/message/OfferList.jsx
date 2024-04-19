import React from 'react';
import { ScrollView } from 'react-native';
import MessageItem from './OfferItem';
import globalStyles from '../../constants/global.styles';

const NotificationList = ({ data }) => {
  return (
    <ScrollView style={globalStyles.listContainer}>
      {data.map((offer) => (
        <MessageItem
          key={offer.id}
          text={offer.text}
          text2={offer.text2}
          time={offer.time}
        />
      ))}
    </ScrollView>
  );
};

export default NotificationList;
