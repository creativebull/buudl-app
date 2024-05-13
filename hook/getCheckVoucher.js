import { useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showMessage } from "../components/message/Message";

const getCheckVoucher = () => {
  const [voucherData, setVoucherData] = useState({});
  // const [isValidVoucher, setValidVoucher] = useState(false)
  // const [voucherMessage, setVoucherMessage] = useState(false)
  const [voucherLoading, setVoucherLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiUrl = process.env.API_URL;

  const checkVoucher = async (voucherId) => {
    if (!voucherId) {
      return;
    }
    try {
      const token = await AsyncStorage.getItem("token");
      console.log("this is your tokenkk ", voucherId);
      if (!token) {
        console.log("No Token");
      }
      console.log("B");
      const response = await axios.get(apiUrl + `voucher/${voucherId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Voucher Response is ------>", response.data);
      setVoucherData(response.data);
      // setVoucherMessage(true)
      setError(null);
      showMessage({
        type: "success",
        message: "Voucher Found",
      });
      //   setData(response.data);
      //   setVoucherData(response.data);
    } catch (error) {
      // setVoucherMessage(true)
      showMessage({
        type: "danger",
        message: "Voucher Not Found",
      });
      console.log("Error", error);
      setVoucherData({});
      setError(error);
    } finally {
      setVoucherLoading(false);
    }
  };

  useEffect(() => {
    checkVoucher();
  }, []);

  const refetchVoucher = async (voucherId) => {
    await setVoucherLoading(true);
    await checkVoucher(voucherId);
  };

  return { voucherData, voucherLoading, error, refetchVoucher };
};

export default getCheckVoucher;
