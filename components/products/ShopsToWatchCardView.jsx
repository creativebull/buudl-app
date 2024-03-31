import { View, TouchableOpacity, Image, Text } from "react-native";
import React from "react";
import globalStyles from "../../constants/global.styles";
import { useNavigation } from "@react-navigation/native"

const ShopsToWatchCardView = ({item}) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={()=>navigation.navigate("SellerShops")}>
            <View style={globalStyles.shopsToWatchContainer}>
                <View style={globalStyles.shopsToWatchWrapper}>
                    <Image
                        source={{ uri: 'http://192.168.254.107' + item.shop_image }}
                        style={globalStyles.shopsToWatchImage}
                    />
                </View>
                <View style={globalStyles.shopsToWatchCardFooter}>
                    <View style={globalStyles.shopsToWatchFooterContent}>
                        <Text style={globalStyles.shopsToWatchFooterText}>{item.shop_name}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default ShopsToWatchCardView