import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import globalStyles from "../../constants/global.styles";

const RelatedProductsHeading = () => {
    return (
        <View style={globalStyles.headingContainer}>
            <View style={globalStyles.headingWrapper}>
                <Text style={globalStyles.headingTitle}>Items you might like</Text>
            </View>
        </View>
    );
}

export default RelatedProductsHeading