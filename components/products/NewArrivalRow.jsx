import { FlatList, View } from "react-native";
import React from "react";
import { SIZES } from '../../constants';
import globalStyles from "../../constants/global.styles";
import NewArrivalCardView from "./NewArrivalCardView";
import getLandingNewArrivals from "../../hook/getLandingNewArrivals";

const NewArrivalRow = () => {
    const {data, isLoading, error} = getLandingNewArrivals();
    return (
        <View style={globalStyles.newArrivalsListed}>
            {isLoading ? (
                <ActivityIndicator size={SIZES.xLarge} color={COLORS.primary}/>
            ) : error ? (
                <Text>Something went wrong</Text>
            ) : (
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => <NewArrivalCardView item={item}/>}
                    horizontal
                    contentContainerStyle={{columnGap: SIZES.meduim}}
                />
            )}
            
        </View>
    );
}

export default NewArrivalRow