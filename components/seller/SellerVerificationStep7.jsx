import { Text, View, TouchableOpacity, Image } from "react-native";
import React from 'react';
import globalStyles from "../../constants/global.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import Tips from "../../assets/images/vectors/tips2.png";

const SellerVerificationStep7 = () => {
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
                <Text style={globalStyles.sellerVerificationStep2Title}>Take a Selfie</Text>
                <Text style={globalStyles.sellerVerificationStep2SubTitle}>We'll turn your camera on for a quick identity check. This will be used to verify your ID.</Text>
            </View>

            <View style={globalStyles.sellerVerificationTipsHeaderContainer}>
                <View style={globalStyles.sellerVerificationTipsToolTipIcon}>
                    <Text style={globalStyles.sellerVerificationToolTipEx}>!</Text>
                </View>
                <Text style={globalStyles.sellerVerificationToolTipText}>Tips for taking a selfie</Text> 
            </View>

            <Image
                source={Tips}
                style={globalStyles.sellerVerificationTips}
            />
            
            <View style={globalStyles.sellerFooterContainer}>
                <TouchableOpacity style={globalStyles.sellerContinueBtn} onPress={()=>navigation.navigate('SellerVerificationPage8')}>
                    <Text style={globalStyles.sellerContinueBtnText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SellerVerificationStep7