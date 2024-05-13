import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TextInput,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useState } from "react";
import globalStyles from "../constants/global.styles";
import {
  Ionicons,
  Feather,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import { useNavigation,useFocusEffect} from "@react-navigation/native";
import { COLORS } from "../constants";
import {
  BreakDownItem,
  CheckoutProudct,
  Header,
  PaymentMethod,
  ProductCompany,
} from "../components";
import getUserDefaultAddress from "../hook/getUserDefaultAddress";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import getCheckVoucher from "../hook/getCheckVoucher";
import RNModal from "../components/message/RNModal";
// import { NULLIMAGE } from "../assets/images";
const Checkout = ({ route }) => {
  const { voucherData, voucherLoading, refetchVoucher } = getCheckVoucher();
  const {
    data: addressData,
    isLoading: addressLoadign,
    refetch:refetchAddress,
  } = getUserDefaultAddress();
  useFocusEffect(
    React.useCallback(() => {
      refetchAddress(); // Call the refetch function to get the latest address data
    }, [])
  );
  const defaultAddress = addressData?.find(
    (address) => address.is_default === 1
  );
  // console.log("Default Address of user is ===>", defaultAddress?.id);
  const apiUrl = process.env.API_URL;
  const { item } = route.params;
  console.log("Item in checkout ====>",item)
  const [paymentMode, setPaymentMode] = useState("");
  const [voucherModal, setVoucherModal] = useState(false);
  const [voucherInput, setVoucherInput] = useState("");
  const navigation = useNavigation();
  const finalAmount =
    parseInt(item?.price, 10) - parseInt(voucherData?.data?.amount, 10);
  // console.log("Final Ammount is ====>", finalAmount);

  const handleCheckOut = async () => {
    try {
      if(!defaultAddress){
        return Alert.alert("Please Choose Address")
      }
      if(!paymentMode){
        return Alert.alert("Please Choose Payment")
      }
      if(paymentMode=="wallet"){
        return Alert.alert(`${paymentMode} Mode not Supported`)
      }
      const token = await AsyncStorage.getItem("token");
      // console.log(token);
      if (!token) {
        return console.log("No Token");
      }
      let body = {
        address_id: defaultAddress?.id,
        item_price: item?.price,
        voucher_code: voucherData?.data?.code || "",
        voucher_amount: voucherData?.data?.amount || "",
        total: finalAmount ? finalAmount : item?.price,
        mode_of_payment:"card",
      };
      // console.log(body)
      console.log("Body is ===>", body);
      const response = await axios.post(apiUrl + `checkout/${item?.id}`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Response from the Checkout is ----->", response?.data);
      if (response?.data?.status) {
        let payment_details = {
          amount: response?.data?.data?.amount,
          invoice_url: response?.data?.data?.invoice_url,
          success_redirect_url: response?.data?.data?.success_redirect_url,
          failure_redirect_url: response?.data?.data?.failure_redirect_url,
        };
        // console.log("p_d===>",payment_details)
        if(paymentMode=="card" || paymentMode=="gCash"){
          navigation.navigate("PaymentScreen", { payment_details });
        }else{
          navigation.navigate("PaymentSuccess", { payment_details });
        }
      }
      // Alert.alert("Success");
    } catch (error) {
      console.log(error);
    }
  };
  // console.log("Item in checkout ===>", item);
  const handleInputVoucher = () => {

    refetchVoucher(voucherInput);
  };

  return (
    <>   
      <Header title="Checkout" />
      <ScrollView style={globalStyles.mainContainer}>
        <ProductCompany
          name="Beautiful Shop"
          city="Cebu City"
          imageUrl="https://www.bunburycentral.com.au/wp-content/uploads/2018/11/BeautyShop.jpg"
        />
        <CheckoutProudct
          imageUrl={item?.images[0]?.path}
          title={item?.product_name}
          type="P250"
          orderTotal="1"
        />

        <View style={globalStyles.line} />

        <TouchableOpacity
          style={globalStyles.horizontalContainer}
          onPress={() => navigation.navigate("Address")}
        >
          <View>
            <Text style={globalStyles.titleMedium}>Address</Text>
            <Text style={globalStyles.titleGray}>
              {defaultAddress
                ? defaultAddress?.city +
                  " " +
                  defaultAddress?.province +
                  " " +
                  defaultAddress?.zip_code
                : "Set-up Address"}
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={25} color={COLORS.secondary} />
        </TouchableOpacity>

        <View style={globalStyles.line} />

        <TouchableOpacity
          style={globalStyles.horizontalContainerShipping}
          onPress={() => navigation.navigate("ShippingOption")}
        >
          <View>
            <Text style={globalStyles.titleMedium}>Shipping Option</Text>
            <Text style={[globalStyles.title, { paddingVertical: 1.9 }]}>
              Standard Local
            </Text>
            <View style={globalStyles.row}>
              <Feather name="truck" size={15} color={COLORS.primary} />
              <Text style={globalStyles.titleSmall}>
                Receive by April 20 - 25
              </Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={25} color={COLORS.secondary} />
        </TouchableOpacity>

        <View style={globalStyles.line} />

        <View style={{ flexDirection: "row", paddingVertical: 1.5 }}>
          <Text style={globalStyles.noteToSeller}>Note to seller:</Text>
          <TextInput
            style={{ width: "70%", paddingLeft: 10, marginTop: -10 }}
          />
        </View>
        <View style={globalStyles.line} />

        <Text style={globalStyles.paymentMethodText}>Payment Method</Text>

        <PaymentMethod
          paymentMethod="Wallet"
          value="wallet"
          paymentMode={paymentMode}
          setPaymentMode={setPaymentMode}
        />
        <PaymentMethod
          paymentMethod="Debit or credit card"
          value="card"
          paymentMode={paymentMode}
          setPaymentMode={setPaymentMode}
        />
        <PaymentMethod
          paymentMethod="Gcash"
          value="gCash"
          paymentMode={paymentMode}
          setPaymentMode={setPaymentMode}
        />
        <PaymentMethod
          paymentMethod="Cash on Delivery (COD)"
          value="cod"
          paymentMode={paymentMode}
          setPaymentMode={setPaymentMode}
        />

        <TouchableOpacity
          onPress={() => setVoucherModal(true)}
          style={globalStyles.inputVoucher}
        >
          <View style={globalStyles.row}>
            <MaterialCommunityIcons
              name="ticket-confirmation"
              size={20}
              style={{ marginRight: 10 }}
              color={COLORS.primary}
            />
            <Text style={globalStyles.titleMedium}>Input Voucher</Text>
          </View>
          <Ionicons name="chevron-forward" size={25} color={COLORS.secondary} />
        </TouchableOpacity>

        <Text style={globalStyles.paymentMethodText}>Breakdown</Text>
        <BreakDownItem name="Item" value={item?.product_name} />
        <BreakDownItem name="Shipping Fee" value="0" />
        <BreakDownItem
          name="Voucher"
          value={voucherData?.data?.amount || "--"}
        />
        <BreakDownItem
          name="Total Payment"
          value={finalAmount || item?.price}
        />

        <View style={globalStyles.line} />
        <View style={globalStyles.totalPayment}>
          <Text style={globalStyles.primaryTitle}>Total Payment</Text>
          <Text style={globalStyles.primaryTitle}>
            {finalAmount || item?.price}
          </Text>
        </View>
        <View style={globalStyles.line} />

        <TouchableOpacity
          style={globalStyles.buttonPrimary}
          onPress={handleCheckOut}
        >
          <Text style={globalStyles.buttonText}>Buy</Text>
        </TouchableOpacity>
      </ScrollView>

      <RNModal visible={voucherModal} setVisible={setVoucherModal}>
        <View style={globalStyles.modalVoucher}>
          <AntDesign
            name="closecircle"
            color={COLORS.primary}
            size={26}
            style={{ position: "absolute", top: 5, right: 5 }}
            onPress={() => setVoucherModal(false)}
          />
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Enter Voucher Code
          </Text>
          <TextInput
            style={globalStyles.modalVoucherText}
            value={voucherInput}
            onChangeText={(value) => setVoucherInput(value)}
          />
          <TouchableOpacity
            style={globalStyles.buttonPrimary}
            onPress={handleInputVoucher}
          >
            {voucherLoading ? (
              <ActivityIndicator />
            ) : (
              <Text style={globalStyles.buttonText}>Check</Text>
            )}
          </TouchableOpacity>
        </View>
      </RNModal>
    </>
  );
};

export default Checkout;

const styles = StyleSheet.create({});
