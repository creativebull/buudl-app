import { Text, View, TouchableOpacity, Image } from "react-native";
import React from 'react';
import globalStyles from "../../constants/global.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import IdIcon from "../../assets/images/icons/idicon.png";
import CheckMark from "../../assets/images/icons/Ok.png";

const SellerVerificationStep3 = () => {
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
                <Text style={globalStyles.sellerVerificationStep2Title}>Submit an ID</Text>
                <Text>Your ID helps us confirm your identity. Please choose a valid ID to submit from the list below:</Text> 
            </View>

            <View style={globalStyles.sellerVerificationIdWrapper}>
                <View style={globalStyles.sellerVerificationIdContainerActive}>
                    <View style={globalStyles.sellerVerificationIdGroup}>
                        <Image
                            source={IdIcon}
                        />
                        <Text>Philippine Drivers's License</Text>
                    </View>
                    <Image
                        source={CheckMark}
                        style={globalStyles.checkmark}
                    />
                </View>

                <View style={globalStyles.sellerVerificationIdContainer}>
                    <Image
                        source={IdIcon}
                    />
                    <Text>UMID</Text>
                </View>

                <View style={globalStyles.sellerVerificationIdContainer}>
                    <Image
                        source={IdIcon}
                    />
                    <Text>Philippine Nationa ID/Philsys ID</Text>
                </View>

                <View style={globalStyles.sellerVerificationIdContainer}>
                    <Image
                        source={IdIcon}
                    />
                    <Text>Philippine Passport</Text>
                </View>

                <View style={globalStyles.sellerVerificationIdContainer}>
                    <Image
                        source={IdIcon}
                    />
                    <Text>Postal ID</Text>
                </View>

                <View style={globalStyles.sellerVerificationIdContainer}>
                    <Image
                        source={IdIcon}
                    />
                    <Text>SSS ID</Text>
                </View>

                <View style={globalStyles.sellerVerificationIdContainer}>
                    <Image
                        source={IdIcon}
                    />
                    <Text>PRC ID</Text>
                </View>

                <View style={globalStyles.sellerVerificationIdContainer}>
                    <Image
                        source={IdIcon}
                    />
                    <Text>Foreign IDs</Text>
                </View>

                <View style={globalStyles.sellerVerificationIdContainer}>
                    <Image
                        source={IdIcon}
                    />
                    <Text>Other ID</Text>
                </View>
            </View>


            <View style={globalStyles.sellerVerificationBlockBB}>
                <Text style={globalStyles.sellerBlockHeader}>Select "Other ID" if you have the following</Text>
                <Text style={globalStyles.SellerVerificationContentText}>
                    NBI Clearance, ACR-I Card, Government Office (GOCC), Student ID,
                    TIN ID, Voter's ID, Senior Citizens Card, Police Clearance, Philhealth ID,
                    GSIS e-card, ePhil ID, and OFW e-card (OOWWA).
                </Text>
            </View>
            
            <View style={globalStyles.sellerFooterContainer}>
                <TouchableOpacity style={globalStyles.sellerContinueBtn} onPress={()=>navigation.navigate('SellerVerificationPage4')}>
                    <Text style={globalStyles.sellerContinueBtnText}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SellerVerificationStep3