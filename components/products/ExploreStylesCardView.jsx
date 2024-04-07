import { Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import globalStyles from "../../constants/global.styles";
import { useNavigation } from "@react-navigation/native";

const ExploreStylesCardView = ({item}) => {
    const navigation = useNavigation();
    const hostUrl = process.env.HOST_URL
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Store")}>
            <View style={globalStyles.exploreStylesProductContainer}>
                <View style={globalStyles.exploreImageWrapper}>
                    <Image
                        source={{ uri: hostUrl + item.image_url }}
                        style={globalStyles.exploreImage}
                    />
                    <Text style={globalStyles.styleName}>{item.name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default ExploreStylesCardView