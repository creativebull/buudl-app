import { FlatList, View, Text } from "react-native";
import React from "react";
import { SIZES } from '../../constants';
import globalStyles from "../../constants/global.styles";
import ShopSpotLightCardView from "./ShopSpotLightCardView";
import getLandingShopSpotlight from "../../hook/getLandingShopSpotlight";

const ShopSpotLightRow = () => {
    const {data, isLoading, error} = getLandingShopSpotlight();
    return (
        <View style={globalStyles.shopSpotLightListed}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                horizontal
                renderItem={({item}) => <ShopSpotLightCardView item={item}/>}
                contentContainerStyle={{columnGap: SIZES.meduim, }}
            />
        </View>
    );
}

export default ShopSpotLightRow