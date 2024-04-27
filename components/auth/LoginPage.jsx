import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, TextInput, ActivityIndicator } from "react-native";
import globalStyles from "../../constants/global.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/index";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import CenteredAlert from '../../partials/CenteredAlert';

const LoginPage = () => {
    const apiUrl = process.env.API_URL
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [buttonLabel, setButtonLabel] = useState('');
    const [onPressAction, setOnPressAction] = useState(() => {});

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        checkIfLoggedIn();
    }, []);

    const checkIfLoggedIn = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            if (token) {
                // Redirect to user profile page if token exists
                navigation.navigate('Profile');
            }
        } catch (error) {
            console.error('Failed to check login status:', error);
        }
    };

    const loginHandle = async() => {
        try {
            setLoading(true);
            const response = await axios.post(apiUrl + `auth/login`, {
                email,
                password
            });
            console.log(response.data);

            await AsyncStorage.setItem('token', response.data.access_token);
            if (response.data.message) {
                errorMessage = response.data.message;
            }
            setShowAlert(true);
            setButtonLabel('Profile');
            setOnPressAction(() => () => {
                setShowAlert(false);
                // navigation.navigate('Cart')
                navigation.navigate('Profile');
            });
            // setAlertMessage(errorMessage);
        } catch (error) {
            console.log("Failed to login", error)
        } finally {
            setLoading(false); // Hide loading spinner regardless of success or failure
        }
    }

    return (
        <SafeAreaView>
            
            <View style={globalStyles.goBackLoginContainer}>
                <View style={globalStyles.goBackLoginRow}> 
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Ionicons name="chevron-back" size={30} color={COLORS.secondary}/>
                    </TouchableOpacity>
                    <Text style={globalStyles.productDetailHeader}>Login</Text>
                </View>
            </View>
            <View style={globalStyles.loginContainer}>
                
                <View style={globalStyles.loginCard}>
                    <TextInput
                        style={globalStyles.loginInput}
                        value={email}
                        onChangeText={setEmail}
                        placeholder="example@test.com"
                    />
                    <TextInput
                        style={globalStyles.loginInput}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        placeholder="Password"
                    />
                    <TouchableOpacity style={globalStyles.loginBtn} onPress={()=>loginHandle()}>
                        <Text style={globalStyles.loginBtnText}>Login</Text>
                    </TouchableOpacity>
                    {loading && <ActivityIndicator style={globalStyles.spinner} size="large" color="#0000ff" />}
                    <View style={globalStyles.loginSubText}>
                        <Text>Don't have an account?</Text>
                        <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
                            <Text style={globalStyles.loginRegisterRedirectText}> Register Here</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {showAlert && (
                    <CenteredAlert
                    message={alertMessage}
                    onClose={() => setShowAlert(false)}
                    buttonOnPress={onPressAction}
                    buttonLabel={buttonLabel}
                    />
                )}
        </SafeAreaView>
    )
}

export default LoginPage