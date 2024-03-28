import { TouchableOpacity, Text, View, ScrollView } from "react-native";
import React from 'react';
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { SearchPage } from "../components";

const Search = () => {
    const insets = useSafeAreaInsets();
    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={{ paddingBottom: insets.bottom + 100 }}>
                <SearchPage/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Search