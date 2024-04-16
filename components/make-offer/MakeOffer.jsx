import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './global.styles.js';  // Adjust the path as necessary

const MakeOfferPopup = ({ visible, onClose, onSendOffer }) => {
  const [offer, setOffer] = useState('');

  const handleSendOffer = () => {
    onSendOffer(offer);
    clearInputsAndClose();
  };

  const clearInputsAndClose = () => {
    setOffer(''); 
    onClose(); 
  };


  React.useEffect(() => {
    if (!visible) {
      setOffer('');
    }
  }, [visible]);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={clearInputsAndClose}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={clearInputsAndClose} style={styles.closeButton}>
            <Text>X</Text>
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Make an Offer</Text>
          <Text style={styles.inputLabel}>Enter your Offer</Text>
          <TextInput
            style={styles.input}
            value={offer}
            onChangeText={setOffer}
            keyboardType="number-pad"
            placeholder="PHP"
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleSendOffer}>
            <Text style={styles.sendButtonText}>Send Offer</Text>
          </TouchableOpacity>
          <Text style={styles.disclaimerText}>
            An offer is not a payment. If the seller accepts your offer, you have 24 hours to buy the
            product at your offered price. The seller may reject your offer or counter with a different
            price.
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default MakeOfferPopup;
