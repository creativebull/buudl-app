import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';

const OfferDetails = ({ route }) => {
  const { offer } = route.params;


  const activeOffers = [
    { id: 'a1', price: 'P200', counterPrice: 'P180', username: '@buyer321', offerStatus:'Offer recieved' },
    { id: 'a2', price: 'P200', counterPrice: 'P190', username: '@buyer789', offerStatus:'Offer recieved' },
  ];

  const pastOffers = [
    { id: 'p1', price: 'P180', username: '@buyer123', offerStatus:'Counter Offer sent' },
    { id: 'p2', price: 'P120', username: '@buyer456', offerStatus:'Counter Offer sent' },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Placeholder image */}
      <Image source={'https://via.placeholder.com/150'} style={styles.productImage} />
       <Text style={styles.OffersSection}>Offers</Text>
      <Text style={styles.offerCount}>4 Offers</Text>
      <Text style={styles.title}>{offer.text2}</Text>
      <Text style={styles.price}>Price: {offer.time}</Text>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Active Offers</Text>
        {activeOffers?.map((activeOffer) => (
          <View key={activeOffer.id} style={styles.activeOfferItem}>
            <Text style={styles.username}>{activeOffer.offerStatus}</Text>
            <Text style={styles.username}>{activeOffer.username}</Text>
            <Text style={styles.offerPrice}>{activeOffer.price}</Text>
            <Text style={styles.counterPrice}>{activeOffer.counterPrice}</Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Accept Offer</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.counterButton}>
                <Text style={styles.counterButtonText}>Counter Offer</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Past Offers</Text>
        {pastOffers?.map((pastOffer) => (
          <View key={pastOffer.id} style={styles.pastOfferItem}>
            <Text style={styles.username}>{pastOffer.offerStatus}</Text>
            <Text style={styles.pastOfferPrice}>{pastOffer.price}</Text>
            <Text style={styles.pastUsername}>{pastOffer.username}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
   OffersSection: {
    borderBottomWidth:1,
    borderColor:'#310D00',
     textAlign:'center',
     fontSize: 24,
      fontWeight: 'bold',
      paddingHorizontal:20,
      paddingVertical:20,
  },
  productImage: {
    width: '100%',
    height: 30,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  offerCount: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    alignSelf: 'center',
    marginTop:10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
    alignSelf: 'center',
  },
  price: {
    fontSize: 18,
    marginBottom: 16,
    alignSelf: 'center',
  },
  sectionContainer: {
    marginBottom: 20,
    paddingHorizontal:20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  activeOfferItem: {
    backgroundColor: '#fff',
    borderRadius: 6,
    padding: 15,
    marginBottom: 10,
    borderColor: '#310D00',
    borderWidth: 1,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  offerPrice: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
    position:'absolute',
    right:90,
    top:40,
  },
  counterPrice: {
    fontSize: 25,
    color: '#555',
    marginBottom: 8,
    position:'absolute',
    right:20,
    top:40,
  },
  buttonsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#FFA500',
    paddingVertical: 10,
    paddingHorizontal: 100,
    marginBottom:10,
    borderRadius: 5,
    elevation: 2,
  },
  counterButton: {
    backgroundColor: '#FFF', 
    borderColor: '#310D00',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderRadius: 5,
    elevation: 2,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  counterButtonText: {
    color: '#310D00',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  pastOfferItem: {
    backgroundColor: '#fff',
    borderRadius: 6,
    padding: 15,
    marginBottom: 10,
    borderColor: '#310D00',
    borderWidth: 1,
  },
  pastOfferPrice: {
    fontSize: 25,
    color: '#555',
    marginBottom: 8,
    position:'absolute',
    right:20,
    top:40,
  },
  offerStatus: {
    fontSize: 16,
    color: '#555',
    marginRight: 10,
  },
  pastUsername: {
    fontSize: 16,
    color: '#555',
  },
});

export default OfferDetails;
