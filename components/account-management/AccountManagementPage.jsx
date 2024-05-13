import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, useWindowDimensions } from "react-native";
import globalStyles from "../../constants/global.styles";
import { COLORS } from "../../constants/index";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import CenteredAlert from '../../partials/CenteredAlert';
import axios from "axios";
import AccountTabs from './AccountTabs';
import AccountSellingTab from './AccountSellingTab';
import AccountMyWalletTab from './AccountMyWalletTab';
import AccountBuyingTab from './AccountBuyingTab';

const AccountManagementPage = () => {
    const apiUrl = process.env.API_URL
    const navigation = useNavigation();
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [buttonLabel, setButtonLabel] = useState('');
    const [onPressAction, setOnPressAction] = useState(() => {});
    const [userData, setUserData] = useState([]);

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
        <View>
            {showAlert && (
                <CenteredAlert
                message={alertMessage}
                onClose={() => setShowAlert(false)}
                buttonOnPress={onPressAction}
                buttonLabel={buttonLabel}
                />
            )}
            <View style={globalStyles.hubViewContainer}>
                <View style={globalStyles.hubInfoContainer}>
                    <View style={globalStyles.hubTextContainer}>
                        <Text style={globalStyles.hubText}>Hub</Text>
                    </View>
                </View>
                <AccountTabs
                    tabs={[
                        { title: 'Selling', render: () => <AccountSellingTab data={userData} /> },
                        { title: 'My Wallet', render: () => <AccountMyWalletTab/> },
                        { title: 'Buying', render: () => <AccountBuyingTab/> },
                    ]}
                    initialTab={0}
                />
            </View>
        </View>
    )
}

export default AccountManagementPage