import { FlatList, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SIZES } from '../../constants';
import globalStyles from "../../constants/global.styles";
import MoreItemsForYouCardView from "./MoreItemsForYouCardView";

const MoreItemsForYouRow = () => {
    const products = [1,2,3,4,5,6,7,8];
    return (
        <View style={globalStyles.popularItemsListed}>
            <FlatList
                data={products}
                numColumns={2}
                renderItem={({item}) => <MoreItemsForYouCardView/>}
                contentContainerStyle={{columnGap: SIZES.meduim, flexDirection: "column"}}
            />
        </View>
    );
}

export default MoreItemsForYouRow