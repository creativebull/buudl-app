import { FlatList, View } from "react-native";
import React from "react";
import { SIZES } from '../../constants';
import globalStyles from "../../constants/global.styles";
import MoreItemsForYouCardView from "./MoreItemsForYouCardView";
import getLandingMoreItemsForYou from "../../hook/getLandingMoreItemsForYou";

const MoreItemsForYouRow = () => {
    const {data, isLoading, error} = getLandingMoreItemsForYou();
    return (
        <View style={globalStyles.popularItemsListed}>
            {isLoading ? (
                <ActivityIndicator size={SIZES.xLarge} color={COLORS.primary}/>
            ) : error ? (
                <Text>Something went wrong</Text>
            ) : (
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    renderItem={({item}) => <MoreItemsForYouCardView item={item}/>}
                    contentContainerStyle={{columnGap: SIZES.meduim, flexDirection: "column"}}
                />
            )}
        </View>
    );
}

export default MoreItemsForYouRow