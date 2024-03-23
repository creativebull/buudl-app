import { View } from "react-native";
import React from "react";
import globalStyles from "../../constants/global.styles";
import { COLORS, SIZES } from "../../constants/index";
import { SliderBox } from "react-native-image-slider-box";
import SlideOne from "../../assets/images/explore_styles_slides/slide_1.png";
import SlideTwo from "../../assets/images/explore_styles_slides/slide_2.png";
import SlideThree from "../../assets/images/explore_styles_slides/slide_3.png";
import SlideFour from "../../assets/images/explore_styles_slides/slide_4.png";
import SlideFive from "../../assets/images/explore_styles_slides/slide_5.png";

const HomeCarousel = () => {
    const slides = [
        SlideOne,
        SlideTwo,
        SlideThree,
        SlideFour,
        SlideFive
    ];
    return (
        <View style={globalStyles.carouselContainer}>
            <SliderBox 
                images={slides}
                dotColor={COLORS.primary}
                inactiveDotColor={COLORS.secondary}
                ImageComponentStyle={{borderRadius: 15, width: "95%", marginTop: 15}}
                autoplay
                circleLoop
            />
        </View>
    );
}

export default HomeCarousel