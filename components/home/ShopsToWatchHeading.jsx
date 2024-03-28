import { Text, View, Image } from "react-native";
import React from "react";
import globalStyles from "../../constants/global.styles";
import BuudlStartSticker from "../../assets/images/icons/purplestar.png";

const PopularItemsHeading = () => {
    return (
        <View style={globalStyles.shopToWatchContainer}>
            <View style={globalStyles.headingWrapper}>
                <Text style={globalStyles.headingTitle}>Shops to watch</Text>
                <Image source={BuudlStartSticker} style={globalStyles.shopToWatchStarImage}/>
            </View>
        </View>
    );
}

export default PopularItemsHeading