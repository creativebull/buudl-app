import { Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import globalStyles from "../../constants/global.styles";
import ImagePlaceholder from "../../assets/images/product_placeholder.png";
import { useNavigation } from "@react-navigation/native";

const ExploreStylesCardView = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Store")}>
            <View style={globalStyles.exploreStylesProductContainer}>
                <View style={globalStyles.exploreImageWrapper}>
                    <Image
                        source={ImagePlaceholder}
                        style={globalStyles.exploreImage}
                    />
                    <Text style={globalStyles.styleName}>Style Name</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default ExploreStylesCardView