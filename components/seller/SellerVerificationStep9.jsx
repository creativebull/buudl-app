import { Text, View, TouchableOpacity, Image } from "react-native";
import React, { useMemo, useState, useEffect } from 'react';
import globalStyles from "../../constants/global.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

const SellerVerificationPage9 = () => {
    const navigation = useNavigation();
    const apiUrl = process.env.API_URL
    const [userFirstname, setUserFirstname] = useState();
    const [userLastname, setUserLastname] = useState();
    const [userBirthdate, setUserBirthdate] = useState();
    const [userEmail, setUserEmail] = useState();
    const [userAddress, setUserAddress] = useState();
    const [idType, setIdType] = useState();
    const [idFront, setIdFront] = useState();
    const [idBack, setIdBack] = useState();
    const [idselfie, setSelfie] = useState();
    const [shopName, setShopName] = useState();
    const [shopTin, setShopTin] = useState();

    useEffect(() => {
        getSellerRegistration();
    }, []);

    const getSellerRegistration = async () => {
        try {
            const firstname = await AsyncStorage.getItem('seller-registration-firstname');
            const lastname = await AsyncStorage.getItem('seller-registration-lastname');
            const birthdate = await AsyncStorage.getItem('seller-registration-birthdate');
            const email = await AsyncStorage.getItem('seller-registration-email');
            const address = await AsyncStorage.getItem('seller-registration-address');
            const idtype = await AsyncStorage.getItem('seller-registration-id-select');
            const idfront = await AsyncStorage.getItem('seller-registration-front-id');
            const idback = await AsyncStorage.getItem('seller-registration-back-id');
            const idselfie = await AsyncStorage.getItem('seller-registration-selfie');
            const shopname = await AsyncStorage.getItem('seller-registration-shop-name');
            const tinid = await AsyncStorage.getItem('seller-registration-tin-id');
            setUserFirstname(firstname);
            setUserLastname(lastname);
            setUserBirthdate(birthdate);
            setUserEmail(email);
            setUserAddress(address);
            setIdType(idtype);
            setIdFront(idfront);
            setIdBack(idback);
            setSelfie(idselfie);
            setShopName(shopname);
            setShopTin(tinid);
        } catch (error) {
            console.error('Failed to check login status:', error);
        }
    };

    const sellerRegistration = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            const response = await axios.post(
                apiUrl + 'seller/review-application',
                {
                    first_name: userFirstname,
                    last_name: userLastname,
                    date_of_birth: userBirthdate,
                    email: userEmail,
                    address: userAddress,
                    id_type: idType,
                    front_id: idFront,
                    back_id: idBack,
                    selfie: idselfie,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            console.log(response);
        } catch (error) {
            console.log("Failed to register seller due to : ", error);
        }
        navigation.navigate('SellerVerificationPage10')
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
                <Text style={globalStyles.sellerVerificationStep2Title}>Review Application</Text>
            </View>
            
            <View style={globalStyles.applicationReviewContainer}>
                <Text style={globalStyles.reviewApplicationTextHeader}>Personal Information</Text>
                <View style={globalStyles.informationContainer}>
                    <Text>Name</Text>
                    <Text>{userFirstname} {userLastname}</Text>
                </View>
                <View style={globalStyles.informationContainer}>
                    <Text>Email</Text>
                    <Text>{userEmail}</Text>
                </View>
                <View style={globalStyles.informationContainer}>
                    <Text>Date of Birth</Text>
                    <Text>{userBirthdate}</Text>
                </View>
            </View>

            <View style={globalStyles.applicationReviewContainer}>
                <Text style={globalStyles.reviewApplicationTextHeader}>Address</Text>
                <View style={globalStyles.informationContainer}>
                    <Text>Present Address</Text>
                    <Text>{userAddress}</Text>
                </View>
                <View style={globalStyles.informationContainer}>
                    <Text>Permanent Address</Text>
                    <Text>{userAddress}</Text>
                </View>
            </View>

            <View style={globalStyles.applicationReviewContainer}>
                <Text style={globalStyles.reviewApplicationTextHeader}>Shop Info</Text>
                <View style={globalStyles.informationContainer}>
                    <Text>Shop Name</Text>
                    <Text>{shopName}</Text>
                </View>
                <View style={globalStyles.informationContainer}>
                    <Text>Shop Tin</Text>
                    <Text>{shopTin}</Text>
                </View>
            </View>

            <View style={globalStyles.applicationReviewContainer}>
                <Text style={globalStyles.reviewApplicationTextHeader}>Identification</Text>
                <View style={globalStyles.informationContainer}>
                    <Text>ID Type</Text>
                    <Text>{idType}</Text>
                </View>
                <View style={globalStyles.informationContainer}>
                    <Text>ID Photo</Text>
                    <Image source={{ uri: idFront }} style={{ width: 75, height: 44 }}/>
                    <Image source={{ uri: idBack }} style={{ width: 75, height: 44 }}/>
                </View>
                <View style={globalStyles.informationContainer}>
                    <Text>Selfie</Text>
                    <Image source={{ uri: idselfie }} style={{ width: 44, height: 75 }}/>
                    <Image style={{ width: 44, height: 75 }}/>
                </View>
            </View>
            
            <View style={globalStyles.sellerFooterContainer}>
                <TouchableOpacity style={globalStyles.sellerContinueBtn} onPress={sellerRegistration}>
                    <Text style={globalStyles.sellerContinueBtnText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SellerVerificationPage9