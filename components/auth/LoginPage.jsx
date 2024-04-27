import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, TextInput, ActivityIndicator } from "react-native";
import globalStyles from "../../constants/global.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/index";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import CenteredAlert from '../../partials/CenteredAlert';
//add imports 
import * as AuthSession from 'expo-auth-session';
import * as Facebook from 'expo-auth-session/providers/facebook';
// import * as Google from 'expo-auth-session/providers/google';

// import * as WebBrowser from "expo-web-browser";
// import * as Google from "expo-auth-session/providers/google";
// import * as AsyncStorage from "@react-native-async-storage/async-storage";

import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { ANDROID_CLIENT_ID, IOS_CLIENT_ID, WEB_CLIENT_ID } from "@env";

import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-google-signin/google-signin';


const LoginPage = () => {
    const apiUrl = process.env.API_URL
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [buttonLabel, setButtonLabel] = useState('');
    const [onPressAction, setOnPressAction] = useState(() => {});

    const [loading, setLoading] = useState(false);

    // GoogleSignin.configure();

    const [userInfo, setUserInfo] = useState(null);

    //client IDs from .env
    const config = {
      androidClientId: '322753932012-21no161l0d4gs6a1oc3bhovnkjc1vtr2.apps.googleusercontent.com',
      iosClientId: '322753932012-fno0g9kpaq5et8l9d1593bcfd1n54km3.apps.googleusercontent.com',
      webClientId: '322753932012-21no161l0d4gs6a1oc3bhovnkjc1vtr2.apps.googleusercontent.com',
    };
  
    const [request, response, promptAsync] = Google.useAuthRequest(config);
  

    // GoogleSignin.configure({
    //     scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
    //     // webClientId: '<FROM DEVELOPER CONSOLE>', // client ID of type WEB for your server. Required to get the idToken on the user object, and for offline access.
    //     offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    //     hostedDomain: '', // specifies a hosted domain restriction
    //     forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    //     accountName: '', // [Android] specifies an account name on the device that should be used
    //     iosClientId: '322753932012-fno0g9kpaq5et8l9d1593bcfd1n54km3.apps.googleusercontent.com', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    //     googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
    //     openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
    //     profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
    //   });

    useEffect(() => {
        checkIfLoggedIn()
        signInWithGoogle(response)
        
    }, [response]);

    //log the userInfo to see user details
    console.log(JSON.stringify(userInfo))

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
            setLoading(true);
            const response = await axios.post(apiUrl + `auth/login`, {
                email,
                password
            });
            console.log(response.data);

            await AsyncStorage.setItem('token', response.data.access_token);
            if (response.data.message) {
                errorMessage = response.data.message;
            }
            setShowAlert(true);
            setButtonLabel('Profile');
            setOnPressAction(() => () => {
                setShowAlert(false);
                // navigation.navigate('Cart')
                navigation.navigate('Profile');
            });
            // setAlertMessage(errorMessage);
        } catch (error) {
            console.log("Failed to login", error)
        } finally {
            setLoading(false); // Hide loading spinner regardless of success or failure
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
                    {loading && <ActivityIndicator style={globalStyles.spinner} size="large" color="#0000ff" />}
                    <View style={globalStyles.loginSubText}>
                        <Text>Don't have an account?</Text>
                        <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
                            <Text style={globalStyles.loginRegisterRedirectText}> Register Here</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={globalStyles.loginBtn}onPress={()=>{
                        console.log("anas");
                        
                        promptAsync();
                        }}>
    <Text style={globalStyles.loginBtnText}>Login with Google</Text>
                </TouchableOpacity>

<TouchableOpacity style={globalStyles.loginBtn} onPress={loginWithFacebook}>
    <Text style={globalStyles.loginBtnText}>Login with Facebook</Text>
</TouchableOpacity>
                    <Text onPress={() => navigation.navigate('Register')}>Don't have an account?</Text>
                </View>
            </View>
            {showAlert && (
                    <CenteredAlert
                    message={alertMessage}
                    onClose={() => setShowAlert(false)}
                    buttonOnPress={onPressAction}
                    buttonLabel={buttonLabel}
                    />
                )}
        </SafeAreaView>
    )
}

const getUserInfo = async (token) => {
    //absent token

    if (!token) return;
    //present token

    
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      
      const user = await response.json();

      console.log(user);
   
      //api .. task 

    //   const showToast = () => {
        // ToastAndroid.show('Login Successfully by ' + user.email, ToastAndroid.SHORT);
    //   }; 

      

    //   return
      //store user information  in Asyncstorage
    //   await AsyncStorage.setItem("user", JSON.stringify(user));
    //   setUserInfo(user);
    } catch (error) {
      console.error(
        "Failed to fetch user data:",
        response.status,
        response.statusText
      );
    }
  };

const signInWithGoogle = async (response) => {
   
    try {
      // Attempt to retrieve user information from AsyncStorage
    //   const userJSON = await AsyncStorage.getItem("user");

//   return;
    //   if (userJSON) {
    //     // If user information is found in AsyncStorage, parse it and set it in the state
    //     setUserInfo(JSON.parse(userJSON));
        
    //   } else if (response?.type === "success") {

        // If no user information is found and the response type is "success" (assuming response is defined),
        // call getUserInfo with the access token from the response
        getUserInfo(response.authentication.accessToken);
    //   }
    } catch (error) {
      // Handle any errors that occur during AsyncStorage retrieval or other operations
      console.error("Error retrieving user data from AsyncStorage:", error);
    }
  };



const loginWithFacebook = async () => {
    try {
        const { type, params } = await Facebook.authenticateAsync({
            appId: YOUR_FACEBOOK_APP_ID,
            permissions: ['public_profile', 'email'],
        });

        if (type === 'success') {
            // Handle successful login
            console.log(params);
        }
    } catch (error) {
        console.error('Failed to login with Facebook:', error);
    }
};


export default LoginPage