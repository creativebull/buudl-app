import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import globalStyles from '../../constants/global.styles';

const ReportListingModal = ({ isVisible, onClose, onReportSubmit }) => {
  const [reason, setReason] = useState('');
  const [details, setDetails] = useState('');

  const submitReport = () => {
    onReportSubmit(reason, details);
    clearInputsAndClose();
  };

  const clearInputsAndClose = () => {
    setReason('');
    setDetails('');
    onClose();
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={clearInputsAndClose}
    >
      <View style={globalStyles.reportListingCenteredView}>
        <View style={globalStyles.reportListingModalView}>
          <TouchableOpacity
            style={globalStyles.reportListingCloseButton}
            onPress={clearInputsAndClose}
          >
            <Text style={globalStyles.reportListingCloseButtonText}>×</Text>
          </TouchableOpacity>
          <Text style={globalStyles.modalTitle}>Report Listing</Text>
          <TextInput
            style={globalStyles.modalInput}
            onChangeText={setReason}
            value={reason}
            placeholder="Reason"
          />
          <TextInput
            style={[globalStyles.modalInput, globalStyles.modalInputMultiline]}
            onChangeText={setDetails}
            value={details}
            multiline
            numberOfLines={4}
            placeholder="Details"
          />
          <TouchableOpacity
            style={globalStyles.submitButton}
            onPress={submitReport}
          >
            <Text style={globalStyles.submitButtonText}>Submit Report</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ReportListingModal;
