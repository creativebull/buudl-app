import { FlatList, Text, View } from "react-native";
import React from "react";
import { SIZES } from '../../constants';
import globalStyles from "../../constants/global.styles";
import ExploreStylesCardView from "./ExploreStylesCardView";

const ExploreStylesRow = () => {
    const products = [1,2,3,4];
    return (
        <View style={globalStyles.exploreStylesListed}>
            <FlatList
                data={products}
                renderItem={({item}) => <ExploreStylesCardView/>}
                horizontal
                contentContainerStyle={{columnGap: SIZES.meduim}}
            />
        </View>
    );
}

export default ExploreStylesRow