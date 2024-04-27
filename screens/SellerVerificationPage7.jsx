import { Text, ScrollView } from "react-native";
import React from 'react';
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { SellerVerificationStep7 } from '../components';

const SellerVerificationPage7 = () => {
    const insets = useSafeAreaInsets();
    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={{ paddingBottom: insets.bottom + 100 }}>
                <SellerVerificationStep7/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SellerVerificationPage7