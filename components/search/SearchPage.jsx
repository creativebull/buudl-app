import React, { useState } from 'react';
import { View, TouchableOpacity, FlatList, TextInput, Text, SafeAreaView } from "react-native";
import globalStyles from "../../constants/global.styles";
import { Feather } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants/index";
import SearchResults from "./SearchResults";
import axios from "axios";
const apiUrl = process.env.API_URL

const SearchPage = ({navigation}) => {
    const [searchKey, setSearchKey] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searchMessage, setSearchMessage] = useState([]);

    const handleSearch = async() => {
        try {
            const response = await axios.get(apiUrl + `search/searchHandle/${searchKey}`);
            setSearchResults(response.data.data);
            setSearchMessage(response.data.message);
        } catch (error) {
            console.log("Failed to fetch products", error)
        }
    }

    return (
        <SafeAreaView>
            <View style={globalStyles.mainSearchContainer}>
                <View style={globalStyles.searchContainer}>
                    <View style={globalStyles.searchWrapper}>
                        <TextInput
                            style={globalStyles.searchInput}
                            value={searchKey}
                            onChangeText={setSearchKey}
                            placeholder="What do you fancy for today?"
                        />
                    </View>
                    <TouchableOpacity onPress={()=>handleSearch()} style={globalStyles.searchBtn}>
                        <Feather name="search" size={SIZES.xLarge} color={COLORS.white}/>
                    </TouchableOpacity>
                </View>
            </View>
            {searchResults.length === 0 ? (
                <View style={globalStyles.noSearchContainer}>
                    <Feather name="search" size={200} color={COLORS.secondary}/>
                    <Text style={globalStyles.noSearchText}>{searchMessage}</Text>
                </View>
            ) : (
                <FlatList
                    data={searchResults}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    renderItem={({item}) => <SearchResults item={item}/>}
                    contentContainerStyle={{columnGap: SIZES.meduim, flexDirection: "column"}}
                />
            )}
        </SafeAreaView>
    )
}

export default SearchPage