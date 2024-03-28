import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import globalStyles from "../../constants/global.styles";
import { useNavigation } from "@react-navigation/native";

const NewArrivalHeading = () => {
    const navigation = useNavigation();
    return (
        <View style={globalStyles.headingContainer}>
            <View style={globalStyles.headingWrapper}>
                <Text style={globalStyles.headingTitle}>New Arrivals</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Shop")}>
                    <Text style={globalStyles.headingUnderline}>more</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default NewArrivalHeading