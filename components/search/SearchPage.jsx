import React from 'react';
import { Text, View, TouchableOpacity,  TextInput } from "react-native";
import globalStyles from "../../constants/global.styles";
import { Feather, Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants/index";

const SearchPage = () => {

    return (
        <View>
            <View style={globalStyles.searchContainer}>
                <View>
                    <TouchableOpacity style={globalStyles.searchBtn}>
                        <Ionicons name="camera-outline" size={SIZES.xLarge} color={COLORS.offWhite}/>
                    </TouchableOpacity>
                </View>
                <View style={globalStyles.searchWrapper}>
                    <TextInput
                        style={globalStyles.searchInput}
                        value=""
                        onPressIn={()=>{}}
                        placeholder="What do you fancy for today?"
                    />
                </View>
                <TouchableOpacity>
                    <Feather name="search" size={24} style={globalStyles.searchIcon}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SearchPage