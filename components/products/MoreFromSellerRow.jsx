import { FlatList, View, Text } from "react-native";
import React from "react";
import { SIZES } from '../../constants';
import globalStyles from "../../constants/global.styles";
import MoreFromSellerCardView from "./MoreFromSellerCardView";
import getMoreFromSeller from "../../hook/getMoreFromSeller";

const MoreFromSellerRow = ({item}) => {
    const {data, isLoading, error} = getMoreFromSeller(item);
    return (
        <View style={globalStyles.exploreStylesListed}>
            {isLoading ? (
                <ActivityIndicator size={SIZES.xLarge} color={COLORS.primary}/>
            ) : error ? (
                <Text>Something went wrong</Text>
            ) : (
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => <MoreFromSellerCardView item={item}/>}
                    horizontal
                    contentContainerStyle={{columnGap: SIZES.meduim}}
                />
            )}
            
        </View>
    );
}

export default MoreFromSellerRow