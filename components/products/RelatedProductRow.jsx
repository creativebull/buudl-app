import { FlatList, View } from "react-native";
import React from "react";
import { SIZES } from '../../constants';
import globalStyles from "../../constants/global.styles";
import RelatedProductCardView from "./RelatedProductCardView";

const RelatedProductRow = () => {
    const products = [1,2,3,4];
    return (
        <View style={globalStyles.exploreStylesListed}>
            <FlatList
                data={products}
                renderItem={({item}) => <RelatedProductCardView/>}
                numColumns={2}
                contentContainerStyle={{columnGap: SIZES.meduim, flexDirection: "column", justifyContent: "space-between"}}
            />
        </View>
    );
}

export default RelatedProductRow