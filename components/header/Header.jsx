import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import globalStyles from "../../constants/global.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";
const Header = ({ title, rightCom,style }) => {
  const navigation = useNavigation();
  return (
    <View style={[globalStyles.headerContainer,style]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={25} color={COLORS.secondary} />
      </TouchableOpacity>
      <Text style={globalStyles.headerText}>{title}</Text>

      {rightCom ? (
        rightCom
      ) : (
        <View style={globalStyles.space} />
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
