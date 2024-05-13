import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import RNModal from "../components/message/RNModal";
import globalStyles from "../constants/global.styles";

const CenteredAlert = ({
  message,
  buttonOnPress,
  buttonLabel,
  icon,
  state,
  setState,
}) => {
  return (
    // <View style={styles.overlay}>
    //   <View style={styles.alert}>
    //     <Text>{message}</Text>
    //     <View style={styles.buttonsContainer}>
    //       <TouchableOpacity onPress={onClose} style={styles.button}>
    //         <Text style={{ color: COLORS.primary }}>close</Text>
    //       </TouchableOpacity>
    //       <TouchableOpacity onPress={buttonOnPress} style={styles.button}>
    //         <Text style={{ color: COLORS.primary }}>{buttonLabel}</Text>
    //       </TouchableOpacity>
    //     </View>
    //   </View>
    // </View>
    <RNModal visible={state} setVisible={setState}>
      <View style={styles.modal}>
        <View style={styles.horizontalView}>
          {icon && icon}
          <Text style={styles.message}>{message}</Text>
        </View>
        <TouchableOpacity
          style={[globalStyles.buttonPrimary, styles.button]}
          onPress={buttonOnPress}
        >
          <Text style={globalStyles.buttonText}>{buttonLabel}</Text>
        </TouchableOpacity>
      </View>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  modal: {
    height: 200,
    backgroundColor: "white",
    borderRadius: 30,
    // justifyContent:'center',
    alignItems: "center",
    paddingTop: 30,
  },
  message: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
  },
  button: {
    marginTop: 30,
    width: "70%",
  },
  horizontalView: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal:'5%',
  },
});

export default React.memo(CenteredAlert);
