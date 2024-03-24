import { FlatList, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SIZES } from '../../constants';
import globalStyles from "../../constants/global.styles";
import OurPicksCardView from "./OurPicksCardView";

const OurPicksRow = () => {
    const products = [1,2,3,4];
    return (
        <View style={globalStyles.ourPicksListed}>
            <FlatList
                data={products}
                numColumns={2}
                renderItem={({item}) => <OurPicksCardView/>}
                contentContainerStyle={{columnGap: SIZES.meduim, flexDirection: "column"}}
            />
            <View style={globalStyles.ourPickCtaWrapper}>
                <TouchableOpacity style={globalStyles.ourPickBtnActive}>
                    <Text style={globalStyles.ourPickCtaText}>See All</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default OurPicksRow