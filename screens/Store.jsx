import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import React from 'react';
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import globalStyles from "../constants/global.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants";

const Store = ({navigation}) => {
    const insets = useSafeAreaInsets();
    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={{ paddingBottom: insets.bottom + 100 }}>
                <View style={globalStyles.goBackContainer}>
                    <View style={globalStyles.goBackRow}> 
                        <TouchableOpacity onPress={()=>navigation.goBack()}>
                            <Ionicons name="chevron-back" size={30} color={COLORS.secondary}/>
                        </TouchableOpacity>
                        <Text style={globalStyles.productDetailHeader}>Store</Text>
                    </View>
                </View>
                
            </ScrollView>
        </SafeAreaView>
    )
}

export default Store

const styles = StyleSheet.create({})