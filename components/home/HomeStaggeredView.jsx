import { View, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import globalStyles from "../../constants/global.styles";
import Cat1 from "../../assets/images/category/cat_1.png";
import Cat2 from "../../assets/images/category/cat_2.png";
import Cat3 from "../../assets/images/category/cat_3.png";
import Cat4 from "../../assets/images/category/cat_4.png";
import { useNavigation } from "@react-navigation/native";
import getLandingCategory from "../../hook/getLandingCategory";

const HomeStaggeredView = item => {
    const navigation = useNavigation();
    const {data, isLoading, error} = getLandingCategory();
    return (
        <View style={globalStyles.categoryContainer}>
            <View style={globalStyles.firstCategoryImageWrapper}>
                <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("Store")}>
                    <View style={globalStyles.categoryImage1}>
                        <Image source={{ uri: 'http://192.168.254.107' + data[0].image_url}} style={globalStyles.catImage1}/>
                        <Text style={globalStyles.categoryText1}>{data[0].name}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("Store")}>
                    <View style={globalStyles.categoryImage2}>
                        <Image source={{ uri: 'http://192.168.254.107' + data[1].image_url}} style={globalStyles.catImage2}/>
                        <Text style={globalStyles.categoryText2}>{data[1].name}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={globalStyles.secondCategoryImageWrapper}>
                <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("Store")}>
                    <View style={globalStyles.categoryImage3}>
                        <Image source={{ uri: 'http://192.168.254.107' + data[2].image_url}} style={globalStyles.catImage3}/>
                        <Text style={globalStyles.categoryText3}>{data[2].name}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("Store")}>
                    <View style={globalStyles.categoryImage4}>
                        <Image source={{ uri: 'http://192.168.254.107' + data[3].image_url}} style={globalStyles.catImage4}/>
                        <Text style={globalStyles.categoryText4}>{data[3].name}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default HomeStaggeredView