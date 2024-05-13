import { ScrollView } from "react-native";
import React from 'react';
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { CartPage } from "../components";

const Cart = () => {
    const insets = useSafeAreaInsets();
    return (
            <ScrollView>
                <CartPage/>
            </ScrollView>
    )
}

export default Cart