import { FlatList, View } from "react-native";
import React from "react";
import { SIZES } from '../../constants';
import globalStyles from "../../constants/global.styles";
import MoreFromSellerCardView from "./MoreFromSellerCardView";

const MoreFromSellerRow = () => {
    const products = [1,2,3,4];
    return (
        <View style={globalStyles.exploreStylesListed}>
            <FlatList
                data={products}
                renderItem={({item}) => <MoreFromSellerCardView/>}
                horizontal
                contentContainerStyle={{columnGap: SIZES.meduim}}
            />
        </View>
    );
}

export default MoreFromSellerRow