import { Text, View, TouchableOpacity, TextInput } from "react-native";
import React, { useMemo, useState, useEffect } from 'react';
import globalStyles from "../../constants/global.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import RadioGroup from 'react-native-radio-buttons-group';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SellerRegistrationInfoPage = () => {
    const navigation = useNavigation();
    const [shopName, setShopName] = useState();
    const [shopTin, setShopTin] = useState();

    const radioButtons = useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'Individual',
            value: 'individual',
            selected: true,
            color: COLORS.primary,
        },
        {
            id: '2',
            label: 'Business',
            value: 'business',
            color: COLORS.primary,
        }
    ]), []);
    const [selectedId, setSelectedId] = useState();

    const setSellerData = async () => {
        try {
            await AsyncStorage.setItem('seller-registration-shop-name', shopName);
            await AsyncStorage.setItem('seller-registration-tin-id', shopTin);
        } catch (error) {
            console.error('Failed to check login status:', error);
        }
    };

    function goToNextPage(){
        navigation.navigate("SellerVerificationPage1")
        setSellerData();
    }

    return (
        <View style={globalStyles.sellerRegistrationPageContainer}>
            <View style={globalStyles.sellerGoBackContainer}>
                <View style={globalStyles.sellerGoBackRow}> 
                    <TouchableOpacity onPress={()=>navigation.navigate('AccountManagement')}>
                        <Ionicons name="chevron-back" size={30} color={COLORS.secondary}/>
                    </TouchableOpacity>
                    
                </View>
            </View>
            <View style={globalStyles.sellerHeading}>
                <Text style={globalStyles.sellerRegistrationTitle}>Seller Registration Page</Text>
                <Text style={globalStyles.sellerRegistrationSubTitle}>Aren't you excited? We are!</Text>
            </View>
            <View style={globalStyles.sellerRadioContainer}>
                <Text style={globalStyles.sellerRadioText}>Seller Type</Text>
                <View style={globalStyles.radioContatiner}>
                    <RadioGroup 
                        radioButtons={radioButtons} 
                        onPress={setSelectedId}
                        selectedId={selectedId}
                    />
                </View>
            </View>
            <View style={globalStyles.sellerTypeContainer}>
                {selectedId == 1 && (
                    <View style={globalStyles.sellerInputContainer}>
                        <Text style={globalStyles.sellerInfoText}>Seller Information</Text>
                        <View style={globalStyles.sellerGroupInput}>
                            <Text style={globalStyles.sellerGroupInputLabel}>Shop Name</Text>
                            <TextInput
                                style={globalStyles.sellerShopNameInput}
                                value={shopName}
                                onChangeText={setShopName}
                                placeholder="ZhouStore"
                            />
                        </View>
                        <View style={globalStyles.spacer}></View>
                        <View style={globalStyles.sellerGroupInput}>
                            <Text style={globalStyles.sellerGroupInputLabel}>TIN</Text>
                            <TextInput
                                style={globalStyles.sellerShopNameInput}
                                value={shopTin}
                                onChangeText={setShopTin}
                                placeholder="999-999-999"
                            />
                        </View>
                        <View style={globalStyles.sellerFooterContainer}>
                            <View style={globalStyles.loginSubText}>
                                <Text style={globalStyles.signupGeneralText}>By continuing, I agree to Buudl's</Text>
                                <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                                    <Text style={globalStyles.signupGprLink}> Privacy Policy</Text>
                                </TouchableOpacity>
                                <Text style={globalStyles.signupGeneralText}>and</Text>
                                <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                                    <Text style={globalStyles.signupGprLink}> Terms of Use</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={globalStyles.sellerContinueBtn} onPress={()=>navigation.navigate('SellerVerificationPage1')}>
                                <Text style={globalStyles.sellerContinueBtnText}>Continue</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                {selectedId == 2 && (
                    <View style={globalStyles.sellerInputContainer}>
                        <Text style={globalStyles.sellerInfoText}>Seller Information</Text>
                        <View style={globalStyles.sellerGroupInput}>
                            <Text style={globalStyles.sellerGroupInputLabel}>Registered Name</Text>
                            <TextInput
                                style={globalStyles.sellerShopNameInput}
                                value={shopName}
                                onChangeText={setShopName}
                                placeholder="ZhouStore"
                            />
                        </View>
                        <View style={globalStyles.spacer}></View>
                        <View style={globalStyles.sellerGroupInput}>
                            <Text style={globalStyles.sellerGroupInputLabel}>TIN</Text>
                            <TextInput
                                style={globalStyles.sellerShopNameInput}
                                value={shopName}
                                onChangeText={setShopName}
                                placeholder="999-999-999"
                            />
                        </View>
                        <View style={globalStyles.sellerFooterContainer}>
                            <View style={globalStyles.loginSubText}>
                                <Text style={globalStyles.signupGeneralText}>By continuing, I agree to Buudl's</Text>
                                <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                                    <Text style={globalStyles.signupGprLink}> Privacy Policy</Text>
                                </TouchableOpacity>
                                <Text style={globalStyles.signupGeneralText}>and</Text>
                                <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                                    <Text style={globalStyles.signupGprLink}> Terms of Use</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={globalStyles.sellerContinueBtn} onPress={goToNextPage}>
                                <Text style={globalStyles.sellerContinueBtnText}>Continue</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </View>
        </View>
    )
}

export default SellerRegistrationInfoPage