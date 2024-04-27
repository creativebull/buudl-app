import { Text, ScrollView } from "react-native";
import React from 'react';
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { SellerVerificationStep9 } from '../components';

const SellerVerificationPage9 = () => {
    const insets = useSafeAreaInsets();
    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={{ paddingBottom: insets.bottom + 100 }}>
                <SellerVerificationStep9/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SellerVerificationPage9