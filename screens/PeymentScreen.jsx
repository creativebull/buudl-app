import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { WebView } from "react-native-webview";
import { useNavigation } from "@react-navigation/native";
const PeymentScreen = ({ route }) => {
  const successUrl = route?.params?.payment_details?.success_redirect_url;
  const failureUrl = route?.params?.payment_details?.failure_redirect_url;
  const invoice_url = route?.params?.payment_details?.invoice_url;

  const [visible, setvisible] = useState(false);
  const navigation = useNavigation();

  const onNavigationStateChange = (webViewState) => {
    const { url, title } = webViewState;
    console.log("url===>", url);
    console.log("====weburl=====", url);
    if (url.includes(successUrl)) {
      navigation.navigate("PaymentSuccess", { type: "success" });
    } else if (url.includes(failureUrl)) {
      navigation.navigate("PaymentSuccess", { type: "error" });
    } else {
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        style={{ flex: 1, marginTop: 8 }}
        source={{
          uri: invoice_url,
        }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        onLoadStart={() => setvisible(true)}
        onLoad={() => setvisible(false)}
        onNavigationStateChange={onNavigationStateChange}
        mixedContentMode={"compatibility"}
      />
      {visible ? <ActivityIndicator /> : null}
    </SafeAreaView>
  );
};

export default PeymentScreen;

const styles = StyleSheet.create({});
