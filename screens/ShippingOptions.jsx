import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Header } from "../components";
import globalStyles from "../constants/global.styles";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { COLORS } from "../constants";
const ShippingOptions = () => {
  return (
    <>
      <Header title="Shipping Option" />
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={globalStyles.shippingOptionContainer}>
          <MaterialIcons
            name="verified-user"
            size={25}
            style={{ marginRight: 8 }}
          />

          <View>
            <Text style={globalStyles.titleMedium}>
              Buudl Supported Logistics
            </Text>
            <Text style={globalStyles.titleSm}>
              You can track your orders within the Buudl app.
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={globalStyles.standardLocal}>
          {/* <MaterialIcons name='verified-user' size={25} style={{marginRight:8}}/> */}

          <View>
            <Text style={globalStyles.titleMedium}>Standard Local </Text>
            <View style={[globalStyles.row, { marginTop: 4 }]}>
              <Feather name="truck" size={15} color={COLORS.primary} />
              <Text style={globalStyles.titleSmall}>
                Receive by April 20 - 25
              </Text>
            </View>
          </View>

          <Feather name="check" color={COLORS.primary} size={28} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={globalStyles.buttonPrimary}>
          <Text style={globalStyles.buttonText}>Confirm</Text>
        </TouchableOpacity>
    </>
  );
};

export default ShippingOptions;

const styles = StyleSheet.create({});
