import { Text, View } from "react-native";
import React from "react";
import globalStyles from "../../constants/global.styles";

const ExploreStylesHeading = () => {
    return (
        <View style={globalStyles.headingContainer}>
            <View style={globalStyles.headingWrapper}>
                <Text style={globalStyles.headingTitle}>Explore Styles</Text>
            </View>
        </View>
    );
}

export default ExploreStylesHeading