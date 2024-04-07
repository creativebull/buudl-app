import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, TextInput } from "react-native";
import globalStyles from "../../constants/global.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/index";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import CenteredAlert from '../../partials/CenteredAlert';
import axios from "axios";
const apiUrl = process.env.API_URL

const UserProfilePage = () => {
    const navigation = useNavigation();
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [buttonLabel, setButtonLabel] = useState('');
    const [onPressAction, setOnPressAction] = useState(() => {});

    useEffect(() => {
        getUserLogin();
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

    const userLogout = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            await AsyncStorage.removeItem('token');
            const response = await axios.post(
                apiUrl + 'auth/logout',
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            setShowAlert(true);
            setButtonLabel('Login');
            setOnPressAction(() => () => {
                setShowAlert(false);
                navigation.navigate('Login')
            });
            setAlertMessage('Logout Successfull');
        } catch (error) {
            console.log("Failed to logout due to : ", error);
        }
    }

    return (
        <SafeAreaView>
            {showAlert && (
                <CenteredAlert
                message={alertMessage}
                onClose={() => setShowAlert(false)}
                buttonOnPress={onPressAction}
                buttonLabel={buttonLabel}
                />
            )}
            <View style={globalStyles.loginContainer}>
                <TouchableOpacity onPress={()=>userLogout()}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default UserProfilePage