import { Text, ScrollView } from "react-native";
import React from 'react';
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import AppBar from "../navigation/AppBarNavigation";

const AccountManagement = () => {
    const insets = useSafeAreaInsets();
    return (
        <SafeAreaView>
            <AppBar/>
            <ScrollView contentContainerStyle={{ paddingBottom: insets.bottom + 100 }}>
                <Text>Account Management</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default AccountManagement