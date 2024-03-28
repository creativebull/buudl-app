import { FlatList, View, Image, ActivityIndicator  } from "react-native";
import React from "react";
import { SIZES } from '../../constants';
import globalStyles from "../../constants/global.styles";
import ExploreStylesCardView from "./ExploreStylesCardView";
import Buudl20PecentSticker from "../../assets/images/icons/20percentSticker.png";

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
            <Image source={Buudl20PecentSticker} style={globalStyles.buudl20Sticker}/>
        </View>
    );
}

export default ExploreStylesRow