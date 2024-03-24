import { Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import globalStyles from "../../constants/global.styles";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import ImagePlaceholder from "../../assets/images/product_placeholder.png";


const NewArrivalCardView = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
            <View style={globalStyles.newArrivalProductContainer}>
                <View style={globalStyles.newArrivalImageWrapper}>
                    <Image
                        source={ImagePlaceholder}
                        style={globalStyles.arrivalImage}
                    />
                    <TouchableOpacity style={globalStyles.addToCartBtn}>
                        <Fontisto name='shopping-bag' size={10} color={COLORS.secondary} />
                        <Text style={globalStyles.addToCartCounter}>4</Text>
                    </TouchableOpacity>
                </View>
                <View style={globalStyles.arrivalProductDetails}>
                    <Text style={globalStyles.arrivalProductDetailsTitle} numberOfLines={1}>Title</Text>
                    {/* <Text style={globalStyles.arrivalProductDetailsDescription} numberOfLines={2}>
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    </Text> */}
                    <Text style={globalStyles.arrivalProductDetailsPrice}>P500</Text>
                    {/* <Text style={globalStyles.arrivalProductDetailsSeller}>Seller</Text> */}
                    <TouchableOpacity style={globalStyles.addToWishlistBtn}>
                        {/* <Text>Add to Cart</Text> */}
                        <Ionicons name="heart-outline" size={35} color={COLORS.primary} />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default NewArrivalCardView