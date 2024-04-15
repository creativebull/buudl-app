import { Text, View, Image, TouchableOpacity } from "react-native";
import React from 'react';
import globalStyles from "../../constants/global.styles";
import SellerRegistrationBg from "../../assets/images/pages/SellingPreface.png";
import Arrow from "../../assets/images/icons/Arrow_3.png";
import { useNavigation } from "@react-navigation/native";

const SellerRegistration = () => {
    const navigation = useNavigation();
    return (
        <View style={globalStyles.sellerRegistrationContainer}>
            <TouchableOpacity style={globalStyles.closeSellerRegistration} onPress={()=>navigation.goBack()}>
                <Text style={globalStyles.closeText}>X</Text>
            </TouchableOpacity>
            <Image
                source={SellerRegistrationBg}
                style={globalStyles.sellerRegistrationBackgorundImage}
            />
            <View style={globalStyles.sellerImageOverlay}></View>
            <View style={globalStyles.sellerContextContainer}>
                <Text style={globalStyles.sellerRegistrationHeader}>start selling on</Text>
                <Text style={globalStyles.sellerRegistrationCompName}>buudl</Text>
                <Text style={globalStyles.sellerRegistrationTagLine}>Make fashion circular.</Text>
            </View>
            <View style={globalStyles.sellerBottomContextContainer}>
                <Text style={globalStyles.sellerRegistrationBottomHeader}>It's free to list!</Text>
                <Text style={globalStyles.sellerRegistrationBottomHeader}>All we need is some information from you.</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('SellerRegistrationShopInformation')}>
                    <Image
                        source={Arrow}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SellerRegistration