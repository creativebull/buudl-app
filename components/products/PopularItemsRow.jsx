import { FlatList, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SIZES } from '../../constants';
import globalStyles from "../../constants/global.styles";
import PopularItemsCardView from "./PopularItemsCardView";
import { useNavigation } from "@react-navigation/native";

const OurPicksRow = () => {
    const products = [1,2,3,4];
    const navigation = useNavigation();
    return (
        <View style={globalStyles.popularItemsListed}>
            <FlatList
                data={products}
                numColumns={2}
                renderItem={({item}) => <PopularItemsCardView/>}
                contentContainerStyle={{columnGap: SIZES.meduim, flexDirection: "column"}}
            />
            <View style={globalStyles.popularItemsCtaWrapper}>
                <TouchableOpacity style={globalStyles.popularItemsBtnActive} onPress={() => navigation.navigate("Shop")}>
                    <Text style={globalStyles.popularItemsCtaText}>See All</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default OurPicksRow