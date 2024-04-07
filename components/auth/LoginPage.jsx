import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, TextInput } from "react-native";
import globalStyles from "../../constants/global.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/index";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
const apiUrl = process.env.API_URL

const LoginPage = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
            const response = await axios.post(apiUrl + `auth/login`, {
                email,
                password
            });

            await AsyncStorage.setItem('token', response.data.access_token);

            navigation.navigate('Profile');
        } catch (error) {
            console.log("Failed to fetch products", error)
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
                    <View style={globalStyles.loginSubText}>
                        <Text>Don't have an account?</Text>
                        <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
                            <Text style={globalStyles.loginRegisterRedirectText}> Register Here</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default LoginPage