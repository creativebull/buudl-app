import { TouchableOpacity, Text, View } from "react-native";
import React from 'react';
import { Ionicons, Fontisto } from "@expo/vector-icons";
import globalStyles from "../constants/global.styles";
import { useNavigation } from "@react-navigation/native";

const AppBarNavigation = () => {
    const navigation = useNavigation();
    return (
        <View style={globalStyles.appBarWrapper}>
            <View style={globalStyles.appBar}>
                <View style={globalStyles.brand}>
                    <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
                        <Text style={globalStyles.TitleLabel}>buudl</Text>
                    </TouchableOpacity>
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