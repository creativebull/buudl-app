import { View, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import globalStyles from "../../constants/global.styles";
import Cat1 from "../../assets/images/category/cat_1.png";
import Cat2 from "../../assets/images/category/cat_2.png";
import Cat3 from "../../assets/images/category/cat_3.png";
import Cat4 from "../../assets/images/category/cat_4.png";

const HomeStaggeredView = item => {
    return (
        <View style={globalStyles.categoryContainer}>
            <View style={globalStyles.firstCategoryImageWrapper}>
                <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
                    <View style={globalStyles.categoryImage1}>
                        <Image source={Cat1} style={globalStyles.catImage1}/>
                        <Text style={globalStyles.categoryText1}>Tops</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
                    <View style={globalStyles.categoryImage2}>
                        <Image source={Cat2} style={globalStyles.catImage2}/>
                        <Text style={globalStyles.categoryText2}>Bottoms</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={globalStyles.secondCategoryImageWrapper}>
                <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
                    <View style={globalStyles.categoryImage3}>
                        <Image source={Cat3} style={globalStyles.catImage3}/>
                        <Text style={globalStyles.categoryText3}>Shoes</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
                    <View style={globalStyles.categoryImage4}>
                        <Image source={Cat4} style={globalStyles.catImage4}/>
                        <Text style={globalStyles.categoryText4}>Shorts</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default HomeStaggeredView