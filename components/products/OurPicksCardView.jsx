import { Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import globalStyles from "../../constants/global.styles";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import ImagePlaceholder from "../../assets/images/product_placeholder.png";

const OurPicksCardView = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
            <View style={globalStyles.ourPicksContainer}>
                <View style={globalStyles.ourPicksImageWrapper}>
                    <Image
                        source={ImagePlaceholder}
                        style={globalStyles.arrivalImage}
                    />
                </View>
                <View style={globalStyles.arrivalProductDetails}>
                    <Text style={globalStyles.arrivalProductDetailsTitle} numberOfLines={1}>Title</Text>
                    <Text style={globalStyles.arrivalProductDetailsPrice}>P500</Text>
                    <TouchableOpacity style={globalStyles.addToWishlistBtn}>
                        <Ionicons name="heart-outline" size={35} color={COLORS.primary} />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default OurPicksCardView