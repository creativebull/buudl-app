import { Text, ScrollView } from "react-native";
import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import AppBar from "../navigation/AppBarNavigation";

const AccountManagement = () => {
    return (
        <SafeAreaView>
            <AppBar/>
            <ScrollView>
                <Text>Account Management</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default AccountManagement