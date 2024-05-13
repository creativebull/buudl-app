import { Text, View, TouchableOpacity } from "react-native";
import React from 'react';
import globalStyles from "../../constants/global.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const SellerVerificationPage1 = () => {
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
            <View style={globalStyles.sellerVerificationHeader}>
                <View style={globalStyles.sellerVertificationGroupHeader}>
                    <Text style={globalStyles.sellerVerificationTitle}>Complete your </Text>
                    <Text style={globalStyles.sellerVerificationTitleOrange}>Buudl</Text>
                </View>
                <Text style={globalStyles.sellerVerificationTitle}>experience</Text>
                <Text style={globalStyles.sellerVerificationSubTitle}>It's easy, it's free. It's fun.</Text>
            </View>
            <View style={globalStyles.sellerVerificationBlockBB}>
                <Text style={globalStyles.sellerBlockHeader}>Become a verified Seller in 3 easy steps:</Text>
                <View style={globalStyles.sellerVerificationGroupBlock}>
                    <View style={globalStyles.sellerVerficationPointerBG}>
                        <Text style={globalStyles.sellerVerificationBlockBGText}>1</Text>
                    </View>
                    <Text style={globalStyles.SellerVerificationPointerText}>Enter your personal information</Text>
                </View>
                <View style={globalStyles.sellerVerificationGroupBlock}>
                    <View style={globalStyles.sellerVerficationPointerBG}>
                        <Text style={globalStyles.sellerVerificationBlockBGText}>2</Text>
                    </View>
                    <Text style={globalStyles.SellerVerificationPointerText}>Submit your ID</Text>
                </View>
                <View style={globalStyles.sellerVerificationGroupBlock}>
                    <View style={globalStyles.sellerVerficationPointerBG}>
                        <Text style={globalStyles.sellerVerificationBlockBGText}>3</Text>
                    </View>
                    <Text style={globalStyles.SellerVerificationPointerText}>Take a selfie</Text>
                </View>
                <View style={globalStyles.sellerVerificationGroupBlock}>
                    <View style={globalStyles.sellerVerficationPointerBgSmall}>
                        <Text style={globalStyles.sellerVerificationBlockBGText}>!</Text>
                    </View>
                    <Text style={globalStyles.SellerVerificationPointerSmallText}>Please make sure to enter the correct information</Text>
                </View>
            </View>
            <View style={globalStyles.sellerVerificationBlockBB}>
                <Text style={globalStyles.sellerBlockHeader}>Be part of our trusted community</Text>
                <Text style={globalStyles.SellerVerificationContentText}>
                    At Buudl, we're all about building a supportive and secure community for both 
                    sellers and buyers. By getting verified, you're not only earning trust from buyers 
                    but also helping us maintain a safe and reliable marketplace for everyone. We genuinely 
                    care about fostering a positive environment where both sellers and buyers feel confident 
                    and valued.
                </Text>
            </View>
            <View style={globalStyles.sellerVerificationBlockBB}>
                <Text style={globalStyles.sellerBlockHeader}>Data Privacy</Text>
                <Text style={globalStyles.SellerVerificationContentText}>
                    To protect your information and safety on Buudl, we conduct periodic updates to ensure that 
                    your data is up to date. Your personal data will always remain secured and processed with the 
                    set of guidelines under the Data Privacy Act of 2012. Visit Buudl’s Privacy Statement to 
                    learn more about how we process your data.
                </Text>
            </View>
            
            <View style={globalStyles.sellerFooterContainer}>
                <TouchableOpacity style={globalStyles.sellerContinueBtn} onPress={()=>navigation.navigate('SellerVerificationPage2')}>
                    <Text style={globalStyles.sellerContinueBtnText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SellerVerificationPage1