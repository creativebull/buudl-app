import { useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getUserDefaultAddress = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiUrl = process.env.API_URL;

  const userAddressData = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      console.log("this is your token ", token);
      if (!token) {
        console.log("No Token");
      }
      const response = await axios.get(apiUrl + "userAddress", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data.data);
      setData(response.data.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    userAddressData();
  }, []);
  const refetch = () => {
    userAddressData();
  };

  return { data, isLoading, error, refetch };
};

export default getUserDefaultAddress;
