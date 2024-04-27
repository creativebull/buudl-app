import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, Pressable, Platform, ActivityIndicator } from "react-native";
import globalStyles from "../../constants/global.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/index";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import DateTimePicker from '@react-native-community/datetimepicker';
import CenteredAlert from '../../partials/CenteredAlert';
import {Picker} from '@react-native-picker/picker';

const RegisterPage = () => {
    const navigation = useNavigation();
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [birthday, setDateOfBirth] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [region, setRegion] = useState('');
    const [zip_code, setZipCode] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const phone_area_code = '+63';
    const role_id = 4;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const apiUrl = process.env.API_URL

    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [buttonLabel, setButtonLabel] = useState('');
    const [onPressAction, setOnPressAction] = useState(() => {});

    const [loading, setLoading] = useState(false);

    const toggleDatePicker = () => {
        setShowPicker(!showPicker)
    }

    const onDateChange = ({ type }, selectedDate) => {
        if(type == 'set'){
            const currentDate = selectedDate;
            setDate(currentDate);

            if(Platform.OS === 'android'){
                toggleDatePicker();
                setDateOfBirth(formatDate(currentDate));
            }
        }else{
            toggleDatePicker();
        }
    }

    const formatDate = (rawDate) => {
        let date = new Date(rawDate);

        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();

        month = month < 10 ? `0${month}` : month;
        day = day < 10 ? `0${day}` : day;

        return `${year}-${month}-${day}`;
    }

    const handleNext = () => {
        setStep(step + 1);
    };

    const handlePrev = () => {
        setStep(step - 1);
    };

    const registerEmailCheckHandle = async() => {
        if (email.length < 0) {
            setErrorMessage('Text must be at least 6 characters long');
        } else {
            try {
                setLoading(true);
                const response = await axios.post(apiUrl + `auth/registrationEmailCheck`, {
                    email,
                });
                console.log(response.data);
    
                if(response.data.message === 'Does not exist'){
                    setStep(step + 1);
                }
            } catch (error) {
                console.log("Failed to fetch data", error)
            } finally {
                setLoading(false); // Hide loading spinner regardless of success or failure
            }
        }
    }

    const registerHandle = async() => {
        const phone_number = "123456789";
        const username = "nyor";
        const password = "@dm1n18tR@t0r$";
        const role_id = 4;
        const gender = "Male";
        const street = "123 Main St";
        const city = "Cebu";
        const province = "Minglanilla";
        const region = "Region 7";
        const zip_code = "12345";

        const data = {
            firstname,
            lastname,
            birthday,
            phone_number,
            phone_area_code,
            email,
            username,
            password,
            role_id,
            gender,
            street,
            city,
            province,
            region,
            zip_code
        }

        try {
            setLoading(true);
            await axios.post(apiUrl + 'auth/register', data);
            if (response.data.data) {
                errorMessage = response.data.message;
            }
            console.log(response.data.data);
            setShowAlert(true);
            setButtonLabel('Login');
            setOnPressAction(() => () => {
                setShowAlert(false);
                navigation.navigate('Login')
            });
            setAlertMessage(errorMessage);
            
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false); // Hide loading spinner regardless of success or failure
            navigation.navigate('Login');
        }
    }

    const renderStep1 = () => (
        <View style={globalStyles.loginContainer}>
            <View style={globalStyles.loginCard}>
                <View style={globalStyles.signupHeaderContainer}>
                    <View style={globalStyles.signupHeader}>
                        <Text style={globalStyles.signupHeaderText}>Sign Up</Text>
                    </View>
                    <View style={globalStyles.signupSubText}>
                        <Text style={globalStyles.signupSubTextText}>Be part of our community!</Text>
                    </View>
                </View>
                <TextInput
                    style={globalStyles.loginInput}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="example@test.com"
                />
                {errorMessage ? <Text style={{ color: 'red' }}>{errorMessage}</Text> : null}
                <View style={globalStyles.loginSubText}>
                    <Text style={globalStyles.signupGeneralText}>By continuing, I agree to Buudl's</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                        <Text style={globalStyles.signupGprLink}> Privacy Policy</Text>
                    </TouchableOpacity>
                    <Text style={globalStyles.signupGeneralText}>and</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                        <Text style={globalStyles.signupGprLink}> Terms of Use</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={globalStyles.loginBtn} onPress={()=>registerEmailCheckHandle()}>
                    <Text style={globalStyles.loginBtnText}>Continue</Text>
                </TouchableOpacity>
                {loading && <ActivityIndicator style={globalStyles.spinner} size="large" color="#0000ff" />}
                <View style={globalStyles.loginSubText}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                        <Text style={globalStyles.loginRegisterRedirectText}>Already have an account?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    const renderStep2 = () => (
        <View style={globalStyles.loginContainer}>
            <View style={globalStyles.loginCard}>
                <View style={globalStyles.signupHeaderContainer}>
                    <View style={globalStyles.signupHeader}>
                        <Text style={globalStyles.signupHeaderText}>Sign Up</Text>
                    </View>
                    <View style={globalStyles.signupSubText}>
                        <Text style={globalStyles.signupSubTextText}>Let's get to know you better.</Text>
                    </View>
                </View>
                <View style={globalStyles.registerCtaBtnWrapper}>
                    <TextInput
                        style={globalStyles.registerFirstNameInput}
                        value={firstname}
                        onChangeText={setFirstName}
                        placeholder="First Name"
                    />
                    <TextInput
                        style={globalStyles.registerLastNameInput}
                        value={lastname}
                        onChangeText={setLastName}
                        placeholder="Last Name"
                    />
                </View>
                <Picker
                    selectedValue={gender}
                    onValueChange={(itemValue, itemIndex) =>
                        setGender(itemValue)
                    }
                    style={globalStyles.dropDownStyle}
                >
                    <Picker.Item label="Male" value="male" />
                    <Picker.Item label="Female" value="female" />
                </Picker>
                {showPicker && (
                    <DateTimePicker
                        mode="date"
                        display="spinner"
                        value={date}
                        onChange={onDateChange}
                    />
                )}
                {!showPicker && (
                    <Pressable
                        onPress={toggleDatePicker}
                    >
                        <TextInput
                            style={globalStyles.loginInput}
                            placeholder="September 13, 1996"
                            value={birthday}
                            onChange={setDateOfBirth}
                            editable={false}
                        />
                    </Pressable>
                )}
                <View style={globalStyles.registerCtaBtnWrapper}>
                    <TouchableOpacity style={globalStyles.loginBtn} onPress={()=>handlePrev()}>
                        <Text style={globalStyles.loginBtnText}>Previous</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={globalStyles.loginBtn} onPress={()=>handleNext()}>
                        <Text style={globalStyles.loginBtnText}>Next</Text>
                    </TouchableOpacity>
                </View>
                <View style={globalStyles.loginSubText}>
                    <Text style={globalStyles.signupGeneralText}>By continuing, I agree to Buudl's</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                        <Text style={globalStyles.signupGprLink}> Privacy Policy</Text>
                    </TouchableOpacity>
                    <Text style={globalStyles.signupGeneralText}>and</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                        <Text style={globalStyles.signupGprLink}> Terms of Use</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    const renderStep3 = () => (
        <View style={globalStyles.loginContainer}>
            <View style={globalStyles.loginCard}>
                <View style={globalStyles.signupHeaderContainer}>
                    <View style={globalStyles.signupHeader}>
                        <Text style={globalStyles.signupHeaderText}>Sign Up</Text>
                    </View>
                    <View style={globalStyles.signupSubText}>
                        <Text style={globalStyles.signupSubTextText}>Where are you located.</Text>
                    </View>
                </View>
                <TextInput
                    style={globalStyles.loginInput}
                    placeholder="Street"
                    value={street}
                    onChange={setStreet}
                />
                <TextInput
                    style={globalStyles.loginInput}
                    placeholder="City"
                    value={city}
                    onChange={setCity}
                />
                <TextInput
                    style={globalStyles.loginInput}
                    placeholder="Province"
                    value={province}
                    onChange={setProvince}
                />
                <TextInput
                    style={globalStyles.loginInput}
                    placeholder="Region"
                    value={region}
                    onChange={setRegion}
                />
                <TextInput
                    style={globalStyles.loginInput}
                    placeholder="Zip Code"
                    value={zip_code}
                    onChange={setZipCode}
                />
                <View style={globalStyles.registerCtaBtnWrapper}>
                    <TouchableOpacity style={globalStyles.loginBtn} onPress={()=>handlePrev()}>
                        <Text style={globalStyles.loginBtnText}>Previous</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={globalStyles.loginBtn} onPress={()=>handleNext()}>
                        <Text style={globalStyles.loginBtnText}>Next</Text>
                    </TouchableOpacity>
                </View>
                <View style={globalStyles.loginSubText}>
                    <Text style={globalStyles.signupGeneralText}>By continuing, I agree to Buudl's</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                        <Text style={globalStyles.signupGprLink}> Privacy Policy</Text>
                    </TouchableOpacity>
                    <Text style={globalStyles.signupGeneralText}>and</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                        <Text style={globalStyles.signupGprLink}> Terms of Use</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    const renderStep4 = () => (
        <View style={globalStyles.loginContainer}>
            <View style={globalStyles.loginCard}>
                <View style={globalStyles.signupHeaderContainer}>
                    <View style={globalStyles.signupHeader}>
                        <Text style={globalStyles.signupHeaderText}>What's your phone number?</Text>
                    </View>
                    <View style={globalStyles.signupSubText}>
                        <Text style={globalStyles.signupSubTextText}>We need this to verify it's you.</Text>
                    </View>
                    <View style={globalStyles.signupSubText}>
                        <Text style={globalStyles.signupSubTextText}>Don't worry we will not send you any spam.</Text>
                    </View>
                </View>
                <TextInput
                    style={globalStyles.loginInput}
                    placeholder="Phone Number"
                    value={phone_number}
                    onChange={setPhoneNumber}
                />
                <View style={globalStyles.registerCtaBtnWrapper}>
                    <TouchableOpacity style={globalStyles.loginBtn} onPress={()=>handlePrev()}>
                        <Text style={globalStyles.loginBtnText}>Previous</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={globalStyles.loginBtn} onPress={()=>handleNext()}>
                        <Text style={globalStyles.loginBtnText}>Next</Text>
                    </TouchableOpacity>
                </View>
                <View style={globalStyles.loginSubText}>
                    <Text style={globalStyles.signupGeneralText}>By continuing, I agree to Buudl's</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                        <Text style={globalStyles.signupGprLink}> Privacy Policy</Text>
                    </TouchableOpacity>
                    <Text style={globalStyles.signupGeneralText}>and</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                        <Text style={globalStyles.signupGprLink}> Terms of Use</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    const renderStep5 = () => (
        <View style={globalStyles.loginContainer}>
            <View style={globalStyles.loginCard}>
                <TextInput
                    style={globalStyles.loginInput}
                    placeholder="Username"
                    value={username}
                    onChange={setUsername}
                />
                <TextInput
                    style={globalStyles.loginInput}
                    placeholder="Password"
                    value={password}
                    onChange={setPassword}
                    secureTextEntry
                />
                <View style={globalStyles.registerCtaBtnWrapper}>
                    <TouchableOpacity style={globalStyles.loginBtn} onPress={()=>handlePrev()}>
                        <Text style={globalStyles.loginBtnText}>Previous</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={globalStyles.loginBtn} onPress={()=>registerHandle()}>
                        <Text style={globalStyles.loginBtnText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                {loading && <ActivityIndicator style={globalStyles.spinner} size="large" color="#0000ff" />}
                <View style={globalStyles.loginSubText}>
                    <Text style={globalStyles.signupGeneralText}>By continuing, I agree to Buudl's</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                        <Text style={globalStyles.signupGprLink}> Privacy Policy</Text>
                    </TouchableOpacity>
                    <Text style={globalStyles.signupGeneralText}>and</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                        <Text style={globalStyles.signupGprLink}> Terms of Use</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    const renderCurrentStep = () => {
        switch (step) {
            case 1:
            return renderStep1();
            case 2:
            return renderStep2();
            case 3:
            return renderStep3();
            case 4:
            return renderStep4();
            case 5:
            return renderStep5();
            default:
            return null;
        }
    };

    return (
        <SafeAreaView>
            <View style={globalStyles.goBackLoginContainer}>
                <View style={globalStyles.goBackLoginRow}> 
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Ionicons name="chevron-back" size={30} color={COLORS.secondary}/>
                    </TouchableOpacity>
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
            {renderCurrentStep()}
        </SafeAreaView>
    )
}

export default RegisterPage