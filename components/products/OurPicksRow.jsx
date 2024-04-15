import { FlatList, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SIZES } from '../../constants';
import globalStyles from "../../constants/global.styles";
import OurPicksCardView from "./OurPicksCardView";
import { useNavigation } from "@react-navigation/native";
import getLandingOurPicks from "../../hook/getLandingOurPicks";

const OurPicksRow = () => {
    const {data, isLoading, error} = getLandingOurPicks();
    const navigation = useNavigation();
    return (
        <View style={globalStyles.ourPicksListed}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                numColumns={2}
                renderItem={({item}) => <OurPicksCardView item={item}/>}
                contentContainerStyle={{columnGap: SIZES.meduim, flexDirection: "column"}}
            />
            <View style={globalStyles.ourPickCtaWrapper}>
                <TouchableOpacity style={globalStyles.ourPickBtnActive} onPress={() => navigation.navigate("Store")}>
                    <Text style={globalStyles.ourPickCtaText}>See All</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default OurPicksRow