import { FlatList, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SIZES } from '../../constants';
import globalStyles from "../../constants/global.styles";
import PopularItemsCardView from "./PopularItemsCardView";
import { useNavigation } from "@react-navigation/native";
import getLandingPopularItems from "../../hook/getLandingPopularItems";

const OurPicksRow = () => {
    const {data, isLoading, error} = getLandingPopularItems();
    const navigation = useNavigation();
    return (
        <View style={globalStyles.popularItemsListed}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                numColumns={2}
                renderItem={({item}) => <PopularItemsCardView item={item}/>}
                contentContainerStyle={{columnGap: SIZES.meduim, flexDirection: "column"}}
            />
            <View style={globalStyles.popularItemsCtaWrapper}>
                <TouchableOpacity style={globalStyles.popularItemsBtnActive} onPress={() => navigation.navigate("Store")}>
                    <Text style={globalStyles.popularItemsCtaText}>See All</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default OurPicksRow