import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import globalStyles from "../../constants/global.styles";
import { useNavigation } from "@react-navigation/native";

const MoreFromSellerHeading = () => {
    const navigation = useNavigation();
    return (
        <View style={globalStyles.headingContainer}>
            <View style={globalStyles.headingWrapper}>
                <Text style={globalStyles.headingTitle}>More from this Seller</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Shop")}>
                    <Text style={globalStyles.headingUnderline}>see more</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default MoreFromSellerHeading