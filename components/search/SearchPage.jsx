import React, { useState } from 'react';
import { View, TouchableOpacity,  TextInput, Flatlist } from "react-native";
import globalStyles from "../../constants/global.styles";
import { Feather, Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants/index";

const SearchPage = ({navigation}) => {
    const [searchKey, setSearchKey] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async() => {
        try {
            const response = await fetch('http://192.168.254.107/api/v1/search/searchHandle');
            setSearchResults(response.data);
        } catch (error) {
            
        }
    }

    return (
        <View>
            <View style={globalStyles.mainSearchContainer}>
                <View style={globalStyles.searchContainer}>
                    <View >
                        <TouchableOpacity style={globalStyles.searchBtn}>
                            <Ionicons name="camera-outline" size={SIZES.xLarge} color={COLORS.offWhite}/>
                        </TouchableOpacity>
                    </View>
                    <View style={globalStyles.searchWrapper}>
                        <TextInput
                            style={globalStyles.searchInput}
                            value={searchKey}
                            onChangeText={setSearchKey}
                            placeholder="What do you fancy for today?"
                        />
                    </View>
                    <TouchableOpacity onPress={()=>handleSearch()}>
                        <Feather name="search" size={24} style={globalStyles.searchIcon}/>
                    </TouchableOpacity>
                </View>
            </View>
            {searchResults.length === 0 ? (
                <View></View>
            ) : (
                <Flatlist/>
            )}
        </View>
    )
}

export default SearchPage