import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Header, InputText } from "../components";
import globalStyles from "../constants/global.styles";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const NewAddress = () => {
  const apiUrl = process.env.API_URL;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [street, setstreet] = useState("");
  const [province, setProvince] = useState("");

  const handleSaveAddress = async () => {
    const userId = await AsyncStorage.getItem("userId");

    const token = await AsyncStorage.getItem("token");
    console.log("this is your token ", token);
    console.log("User Id is ===>", userId);
    console.log("Token in the save===>", token);
    if (!token) {
      // If not logged in, redirect to Login page
      // navigation.navigate("Login");
      console.log("No Token");
      return; // Exit the functsion
    }
    let body = {
      user_id: userId,
      region: region,
      street: street,
      city: city,
      province: province,
      zip_code: zip,
    };
    console.log("Body is ===>", body);
    try {
      const response = await axios.post(apiUrl + `userAddress`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      Alert.alert("Address Added");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Header title="New Address" />
      <View style={{ flex: 1 }}>
        <InputText
          label="First Name"
          value={firstName}
          onChange={setFirstName}
        />
        <InputText label="Last Name" value={lastName} onChange={setLastName} />
        <InputText label="Region" value={region} onChange={setRegion} />
        <InputText label="City" value={city} onChange={setCity} />
        <InputText label="Zip Code" value={zip} onChange={setZip} />
        <InputText
          label="Street/House No/Unit/Building Name"
          value={street}
          onChange={setstreet}
        />
        <InputText label="Province" value={province} onChange={setProvince} />

        <TouchableOpacity
          style={globalStyles.buttonPrimary}
          onPress={handleSaveAddress}
        >
          <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default NewAddress;

const styles = StyleSheet.create({});
