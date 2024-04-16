import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import globalStyles from '../../constants/global.styles';
import { Ionicons } from '@expo/vector-icons';

const ReportSuccessModal = ({ visible, onClose }) => {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={globalStyles.reportCenteredView}>
        <View style={globalStyles.reportModalView}>
          <TouchableOpacity style={globalStyles.reportCloseButton} onPress={onClose}>
            <Ionicons name="close" size={24} color="#000" />
          </TouchableOpacity>
          <View style={globalStyles.reportContent}>
            <Ionicons name="checkmark-circle" size={48} color="#34C759" />
            <Text style={globalStyles.reportTitle}>Thanks for letting us know!</Text>
            <Text style={globalStyles.reportMessage}>
              We will review this item to determine whether it
              violates our guidelines. Thanks for helping us keep
              Buudl a safe place.
            </Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={globalStyles.reportCodeOfConduct}>Learn more about our Code of Conduct</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  message: {
    fontSize: 14,
    color: '#333',
    marginTop: 10,
    textAlign: 'center',
  },
  codeOfConduct: {
    marginTop: 10,
    color: '#007AFF',
    textDecorationLine: 'underline',
  }
});

export default ReportSuccessModal;
