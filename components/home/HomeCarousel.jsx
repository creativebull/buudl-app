import { View } from "react-native";
import React from "react";
import globalStyles from "../../constants/global.styles";
import { COLORS } from "../../constants/index";
import { SliderBox } from "react-native-image-slider-box";
import SlideOne from "../../assets/images/hero_carousel/slide_1.png";
import SlideTwo from "../../assets/images/hero_carousel/slide_2.png";
import SlideThree from "../../assets/images/hero_carousel/slide_3.png";
import SlideFour from "../../assets/images/hero_carousel/slide_4.png";
import SlideFive from "../../assets/images/hero_carousel/slide_5.png";

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
                ImageComponentStyle={{width: "100%", marginTop: 15}}
                autoplay
                circleLoop
            />
        </View>
    );
}

export default HomeCarousel