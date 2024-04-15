import { FlatList, View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { SIZES } from '../../constants';
import globalStyles from "../../constants/global.styles";
import RelatedProductCardView from "./RelatedProductCardView";
import getRelatedItems from "../../hook/getRelatedItems";

const RelatedProductRow = (item) => {
    const {data, isLoading, error} = getRelatedItems(item);
    return (
        <View style={globalStyles.relatedProoductsListed}>
            <FlatList
                data={data}
                keyExtractor={(dataItem) => dataItem.id}
                renderItem={({renderDataItem}) => <RelatedProductCardView item={renderDataItem}/>}
                numColumns={2}
                contentContainerStyle={{columnGap: SIZES.meduim, flexDirection: "column", justifyContent: "space-between"}}
            />
        </View>
    );
}

export default RelatedProductRow