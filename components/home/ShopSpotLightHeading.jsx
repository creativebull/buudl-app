import { Text, View, Image } from "react-native";
import React from "react";
import globalStyles from "../../constants/global.styles";
import BuudlSticker from "../../assets/images/icons/buudl_sticker.png";

const ShopSpotLightHeading = () => {
    return (
        <View style={globalStyles.headingContainer}>
            <View style={globalStyles.headingWrapper}>
                <Text style={globalStyles.headingTitle}>Shop Spotlight</Text>
                <Image source={BuudlSticker} style={globalStyles.buudlSticker}/>
            </View>
        </View>
    );
}

export default ShopSpotLightHeading