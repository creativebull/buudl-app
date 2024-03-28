import { View, TouchableOpacity, Image } from "react-native";
import React from "react";
import globalStyles from "../../constants/global.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import ImagePlaceholder from "../../assets/images/product_placeholder.png";
import { useNavigation } from "@react-navigation/native";

const MoreFromSellerCardView = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
            <View style={globalStyles.exploreStylesProductContainer}>
                <View style={globalStyles.exploreImageWrapper}>
                    <Image
                        source={ImagePlaceholder}
                        style={globalStyles.exploreImage}
                    />
                    <TouchableOpacity>
                        <Ionicons name="heart-outline" size={25} color={COLORS.primary} style={globalStyles.moreFromSellerWishlishBtn}/>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default MoreFromSellerCardView