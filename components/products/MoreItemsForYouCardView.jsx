import { Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import globalStyles from "../../constants/global.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import ImagePlaceholder from "../../assets/images/product_placeholder.png";

const MoreItemsForYouCardView = ({item}) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
            <View style={globalStyles.ourPicksContainer}>
                <View style={globalStyles.ourPicksImageWrapper}>
                    <Image
                        source={{ uri: 'http://192.168.254.107' + item.image }}
                        style={globalStyles.arrivalImage}
                    />
                </View>
                <View style={globalStyles.arrivalProductDetails}>
                    <Text style={globalStyles.arrivalProductDetailsTitle} numberOfLines={1}>{item.product_name}</Text>
                    <Text style={globalStyles.arrivalProductDetailsPrice}>P{item.price}</Text>
                    <TouchableOpacity style={globalStyles.addToWishlistBtn}>
                        <Ionicons name="heart-outline" size={35} color={COLORS.primary} />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default MoreItemsForYouCardView