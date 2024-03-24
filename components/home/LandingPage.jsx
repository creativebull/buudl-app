import React from 'react';
import { Text, View,TouchableOpacity, TextInput } from "react-native";
import globalStyles from "../../constants/global.styles";
import { Feather, Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants/index";
import { useNavigation } from "@react-navigation/native";

const LandingPage = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            <View style={globalStyles.container}>
                <Text style={globalStyles.welcomeText}>Welcome to your Feed, Paul</Text>
                <Text style={globalStyles.welcomeSubText}>We curated this base on what you are into lately</Text>
            </View>

            <View style={globalStyles.searchContainer}>
                <TouchableOpacity>
                    <Feather name="search" size={24} style={globalStyles.searchIcon}/>
                </TouchableOpacity>
                <View style={globalStyles.searchWrapper}>
                    <TextInput
                        style={globalStyles.searchInput}
                        value=""
                        onPressIn={()=>navigation.navigate("Search")}
                        placeholder="What do you fancy for today?"
                    />
                </View>
            </View>
        </View>
    )
}

export default LandingPage