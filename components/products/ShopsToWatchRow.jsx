import { FlatList, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SIZES } from '../../constants';
import globalStyles from "../../constants/global.styles";
import ShopsToWatchCardView from "./ShopsToWatchCardView";

const ShopsToWatchRow = () => {
    const products = [1,2,3,4];
    return (
        <View style={globalStyles.shopsToWatchListed}>
            <FlatList
                data={products}
                renderItem={({item}) => <ShopsToWatchCardView/>}
                horizontal
                contentContainerStyle={{columnGap: SIZES.meduim}}
            />
            <View style={globalStyles.shopsToWatchLearnMoreWrapper}>
                <Text>Be one of them!</Text>
                <TouchableOpacity>
                    <Text style={globalStyles.textUnderline}>Learn how to sell</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default ShopsToWatchRow