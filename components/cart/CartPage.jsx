import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, FlatList, ActivityIndicator } from "react-native";
import globalStyles from "../../constants/global.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants/index";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import CartList from "./CartList";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import getCartItems from "../../hook/getCartItems";

const RegisterPage = () => {
    const navigation = useNavigation();
    // const [ data, setData ] = useState([]);
    const apiUrl = process.env.API_URL
    const token = AsyncStorage.getItem('token');
    const {data, isLoading, error} = getCartItems();

    useEffect(() => {
        getUserLogin();
    }, []);

    const getUserLogin = async () => {
        try {
            // AsyncStorage.removeItem('token');
            
            if (!token) {
                // If not logged in, redirect to Login page
                navigation.navigate('Login');
                return; // Exit the function
            }
        } catch (error) {
            console.error('Failed to check cart status:', error);
        }
    };

    // const getCartData = async () => {
    //     try {
    //         const response = await axios.post(
    //             apiUrl + 'auth/cart',
    //             {
    //                 headers: {
    //                     Authorization: `Bearer ${token}`
    //                 }
    //             });
    //         setData(response.data.data);
    //     } catch (error) {
    //         console.log("Failed to load bag data due to : ", error);
    //     } 
    // };

    return (
        <SafeAreaView>
            <View style={globalStyles.goBackLoginContainer}>
                <View style={globalStyles.goBackLoginRow}> 
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Ionicons name="chevron-back" size={30} color={COLORS.secondary}/>
                    </TouchableOpacity>
                    <Text style={globalStyles.productDetailHeader}>Cart</Text>
                </View>
            </View>
            <View style={globalStyles.cartItemsContainer}>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => <CartList item={item}/>}
                    contentContainerStyle={{columnGap: SIZES.meduim}}
                />
            </View>
        </SafeAreaView>
    )
}

export default RegisterPage