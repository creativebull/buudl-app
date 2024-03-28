import { View, TouchableOpacity, Image, Text } from "react-native";
import React from "react";
import globalStyles from "../../constants/global.styles";
import ImagePlaceholder from "../../assets/images/product_placeholder.png";

const ShopsToWatchCardView = () => {
    return (
        <TouchableOpacity onPress={()=>{}}>
            <View style={globalStyles.shopsToWatchContainer}>
                <View style={globalStyles.shopsToWatchWrapper}>
                    <Image
                        source={ImagePlaceholder}
                        style={globalStyles.shopsToWatchImage}
                    />
                </View>
                <View style={globalStyles.shopsToWatchCardFooter}>
                    <View style={globalStyles.shopsToWatchFooterContent}>
                        <Text style={globalStyles.shopsToWatchFooterText}>Top Sellers</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default ShopsToWatchCardView