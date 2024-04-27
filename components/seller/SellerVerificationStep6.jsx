import { Text, View, TouchableOpacity, Image, Button, StyleSheet } from "react-native";
import React, { useState, useEffect, useRef } from 'react';
import globalStyles from "../../constants/global.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { Camera, CameraType } from 'expo-camera';
import { manipulateAsync, FlipType, SaveFormat } from 'expo-image-manipulator';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SellerVerificationStep6 = () => {
    const navigation = useNavigation();

    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [capturedImage, setCapturedImage] = useState(null);
    const cameraRef = useRef(null);

    useEffect(() => {
        requestPermission();
        toggleCameraType();
    }, []);

    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    if (permission === null) {
        return <View><Text>Requesting camera permission...</Text></View>;
    }

    if (permission === false) {
        return <View><Text>No access to camera</Text></View>;
    }

    const takePicture = async () => {
        if (cameraRef.current) {
            const { uri } = await cameraRef.current.takePictureAsync();
            const resizedImage = await manipulateAsync(
                uri,
                [{ resize: { width: 500 } }],
                { compress: 0.8, format: 'jpeg' }
            );
            setCapturedImage(resizedImage.uri);
        }
    };

    const setSellerData = async () => {
        try {
            await AsyncStorage.setItem('seller-registration-back-id', capturedImage);
        } catch (error) {
            console.error('Failed to check login status:', error);
        }
    };

    if(capturedImage){
        navigation.navigate("SellerVerificationPage7")
        setSellerData();
    }

    return (
        <View style={globalStyles.sellerRegistrationPageContainerBG}>
            <View style={globalStyles.sellerGoBackContainer}>
                <View style={globalStyles.sellerGoBackRow}> 
                    <TouchableOpacity onPress={()=>navigation.navigate('AccountManagement')}>
                        <Ionicons name="chevron-back" size={30} color={COLORS.white}/>
                    </TouchableOpacity>
                    
                </View>
            </View>
            <View style={globalStyles.sellerVerificationHeaderStep2}>
                <Text style={globalStyles.sellerVerificationStep5Title}>Back of ID</Text>
                <Text style={globalStyles.sellerVerificationStep5SubTitle}>Postion your ID in the frame</Text>
            </View>

            <View class={globalStyles.cameraContainer}>
                <Camera style={globalStyles.camera} type={type} ref={cameraRef}>
                    <View style={globalStyles.cameraButtonContainer}>
                        <TouchableOpacity style={globalStyles.reverseCameraButton} onPress={toggleCameraType}>
                            <Ionicons name="camera-reverse-outline" size={30} color={COLORS.white}/>
                        </TouchableOpacity>
                    </View>
                </Camera>
            </View>

            {/* {capturedImage && (
                <View style={{ flex: 1 }}>
                <Text>Preview of Captured Image:</Text>
                <Image source={{ uri: capturedImage }} style={{ width: 300, height: 300 }} />
                </View>
            )} */}

            <View style={globalStyles.photoTips}>
                <View style={globalStyles.photoTipsHeaderContainer}>
                    <Ionicons name="alert-circle" size={30} color={COLORS.white}/>
                    <Text style={globalStyles.photoTipsHeaderText}>   Tips for taking an ID photo: </Text>
                </View>
                <View style={globalStyles.tipsListContainer}>
                    <Text style={globalStyles.tipsListText}>* ID is completely within the frame</Text>
                    <Text style={globalStyles.tipsListText}>* ID is not expired</Text>
                    <Text style={globalStyles.tipsListText}>* ID image is clear and in a well-lit environment</Text>
                    <Text style={globalStyles.tipsListText}>* Use a physical ID and not a digital ID</Text>
                </View>
            </View>
            
            <View style={globalStyles.sellerFooterContainerBrn}>
                <TouchableOpacity style={globalStyles.sellerContinueBtnBrown} onPress={takePicture}>
                    <Ionicons name="camera" size={30} color={COLORS.white}/>
                    <Text style={globalStyles.sellerContinueBtnText}> Take ID photo</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SellerVerificationStep6