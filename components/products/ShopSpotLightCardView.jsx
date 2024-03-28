import { View, TouchableOpacity, Image, Text } from "react-native";
import React from "react";
import globalStyles from "../../constants/global.styles";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import ImagePlaceholder from "../../assets/images/product_placeholder.png";
import { COLORS } from "../../constants";

const ShopSpotLightCardView = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate("SellerShops")}>
            <View style={globalStyles.shopSpotLightContainer}>
                <View style={globalStyles.shopSpotLightWrapper}>
                    <Image
                        source={ImagePlaceholder}
                        style={globalStyles.shopSpotLightImage}
                    />
                </View>
                <View style={globalStyles.shopSpotLightCardFooter}>
                    <View style={globalStyles.shopSpotLightContent}>
                        <View style={globalStyles.shopSpotImagePlaceholder}></View>
                        <Text style={globalStyles.shopFooterText}>Retro Style</Text>
                    </View>
                </View>
            </View>
            <View style={globalStyles.shopSpotRatingWrapper}>
                <View style={globalStyles.ratingWrapper}>
                    {[1,2,3,4,5].map((index) => (
                        <Ionicons 
                            key={index}
                            name="star"
                            color={COLORS.primary}
                            size={12}/>
                    ))}
                    
                    <Text style={globalStyles.ratingText}>(32)</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default ShopSpotLightCardView