import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../constants/global.styles'

const BuudlPurchaseProtection = ({ onClose, onFeedback, isVisible }) => {
  return (
    <Modal visible={isVisible} transparent animationType="slide">
      <View style={styles.buudlProtectionModalContainer}>
        <View style={styles.buudlProtectionContainer}>
          <ScrollView style={styles.buudlProtectionScrollView}>
            <View style={styles.buudlProtectionHeaderContainer}>
              <Text style={styles.buudlProtectionTitle}>Buudl Purchase Protection</Text>
              <TouchableOpacity onPress={onClose} style={styles.buudlProtectionCloseButton}>
                <Ionicons name="close" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <Text style={styles.buudlProtectionDescription}>We want you to feel safe buying and selling on Buudl.</Text>
            <Text style={styles.buudlProtectionSubTitle}>Buyer Protection</Text>
            <Text style={styles.buudlProtectionContentText}>
              Your purchase is covered if Buudl team finds out:
            </Text>
            <Text style={styles.buudlProtectionListItem}>1. You were sent the wrong item.</Text>
            <Text style={styles.buudlProtectionListItem}>2. The item you received is damaged or not as described.</Text>
            <Text style={styles.buudlProtectionListItem}>3. Your order never arrived.</Text>
            <Text style={styles.buudlProtectionListItem}>4. You suspect fraudulent activity with your transaction.</Text>
            <Text style={styles.buudlProtectionFooterNote}>
              If you have any concerns regarding your purchase, you may report the issue at any time for review by reporting a listing.
            </Text>

            <Text style={styles.subTitle}>Seller Safety</Text>
            <Text style={styles.buudlProtectionContentText}>
              No matter how big or small your business is, we care about you. We are committed to making a safe marketplace for sellers.
            </Text>
            <Text style={styles.buudlProtectionContentText}>
              Our support team carefully looks into any problems with orders and works with you directly to keep your sales safe from fraud or other issues that may arise.
            </Text>
            <Text style={styles.buudlProtectionFooterNote}>
              If you’re worried about a transaction or the behavior of a buyer, please get in touch with us.
            </Text>

            <Text style={styles.buudlProtectionSubTitle}>How this works</Text>
            <Text style={styles.buudlProtectionContentText}>
              As a buyer, please reach out to Buudl within 3 days from the delivery date of your item, and our team will assist you in resolving any issues.
            </Text>
            <Text style={styles.buudlProtectionContentText}>
              To assess your case, we may need photographic evidence, written statements, and other documents. To ensure the smoothest resolution, kindly provide all requested documentation promptly.
            </Text>
          </ScrollView>

          <View style={styles.buudlProtectionFooter}>
            <Text style={styles.buudlProtectionFooterText}>Was this article helpful?</Text>
            <View style={styles.buudlProtectionButtonRow}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => onFeedback(true)}
              >
                <Text style={styles.buudlProtectionButtonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buudlProtectionButton}
                onPress={() => onFeedback(false)}
              >
                <Text style={styles.buudlProtectionButtonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};



export default BuudlPurchaseProtection;
