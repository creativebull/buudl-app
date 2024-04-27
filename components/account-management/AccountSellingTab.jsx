import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import globalStyles from "../../constants/global.styles";
import BuudlShopIcon from "../../assets/images/icons/Shop.png";
import { useNavigation } from "@react-navigation/native";

const AccountSellingTab = (userData) => {
    const navigation = useNavigation();
    if(userData.data.is_seller){
        return (
            <View>
                <View style={globalStyles.finalizeApplicationContainer}>
                    <View style={globalStyles.informationContainer}>
                    </View>
                </View>

                <View style={globalStyles.finalizeApplicationContainer}>
                    <View style={globalStyles.informationContainer}>
                        <Text>Looks like you don't have a listing as of the moment</Text>
                    </View>
                </View>

                <View style={globalStyles.finalizeApplicationContainer}>
                    <View style={globalStyles.informationContainer}>
                        <Text>Add one now?</Text>
                    </View>
                </View>
                
                <View style={globalStyles.sellerFooterContainer}>
                    <TouchableOpacity style={globalStyles.sellerContinueBtn} onPress={()=>navigation.navigate("AccountManagement")}>
                        <Text style={globalStyles.sellerContinueBtnText}>Add a listing</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }else{
        return (
            <View style={globalStyles.accountSellerContainer}>
                <View style={globalStyles.sellerHeader}>
                    <Image
                        source={BuudlShopIcon}
                        style={globalStyles.buudlShopIcon}
                    />
                    <Text style={globalStyles.accountSellingSubText}>
                        Embark on your selling journey with us and unlock endless 
                        possibilities. Sell anything to anyone with confidence – we're here 
                        to support you every step of the way.
                    </Text>
                    <TouchableOpacity style={globalStyles.sellNowButton} onPress={()=>navigation.navigate("SellerRegistration")}>
                        <Text style={globalStyles.sellNowButtonText}>Sell now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
};

export default AccountSellingTab;