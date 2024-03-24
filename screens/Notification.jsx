import { Text, ScrollView } from "react-native";
import React from 'react';
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import AppBar from "../navigation/AppBarNavigation";

const Notification = () => {
    const insets = useSafeAreaInsets();
    return (
        <SafeAreaView>
            <AppBar/>
            <ScrollView contentContainerStyle={{ paddingBottom: insets.bottom + 100 }}>
                <Text>Notifications</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Notification