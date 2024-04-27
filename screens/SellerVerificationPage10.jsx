import { Text, ScrollView } from "react-native";
import React from 'react';
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { SellerVerificationStep10 } from '../components';

const SellerVerificationPage10 = () => {
    const insets = useSafeAreaInsets();
    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={{ paddingBottom: insets.bottom + 100 }}>
                <SellerVerificationStep10/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SellerVerificationPage10