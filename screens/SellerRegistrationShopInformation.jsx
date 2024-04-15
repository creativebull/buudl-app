import { Text, ScrollView } from "react-native";
import React from 'react';
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { SellerRegistrationInfoPage } from '../components';

const SellerRegistrationShopInformation = () => {
    const insets = useSafeAreaInsets();
    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={{ paddingBottom: insets.bottom + 100 }}>
                <SellerRegistrationInfoPage/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SellerRegistrationShopInformation