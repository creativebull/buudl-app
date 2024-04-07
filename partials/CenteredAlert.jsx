import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../constants';

const CenteredAlert = ({ message, onClose, buttonOnPress, buttonLabel }) => {
  return (
    <View style={styles.overlay}>
      <View style={styles.alert}>
        <Text>{message}</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={onClose} style={styles.button}>
            <Text style={{ color: COLORS.primary }}>close</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={buttonOnPress} style={styles.button}>
            <Text style={{ color: COLORS.primary }}>{buttonLabel}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 9999999999
  },
  alert: {
    backgroundColor: COLORS.white,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: "-100%"
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
});

export default CenteredAlert;