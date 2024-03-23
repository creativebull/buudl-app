import React from 'react';
import { Text, View, Image, TouchableOpacity, Dimensions, TextInput } from "react-native";
import globalStyles from "../../constants/global.styles";
import HomeBanner from "../../assets/images/HomeBanner.png";

const HomeHeroBanner = () => {
    const screenHeight = Dimensions.get('window').height;
    const imageHeight = screenHeight * 0.5;

    return (
        <View>
            <View style={globalStyles.heroBannerContainer}>
                <View style={[globalStyles.imageContainer, { height: imageHeight }]}>
                    <Image
                        style={globalStyles.image}
                        source={HomeBanner}
                        resizeMode="cover"
                    />
                    <View style={globalStyles.overlay}>
                        <Text style={globalStyles.overlayTitleText}>Find Your Style</Text>
                        <Text style={globalStyles.overlaySubText}>Be part of our community. Thrift. Shop. Circular fashion. Save earth.</Text>
                        <TouchableOpacity style={globalStyles.overlayButton}>
                            <Text style={globalStyles.overlayButtonText}>Shop</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </View>
    )
}

export default HomeHeroBanner