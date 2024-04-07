import { TouchableOpacity, Text, View } from "react-native";
import React, { useState, useEffect } from 'react';
import { Ionicons, Fontisto } from "@expo/vector-icons";
import globalStyles from "../constants/global.styles";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
const apiUrl = process.env.API_URL

const AppBarNavigation = () => {
    const navigation = useNavigation();
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            getCartCounter();
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const getCartCounter = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            if (token) {
                // Fetch cart count from backend API
                const response = await axios.get(apiUrl + 'cart/cartCounter', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setCartCount(response.data.data);
            }
        } catch (error) {
            
        }
    };
    return (
        <View style={globalStyles.appBarWrapper}>
            <View style={globalStyles.appBar}>
                <View style={globalStyles.brand}>
                    <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
                        <Text style={globalStyles.TitleLabel}>buudl</Text>
                    </TouchableOpacity>
                </View>
                <View style={globalStyles.alignedRight}>
                    <View style={globalStyles.wishlistContainer}>
                        <TouchableOpacity>
                            <Ionicons name='mail' size={24} style={globalStyles.wishlistColor} />
                        </TouchableOpacity>
                    </View>
                    <View style={globalStyles.wishlistContainer}>
                        <TouchableOpacity>
                            <Fontisto name='heart' size={24} style={globalStyles.wishlistColor} />
                        </TouchableOpacity>
                    </View>
                    <View style={globalStyles.cartContainer}>
                        <View style={globalStyles.cartCount}>
                            <Text style={globalStyles.cartNumber}>{cartCount}</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
                            <Fontisto name='shopping-bag' size={24} style={globalStyles.cartColor} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default AppBarNavigation