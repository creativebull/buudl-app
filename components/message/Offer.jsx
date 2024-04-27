import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import MessageItem from './OfferItem';
import { useNavigation } from '@react-navigation/native';
import styles from '../../constants/global.styles';

const offerData = [
  { id: '1', text: '4 offers', text2: 'Polo shirt', time: 'P200', details: 'Size M, barely used.' },
  { id: '2', text: '1 offer', text2: 'Vintage Jorts', time: 'P200', details: 'Vintage denim, size 32.' },
];

const Offer = () => {
  const navigation = useNavigation();

  const handleSelectOffer = (offer) => {
    navigation.navigate('OfferDetails', { offer });
  };

  return (
    <ScrollView style={styles.listContainer}>
      {offerData.map((offer) => (
        <TouchableOpacity key={offer.id} onPress={() => handleSelectOffer(offer)}>
          <MessageItem text={offer.text} text2={offer.text2} time={offer.time} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Offer;
