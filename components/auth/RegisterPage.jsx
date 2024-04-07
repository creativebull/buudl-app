import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput } from "react-native";
import globalStyles from "../../constants/global.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/index";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
const apiUrl = process.env.API_URL

const RegisterPage = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <SafeAreaView>
            <View style={globalStyles.goBackLoginContainer}>
                <View style={globalStyles.goBackLoginRow}> 
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Ionicons name="chevron-back" size={30} color={COLORS.secondary}/>
                    </TouchableOpacity>
                    <Text style={globalStyles.productDetailHeader}>Register</Text>
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
                    <TouchableOpacity style={globalStyles.loginBtn}>
                        <Text style={globalStyles.loginBtnText}>Login</Text>
                    </TouchableOpacity>
                    <View style={globalStyles.loginSubText}>
                        <Text>Already have an account?</Text>
                        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                            <Text style={globalStyles.loginRegisterRedirectText}> Login Here</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default RegisterPage