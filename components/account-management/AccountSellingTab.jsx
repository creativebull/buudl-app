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
                <Text>This is selling</Text>
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