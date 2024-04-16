import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import styles from '../../constants/global.styles'; 

const OfferConfirmationPopup = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text>X</Text>
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Offer Sent!</Text>
          <Text style={styles.confirmationMessage}>
            We have let the seller know about your offer. The seller
            has 24 hours to accept, counter, or reject your offer.
          </Text>
          <Text style={styles.confirmationMessage}>
            We'll keep you posted!
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default OfferConfirmationPopup;
