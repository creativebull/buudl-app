import { FlatList, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SIZES } from '../../constants';
import globalStyles from "../../constants/global.styles";
import ShopSpotLightCardView from "./ShopSpotLightCardView";

const ShopSpotLightRow = () => {
    const products = [1,2,3,4];
    return (
        <View style={globalStyles.shopSpotLightListed}>
            <FlatList
                data={products}
                horizontal
                renderItem={({item}) => <ShopSpotLightCardView/>}
                contentContainerStyle={{columnGap: SIZES.meduim, }}
            />
        </View>
    );
}

export default ShopSpotLightRow