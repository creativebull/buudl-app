import { View, TouchableOpacity, Image } from "react-native";
import React from "react";
import globalStyles from "../../constants/global.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import ImagePlaceholder from "../../assets/images/product_placeholder.png";

const MoreFromSellerCardView = () => {
    return (
        <TouchableOpacity onPress={()=>{}}>
            <View style={globalStyles.exploreStylesProductContainer}>
                <View style={globalStyles.exploreImageWrapper}>
                    <Image
                        source={ImagePlaceholder}
                        style={globalStyles.exploreImage}
                    />
                    <Ionicons name="heart-outline" size={25} color={COLORS.primary} style={globalStyles.moreFromSellerWishlishBtn}/>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default MoreFromSellerCardView