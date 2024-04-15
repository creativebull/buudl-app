import { View, TouchableOpacity, Image, Text } from "react-native";
import React from "react";
import globalStyles from "../../constants/global.styles";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import ImagePlaceholder from "../../assets/images/product_placeholder.png";
import { COLORS } from "../../constants";

const ShopSpotLightCardView = ({item}) => {
    const navigation = useNavigation();
    const hostUrl = process.env.HOST_URL
    console.log(hostUrl);
    return (
        <TouchableOpacity onPress={() => navigation.navigate("SellerShops")}>
            <View style={globalStyles.shopSpotLightContainer}>
                <View style={globalStyles.shopSpotLightWrapper}>
                    <Image
                        source={{ uri: hostUrl + item.shop_image }}
                        style={globalStyles.shopSpotLightImage}
                    />
                </View>
                <View style={globalStyles.shopSpotLightCardFooter}>
                    <View style={globalStyles.shopSpotLightContent}>
                        <View>
                            <Image
                                source={{ uri: hostUrl + item.user.profile_picture }}
                                style={globalStyles.shopSpotImagePlaceholder}
                            />
                        </View>
                        <Text style={globalStyles.shopFooterText}>{item.shop_name}</Text>
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
                    
                    <Text style={globalStyles.ratingText}> ({item.rating})</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default ShopSpotLightCardView