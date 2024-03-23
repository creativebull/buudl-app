import { Text, ScrollView } from "react-native";
import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import AppBar from "../navigation/AppBarNavigation";

const Profile = () => {
    return (
        <SafeAreaView>
            <AppBar/>
            <ScrollView>
                <Text>Notifications</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile