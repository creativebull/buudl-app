import { Text, View, TouchableOpacity, TextInput } from "react-native";
import React, { useMemo, useState } from 'react';
import globalStyles from "../../constants/global.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import RadioGroup from 'react-native-radio-buttons-group';

const SellerRegistrationInfoPage = () => {
    const navigation = useNavigation();
    const [shopName, setShopName] = useState([]);

    const radioButtons = useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'Individual',
            value: 'individual',
            selected: true,
            color: COLORS.primary,
        },
        {
            id: '2',
            label: 'Business',
            value: 'business',
            color: COLORS.primary,
        }
    ]), []);
    const [selectedId, setSelectedId] = useState();

    return (
        <View style={globalStyles.sellerRegistrationPageContainer}>
            <View style={globalStyles.sellerGoBackContainer}>
                <View style={globalStyles.sellerGoBackRow}> 
                    <TouchableOpacity onPress={()=>navigation.navigate('AccountManagement')}>
                        <Ionicons name="chevron-back" size={30} color={COLORS.secondary}/>
                    </TouchableOpacity>
                    
                </View>
            </View>
            <View style={globalStyles.sellerHeading}>
                <Text style={globalStyles.sellerRegistrationTitle}>Seller Registration Page</Text>
                <Text style={globalStyles.sellerRegistrationSubTitle}>Aren't you excited? We are!</Text>
            </View>
            <View style={globalStyles.sellerRadioContainer}>
                <Text style={globalStyles.sellerRadioText}>Seller Type</Text>
                <View style={globalStyles.radioContatiner}>
                    <RadioGroup 
                        radioButtons={radioButtons} 
                        onPress={setSelectedId}
                        selectedId={selectedId}
                    />
                </View>
            </View>
            <View style={globalStyles.sellerTypeContainer}>
                {selectedId == 1 && (
                    <View style={globalStyles.sellerInputContainer}>
                        <Text style={globalStyles.sellerInfoText}>Seller Information</Text>
                        <View style={globalStyles.sellerGroupInput}>
                            <Text style={globalStyles.sellerGroupInputLabel}>Shop Name</Text>
                            <TextInput
                                style={globalStyles.sellerShopNameInput}
                                value={shopName}
                                onChangeText={setShopName}
                                placeholder="ZhouStore"
                            />
                        </View>
                    </View>
                )}
                {selectedId == 2 && (
                    <View>
                        <Text>Seller Information</Text>
                    </View>
                )}
            </View>
        </View>
    )
}

export default SellerRegistrationInfoPage