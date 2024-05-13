import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import globalStyles from "../../constants/global.styles";
import { NULLIMAGE } from "../../assets/images";

const CheckoutProudct = ({ imageUrl, type, title, orderTotal }) => {
  return (
    <View style={globalStyles.checkOutProudctContainer}>
      <View style={globalStyles.horizontalView}>
        <Image
          source={imageUrl ? { uri: imageUrl } : NULLIMAGE}
          style={[globalStyles.checkOutProudctImage,!imageUrl && {height:80,width:80}]}
        />
        <View>
          <Text style={globalStyles.productName}>{title}</Text>
          <Text style={globalStyles.productType}>{type}</Text>
        </View>
      </View>
      <Text style={globalStyles.totalItem}>Order Total : {orderTotal} item</Text>
    </View>
  );
};

export default CheckoutProudct;

const styles = StyleSheet.create({});
