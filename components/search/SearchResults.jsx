import { Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import globalStyles from "../../constants/global.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const SearchResults = ({item}) => {
    const navigation = useNavigation();
    const hostUrl = process.env.HOST_URL
    return (
        <TouchableOpacity onPress={() => navigation.navigate("ProductDetails", {item})}>
            <View style={globalStyles.ourPicksContainer}>
                <View style={globalStyles.ourPicksImageWrapper}>
                    <Image
                        source={{ uri: hostUrl + item.image }}
                        style={globalStyles.arrivalImage}
                    />
                </View>
                <View style={globalStyles.arrivalProductDetails}>
                    <Text style={globalStyles.arrivalProductDetailsTitle} numberOfLines={1}>{item.product_name}</Text>
                    <Text style={globalStyles.arrivalProductDetailsPrice}>P{item.price}</Text>
                    <TouchableOpacity style={globalStyles.addToWishlistBtn}>
                        <Ionicons name="heart-outline" size={25} color={COLORS.primary} />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default SearchResults