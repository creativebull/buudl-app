import { TouchableOpacity, Text, View } from "react-native";
import React from 'react';
import { Ionicons, Fontisto } from "@expo/vector-icons";
import globalStyles from "../constants/global.styles";

const AppBarNavigation = () => {

    return (
        <View style={globalStyles.appBarWrapper}>
            <View style={globalStyles.appBar}>
                <View style={globalStyles.brand}>
                    <Text style={globalStyles.TitleLabel}>buudl</Text>
                </View>
                <View style={globalStyles.alignedRight}>
                    <View style={globalStyles.wishlistContainer}>
                        <TouchableOpacity>
                            <Ionicons name='mail' size={24} style={globalStyles.wishlistColor} />
                        </TouchableOpacity>
                    </View>
                    <View style={globalStyles.wishlistContainer}>
                        <TouchableOpacity>
                            <Fontisto name='heart' size={24} style={globalStyles.wishlistColor} />
                        </TouchableOpacity>
                    </View>
                    <View style={globalStyles.cartContainer}>
                        <View style={globalStyles.cartCount}>
                            <Text style={globalStyles.cartNumber}>8</Text>
                        </View>
                        <TouchableOpacity>
                            <Fontisto name='shopping-bag' size={24} style={globalStyles.cartColor} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default AppBarNavigation