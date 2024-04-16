import { Text, View, TouchableOpacity, Image, Button, StyleSheet } from "react-native";
import React, { useState, useEffect, useRef } from 'react';
import globalStyles from "../../constants/global.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { Camera, CameraType } from 'expo-camera';
import { manipulateAsync, FlipType, SaveFormat } from 'expo-image-manipulator';

const SellerVerificationStep5 = () => {
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
                <Text style={globalStyles.sellerVerificationStep2Title}>Front of ID</Text>
            </View>

            <Camera style={styles.camera} type={type} ref={cameraRef}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
                        <Text style={styles.text}>Flip Camera</Text>
                    </TouchableOpacity>
                </View>
            </Camera>

            {capturedImage && (
                <View style={{ flex: 1 }}>
                <Text>Preview of Captured Image:</Text>
                <Image source={{ uri: capturedImage }} style={{ width: 300, height: 300 }} />
                </View>
            )}
            
            <View style={globalStyles.sellerFooterContainer}>
                <TouchableOpacity style={globalStyles.sellerContinueBtn} onPress={takePicture}>
                    <Text style={globalStyles.sellerContinueBtnText}>Take ID photo</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default SellerVerificationStep5