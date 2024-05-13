import { Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import globalStyles from "../../constants/global.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import ImagePlaceholder from "../../assets/images/product_placeholder.png";
import { NULLIMAGE } from "../../assets/images";

const MoreItemsForYouCardView = ({ item }) => {
  const navigation = useNavigation();
  const hostUrl = process.env.HOST_URL;
  console.log(hostUrl);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductDetails", { item })}
    >
      <View style={globalStyles.ourPicksContainer}>
        <View style={globalStyles.ourPicksImageWrapper}>
        <Image
            source={
              item?.images[0]?.path ? { uri: item?.images[0]?.path } : NULLIMAGE
            }
            style={[
              globalStyles.arrivalImage,
              !item?.images[0]?.path && globalStyles.nullImage,
            ]}
          />
        </View>
        <View style={globalStyles.arrivalProductDetails}>
          <Text
            style={globalStyles.arrivalProductDetailsTitle}
            numberOfLines={1}
          >
            {item.product_name}
          </Text>
          <Text style={globalStyles.arrivalProductDetailsPrice}>
            P{item.price}
          </Text>
          <TouchableOpacity style={globalStyles.addToWishlistBtn}>
            <Ionicons name="heart-outline" size={25} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MoreItemsForYouCardView;
