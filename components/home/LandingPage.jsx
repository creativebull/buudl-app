import React from 'react';
import { Text, View,TouchableOpacity, TextInput, Image } from "react-native";
import globalStyles from "../../constants/global.styles";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import BuudlStartSticker from "../../assets/images/icons/purplestar.png";

const LandingPage = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            <View style={globalStyles.container}>
                <Text style={globalStyles.welcomeText}>Welcome to your Feed, Paul</Text>
                <Text style={globalStyles.welcomeSubText}>We curated this base on what you are into lately</Text>
                <Image source={BuudlStartSticker} style={globalStyles.buudlStarSticker}/>
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