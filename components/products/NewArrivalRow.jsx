import { FlatList, View } from "react-native";
import React from "react";
import { SIZES } from '../../constants';
import globalStyles from "../../constants/global.styles";
import NewArrivalCardView from "./NewArrivalCardView";

const NewArrivalRow = () => {
    const products = [1,2,3,4];
    return (
        <View style={globalStyles.newArrivalsListed}>
            <FlatList
                data={products}
                renderItem={({item}) => <NewArrivalCardView/>}
                horizontal
                contentContainerStyle={{columnGap: SIZES.meduim}}
            />
        </View>
    );
}

export default NewArrivalRow