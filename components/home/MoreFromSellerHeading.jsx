import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import globalStyles from "../../constants/global.styles";

const MoreFromSellerHeading = () => {
    return (
        <View style={globalStyles.headingContainer}>
            <View style={globalStyles.headingWrapper}>
                <Text style={globalStyles.headingTitle}>More from this Seller</Text>
                <TouchableOpacity>
                    <Text style={globalStyles.headingUnderline}>see more</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default MoreFromSellerHeading