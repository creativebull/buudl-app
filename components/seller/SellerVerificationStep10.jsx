import { Text, View, TouchableOpacity, Image } from "react-native";
import React, { useMemo, useState, useEffect } from 'react';
import globalStyles from "../../constants/global.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import CircleLogo from "../../assets/images/vectors/buudlDiskLogo.png";

const SellerVerificationPage10 = () => {
    const navigation = useNavigation();
    return (
        <View style={globalStyles.sellerRegistrationPageContainer}>
            <View style={globalStyles.sellerGoBackContainer}>
                <View style={globalStyles.sellerGoBackRow}> 
                    <TouchableOpacity onPress={()=>navigation.navigate('AccountManagement')}>
                        <Ionicons name="chevron-back" size={30} color={COLORS.secondary}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={globalStyles.sellerVerificationHeaderStep2}>
                
            </View>
            
            <View style={globalStyles.finalizeApplicationContainer}>
                <View style={globalStyles.informationContainer}>
                    <Image source={CircleLogo} />
                </View>
            </View>

            <View style={globalStyles.finalizeApplicationContainer}>
                <View style={globalStyles.informationContainer}>
                    <Text>Your Application is now Under Review</Text>
                </View>
            </View>

            <View style={globalStyles.finalizeApplicationContainer}>
                <View style={globalStyles.informationContainer}>
                    <Text>We got your application. Kindly give us a maximum</Text>
                </View>
                <Text> of 24 hours to review and evaluate your application</Text>
            </View>
            
            <View style={globalStyles.sellerFooterContainer}>
                <TouchableOpacity style={globalStyles.sellerContinueBtn} onPress={()=>navigation.navigate("AccountManagement")}>
                    <Text style={globalStyles.sellerContinueBtnText}>Done</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SellerVerificationPage10