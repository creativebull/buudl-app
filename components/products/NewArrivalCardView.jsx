import { Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import globalStyles from "../../constants/global.styles";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { NULLIMAGE } from "../../assets/images";

const NewArrivalCardView = ({ item }) => {
  const navigation = useNavigation();
  const hostUrl = process.env.HOST_URL;
  console.log(hostUrl);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductDetails", { item })}
    >
      <View style={globalStyles.newArrivalProductContainer}>
        <View style={globalStyles.newArrivalImageWrapper}>
          <Image
            source={
              item?.images[0]?.path ? { uri: item?.images[0]?.path } : NULLIMAGE
            }
            style={[
              globalStyles.arrivalImage,
              !item?.images[0]?.path && globalStyles.nullImage
            ]}
          />
          <TouchableOpacity style={globalStyles.addToCartBtn}>
            <Fontisto name="shopping-bag" size={10} color={COLORS.secondary} />
            <Text style={globalStyles.addToCartCounter}>{item.view_count}</Text>
          </TouchableOpacity>
        </View>
        <View style={globalStyles.arrivalProductDetails}>
          <Text
            style={globalStyles.arrivalProductDetailsTitle}
            numberOfLines={1}
          >
            {item.product_name}
          </Text>
          {/* <Text style={globalStyles.arrivalProductDetailsDescription} numberOfLines={2}>
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    </Text> */}
          <Text style={globalStyles.arrivalProductDetailsPrice}>
            P{item.price}
          </Text>
          {/* <Text style={globalStyles.arrivalProductDetailsSeller}>Seller</Text> */}
          <TouchableOpacity style={globalStyles.addToWishlistBtn}>
            {/* <Text>Add to Cart</Text> */}
            <Ionicons name="heart-outline" size={25} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NewArrivalCardView;
