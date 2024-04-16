import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BuudlPurchaseProtection = ({ onClose, onFeedback }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Buudl Purchase Protection</Text>
          <TouchableOpacity onPress={onClose}>
            <Ionicons name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.description}>We want you to feel safe buying and selling on Buudl.</Text>
        <Text style={styles.subTitle}>Buyer Protection</Text>
        <Text style={styles.contentText}>
          Your purchase is covered if Buudl team finds out:
        </Text>
        <Text style={styles.listItem}>1. You were sent the wrong item.</Text>
        <Text style={styles.listItem}>2. The item you received is damaged or not as described.</Text>
        <Text style={styles.listItem}>3. Your order never arrived.</Text>
        <Text style={styles.listItem}>4. You suspect fraudulent activity with your transaction.</Text>
        <Text style={styles.footerNote}>
          If you have any concerns regarding your purchase, you may report the issue at any time for review by reporting a listing.
        </Text>

        <Text style={styles.subTitle}>Seller Safety</Text>
        <Text style={styles.contentText}>
          No matter how big or small your business is, we care about you. We are committed to making a safe marketplace for sellers.
        </Text>
        <Text style={styles.contentText}>
          Our support team carefully looks into any problems with orders and works with you directly to keep your sales safe from fraud or other issues that may arise.
        </Text>
        <Text style={styles.footerNote}>
          If you’re worried about a transaction or the behavior of a buyer, please get in touch with us.
        </Text>

        <Text style={styles.subTitle}>How this works</Text>
        <Text style={styles.contentText}>
          As a buyer, please reach out to Buudl within 3 days from the delivery date of your item, and our team will assist you in resolving any issues.
        </Text>
        <Text style={styles.contentText}>
          To assess your case, we may need photographic evidence, written statements, and other documents. To ensure the smoothest resolution, kindly provide all requested documentation promptly.
        </Text>
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Was this article helpful?</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => onFeedback(true)}
          >
            <Text style={styles.buttonText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => onFeedback(false)}
          >
            <Text style={styles.buttonText}>No</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    marginTop: 100,
    backgroundColor: 'white',
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  scrollView: {
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: 'grey',
    marginTop: 5,
  },
  contentText: {
    fontSize: 16,
    marginTop: 5,
  },
  listItem: {
    fontSize: 16,
    marginLeft: 10,
    marginTop: 5,
  },
  footerNote: {
    fontSize: 16,
    marginTop: 5,
    marginBottom: 10,
    color: 'grey',
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  footerText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#e7e7e7',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
  },
  closeButton: {
    padding: 10,
  },
});

export default BuudlPurchaseProtection;
