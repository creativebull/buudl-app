import { Text, ScrollView } from "react-native";
import React from 'react';
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { SellerRegisterPage } from '../components';

const SellerRegistration = () => {
    const insets = useSafeAreaInsets();
    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={{ paddingBottom: insets.bottom + 1 }}>
                <SellerRegisterPage/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SellerRegistration