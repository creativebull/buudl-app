import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Ionicons,
  Feather,
  MaterialCommunityIcons,
  AntDesign,
  Entypo
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const PaymentSuccess = ({ route }) => {
    const navigation = useNavigation()
  const type = route?.params?.type;

  React.useEffect(() => {
    setTimeout(() => {
        navigation.navigate("Bottom Navigation")
    },3000);
  }, [])
  
  return (
    <View style={styles.container}>
      {type == "success" ? (
        <>
          <AntDesign name="checkcircle" size={30} color="green" />
          <Text style={styles.text}>Payment Success</Text>
        </>
      ) : (
        <>
          <Entypo name="circle-with-cross" size={20} color="red" />
          <Text style={styles.text}>Payment Not Completed</Text>
        </>
      )}
    </View>
  );
};

export default PaymentSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
