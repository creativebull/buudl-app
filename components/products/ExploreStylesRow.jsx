import { FlatList, View, Image, ActivityIndicator, Text  } from "react-native";
import React from "react";
import { COLORS, SIZES } from '../../constants';
import globalStyles from "../../constants/global.styles";
import ExploreStylesCardView from "./ExploreStylesCardView";
import Buudl20PecentSticker from "../../assets/images/icons/20percentSticker.png";
import getExploreStyles from "../../hook/getExploreStyles";

const ExploreStylesRow = () => {
    const {data, isLoading, error} = getExploreStyles();
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
                    renderItem={({item}) => <ExploreStylesCardView item={item}/>}
                    horizontal
                    contentContainerStyle={{columnGap: SIZES.meduim}}
                />
            )}
            <Image source={Buudl20PecentSticker} style={globalStyles.buudl20Sticker}/>
        </View>
    );
}

export default ExploreStylesRow