import { Text, View, TouchableOpacity, TextInput } from "react-native";
import React, { useState, useEffect } from 'react';
import globalStyles from "../../constants/global.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const SellerVerificationStep2 = () => {
    const apiUrl = process.env.API_URL
    const navigation = useNavigation();
    const [userData, setUserData] = useState([]);
    const [userFirstname, setUserFirstname] = useState();
    const [userLastname, setUserLastname] = useState();
    const [userBirthdate, setUserBirthdate] = useState();
    const [userEmail, setUserEmail] = useState();
    const [userAddress, setUserAddress] = useState();

    useEffect(() => {
        getUserLogin();
        getUserData();
    }, []);

    const getUserLogin = async () => {
        try {
            // AsyncStorage.removeItem('token');
            const token = await AsyncStorage.getItem('token');
            console.log('this is your token ',token);
            if (!token) {
                // If not logged in, redirect to Login page
                navigation.navigate('Login');
                return; // Exit the function
            }
        } catch (error) {
            console.error('Failed to check login status:', error);
        }
    };

    const getUserData = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            if (token) {
                // Fetch cart count from backend API
                const response = await axios.get(apiUrl + 'auth/user/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log(response.data.data);
                setUserData(response.data.data);
            }
        } catch (error) {
            console.log("Failed to load bag data due to : ", error);
        }
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
            <View style={globalStyles.sellerVerificationHeaderStep2}>
                <Text style={globalStyles.sellerVerificationStep2Title}>Identity Verification</Text>
            </View>
            <View style={globalStyles.sellerVerificationStep2SubTitle}>
                <Text>The details should match your valid ID</Text> 
            </View>
            
            <View style={globalStyles.sellerVerificationInputGroup}>
                <Text>First Name</Text>
                <TextInput
                    style={globalStyles.sellerVerificationInput}
                    value={userFirstname}
                    onChangeText={setUserFirstname}
                    placeholder="Howard"
                />
            </View>
            
            <View style={globalStyles.sellerVerificationInputGroup}>
                <Text>Last Name</Text>
                <TextInput
                    style={globalStyles.sellerVerificationInput}
                    value={userLastname}
                    onChangeText={setUserLastname}
                    placeholder="Zhou"
                />
            </View>
            
            <View style={globalStyles.sellerVerificationInputGroup}>
                <Text>Date of Birth</Text>
                <TextInput
                    style={globalStyles.sellerVerificationInput}
                    value={userBirthdate}
                    onChangeText={setUserBirthdate}
                    placeholder="mm/dd/yyyy"
                />
            </View>
            
            <View style={globalStyles.sellerVerificationInputGroup}>
                <Text>Email</Text>
                <TextInput
                    style={globalStyles.sellerVerificationInput}
                    value={userBirthdate}
                    onChangeText={setUserBirthdate}
                    placeholder="example@example.com"
                />
            </View>
            
            <View style={globalStyles.sellerVerificationInputGroup}>
                <Text>Email</Text>
                <TextInput
                    style={globalStyles.sellerVerificationInput}
                    value={userBirthdate}
                    onChangeText={setUserBirthdate}
                    placeholder="123 St. New York, USA"
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
                <TouchableOpacity style={globalStyles.sellerContinueBtn} onPress={()=>navigation.navigate('SellerVerificationPage3')}>
                    <Text style={globalStyles.sellerContinueBtnText}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SellerVerificationStep2