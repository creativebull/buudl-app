import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import globalStyles from "../../constants/global.styles";

const NewArrivalHeading = () => {
    return (
        <View style={globalStyles.headingContainer}>
            <View style={globalStyles.headingWrapper}>
                <Text style={globalStyles.headingTitle}>New Arrivals</Text>
                <TouchableOpacity>
                    <Text style={globalStyles.headingUnderline}>more</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default NewArrivalHeading