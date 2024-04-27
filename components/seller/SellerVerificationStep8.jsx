import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState, useEffect, useRef } from 'react';
import globalStyles from "../../constants/global.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { Camera, CameraType } from 'expo-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { manipulateAsync, FlipType, SaveFormat } from 'expo-image-manipulator';
import * as FaceDetector from 'expo-face-detector';

const SellerVerificationStep8 = () => {
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

    const getSellerData = async () => {
        try {
            await AsyncStorage.setItem('seller-registration-selfie', capturedImage);
        } catch (error) {
            console.error('Failed to check login status:', error);
        }
    };

    if(capturedImage){
        navigation.navigate("SellerVerificationPage9")
        getSellerData();
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
                <Text style={globalStyles.sellerVerificationStep2Title}>Take  Selfie</Text>
            </View>
            
            <View class={globalStyles.selfieCameraContainer}>
                <Camera 
                    style={globalStyles.selfieCamera}
                    type={type}
                    ref={cameraRef}
                    // onFacesDetected={handleFacesDetected}
                    // faceDetectorSettings={{
                    //     mode: FaceDetector.FaceDetectorMode.fast,
                    //     detectLandmarks: FaceDetector.FaceDetectorLandmarks.none,
                    //     runClassifications: FaceDetector.FaceDetectorClassifications.none,
                    //     minDetectionInterval: 100,
                    //     tracking: true,
                    // }}
                >
                    <View style={globalStyles.cameraButtonContainer}>
                    </View>
                </Camera>
            </View>

            <View style={globalStyles.sellerFooterContainer}>
                <TouchableOpacity style={globalStyles.sellerContinueBtn} onPress={takePicture}>
                    <Text style={globalStyles.sellerContinueBtnText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SellerVerificationStep8