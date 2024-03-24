import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import globalStyles from "../../constants/global.styles";

const OurPicksHeading = () => {
    return (
        <View style={globalStyles.headingContainer}>
            <View style={globalStyles.headingWrapper}>
                <Text style={globalStyles.headingTitle}>Our picks for you</Text>
            </View>
        </View>
    );
}

export default OurPicksHeading