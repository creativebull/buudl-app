import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import globalStyles from "../../constants/global.styles";

const CategoryHeading = () => {
    return (
        <View style={globalStyles.headingContainer}>
            <View style={globalStyles.headingWrapper}>
                <Text style={globalStyles.headingTitle}>Shop by Category</Text>
                <TouchableOpacity>
                    <Text style={globalStyles.headingUnderline}>more</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default CategoryHeading