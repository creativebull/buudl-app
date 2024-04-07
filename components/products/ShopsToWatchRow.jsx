import { FlatList, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SIZES } from '../../constants';
import globalStyles from "../../constants/global.styles";
import ShopsToWatchCardView from "./ShopsToWatchCardView";
import getShopsToWatch from "../../hook/getShopsToWatch";

const ShopsToWatchRow = () => {
    const {data, isLoading, error} = getShopsToWatch();
    return (
        <View style={globalStyles.shopsToWatchListed}>
            {isLoading ? (
                <ActivityIndicator size={SIZES.xLarge} color={COLORS.primary}/>
            ) : error ? (
                <Text>Something went wrong</Text>
            ) : (
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => <ShopsToWatchCardView item={item}/>}
                    horizontal
                    contentContainerStyle={{columnGap: SIZES.meduim}}
                />
            )}
            <View style={globalStyles.shopsToWatchLearnMoreWrapper}>
                <Text style={globalStyles.shopsToWatchInitialText}>Be one of them!</Text>
                <TouchableOpacity>
                    <Text style={globalStyles.textUnderline}>Learn how to sell</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default ShopsToWatchRow