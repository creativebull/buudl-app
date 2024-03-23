import { TouchableOpacity, Text, View, ScrollView } from "react-native";
import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import AppBar from "../navigation/AppBarNavigation";
import { SearchPage } from "../components";

const Search = () => {
    return (
        <SafeAreaView>
            <AppBar/>
            <ScrollView>
                <SearchPage/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Search