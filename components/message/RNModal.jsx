import { StyleSheet, } from 'react-native';
import React, { memo } from 'react';
import Modal from 'react-native-modal';

const RNModal = ({ children, visible, style, setVisible }) => {
  //   const {colors} = useTheme();
  //   const styles = Styles(colors);
  return (
    <Modal
      style={[styles.modal, style]}
      // propagateSwipe
      isVisible={visible}
      animationIn="slideInUp"
      onBackdropPress={() => setVisible(false)}
      onBackButtonPress={() => setVisible(false)}
      animationOut="slideOutDown"
      animationInTiming={500}

      animationOutTiming={500}
      backdropColor={'rgba(0,0,0,0.60)'}>
      {children}
    </Modal>
  );
};

export default memo(RNModal);

const styles = StyleSheet.create({
  modal: {

  },
})

