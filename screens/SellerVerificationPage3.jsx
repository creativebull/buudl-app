import { Text, ScrollView } from "react-native";
import React from 'react';
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { SellerVerificationStep3 } from '../components';

const SellerVerificationPage3 = () => {
    const insets = useSafeAreaInsets();
    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={{ paddingBottom: insets.bottom + 100 }}>
                <SellerVerificationStep3/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SellerVerificationPage3