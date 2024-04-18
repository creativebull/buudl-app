import React, { useState, useEffect } from 'react';
import { Modal, View,Button, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../../constants/global.styles';

const CloseButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.closeButton}>
    <Text>X</Text>
  </TouchableOpacity>
);

const OfferInput = ({ value, onChangeText }) => (
  <TextInput
    style={styles.input}
    value={value}
    onChangeText={onChangeText}
    keyboardType="number-pad"
    placeholder="PHP"
    accessibilityLabel="Enter your offer in PHP"
  />
);

const SendButton = ({ onPress }) => (
  <TouchableOpacity style={styles.sendButton} onPress={onPress}>
    <Text style={styles.sendButtonText}>Send Offer</Text>
  </TouchableOpacity>
);

const OfferDisclaimer = () => (
  <Text style={styles.disclaimerText}>
    An offer is not a payment. If the seller accepts your offer, you have 24 hours to buy the
    product at your offered price. The seller may reject your offer or counter with a different
    price.
  </Text>
);

const MakeOfferPopup = ({ visible, onClose, onSendOffer }) => {
  const [offer, setOffer] = useState('');
  const [discount, setDiscount] = useState(null);
const applyDiscount = (percentage) => {
    setDiscount(percentage);
    Alert.alert(`Discount Applied: ${percentage}% off`);
  };
  const handleSendOffer = () => {
    onSendOffer(offer);
    clearInputsAndClose();
  };
const CustomButton = ({ title, onPress, selected }) => (
  <TouchableOpacity onPress={onPress} style={[styles.button, selected && styles.selectedButton]}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);
  const clearInputsAndClose = () => {
    setOffer(''); 
    onClose(); 
  };

  useEffect(() => {
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
          <CloseButton onPress={clearInputsAndClose} />
          <Text style={styles.modalTitle}>Make an Offer</Text>
          <Text style={styles.inputLabel}>Enter your offer</Text>
          <OfferInput value={offer} onChangeText={setOffer} />
          <Text style={styles.subText}>Shipping fee not included</Text>
           <View style={styles.makeOfferContainer}>
      <CustomButton
        title="10% Off"
        onPress={() => applyDiscount(10)}
        selected={discount === 10}
      />
      <CustomButton
        title="15% Off"
        onPress={() => applyDiscount(15)}
        selected={discount === 15}
      />
      <CustomButton
        title="20% Off"
        onPress={() => applyDiscount(20)}
        selected={discount === 20}
      />
    </View>
          <SendButton onPress={handleSendOffer} />
          <OfferDisclaimer />
        </View>
      </View>
    </Modal>
  );
};


export default MakeOfferPopup;
