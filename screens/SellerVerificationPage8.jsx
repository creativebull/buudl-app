import { Text, ScrollView } from "react-native";
import React from 'react';
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { SellerVerificationStep8 } from '../components';

const SellerVerificationPage8 = () => {
    const insets = useSafeAreaInsets();
    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={{ paddingBottom: insets.bottom + 100 }}>
                <SellerVerificationStep8/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SellerVerificationPage8