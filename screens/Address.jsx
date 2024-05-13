import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Header } from "../components";
import { Ionicons, Entypo } from "@expo/vector-icons";
import globalStyles from "../constants/global.styles";
import { COLORS } from "../constants";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import getUserDefaultAddress from "../hook/getUserDefaultAddress";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { showMessage } from "../components/message/Message";
const apiUrl = process.env.API_URL;

const Address = () => {
  const navigation = useNavigation();
  const { data, isLoading, refetch } = getUserDefaultAddress();

  const updateUserAddress = async (id) => {
    try {
      const token = await AsyncStorage.getItem("token");
      console.log("this is your token ", token);
      if (!token) {
        return;
      }
      const res = await axios.patch(
        apiUrl + `userAddress/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
      await refetch();
      console.log("Success");
      showMessage({
        type: "success",
        message: "Address Updated",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header title="Address" />
      <View style={globalStyles.addressContainer}>
        {isLoading ? (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <ActivityIndicator size="large" />
          </View>
        ) : (
          data?.map((item, index) => {
            const isDefaultAddress = item?.is_default === 1;
            return (
              <View style={globalStyles.row} key={item?.id}>
                {
                  <TouchableOpacity
                    onPress={() => updateUserAddress(item?.id)}
                    style={[
                      globalStyles.addressCheckBox,
                      isDefaultAddress && { backgroundColor: "black" },
                    ]}
                  >
                    {isDefaultAddress && (
                      <Ionicons
                        name="checkmark-sharp"
                        size={20}
                        style={{
                          alignSelf: "center",
                          marginTop: -3,
                          marginLeft: -1,
                        }}
                        color={"white"}
                      />
                    )}
                  </TouchableOpacity>
                }

                <View style={globalStyles.addressTextContainer}>
                  <Text style={globalStyles.titleMedium}>
                    {isDefaultAddress
                      ? "Default Address"
                      : `Address ${index + 1}`}
                  </Text>
                  <Text style={globalStyles.titleSm}>City : {item?.city}</Text>
                  <Text style={globalStyles.titleSm}>
                    Region: {item?.region}
                  </Text>
                  <Text style={globalStyles.titleSm}>
                    Street: {item?.street}
                  </Text>
                  <Text style={globalStyles.titleSm}>
                    Zip Code: {item?.zip_code}
                  </Text>
                </View>
              </View>
            );
          })
        )}
        <View style={globalStyles.line} />
        <TouchableOpacity
          style={globalStyles.itemCenter}
          onPress={() => navigation.navigate("NewAddress")}
        >
          <Entypo
            name="circle-with-plus"
            size={20}
            style={{ marginRight: 7 }}
            color={COLORS.primary}
          />
          <Text style={globalStyles.titleMedium}>Add New Address</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Address;

const styles = StyleSheet.create({});
