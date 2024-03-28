import { View, Image } from "react-native";
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
                <Image source={Cat1} style={globalStyles.categoryImage1}/>
                <Image source={Cat2} style={globalStyles.categoryImage2}/>
            </View>
            <View style={globalStyles.secondCategoryImageWrapper}>
                <Image source={Cat3} style={globalStyles.categoryImage3}/>
                <Image source={Cat4} style={globalStyles.categoryImage4}/>
            </View>
        </View>
    );
}

export default HomeStaggeredView