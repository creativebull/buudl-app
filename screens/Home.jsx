import { ScrollView, View } from "react-native";
import React from 'react';
import { SafeAreaView, useSafeAreaInsets  } from "react-native-safe-area-context";
import AppBar from "../navigation/AppBarNavigation";
import { 
    LandingPage, 
    HomeCarousel, 
    NewArrivalHeading, 
    ExploreStylesHeading, 
    HomeHeroBanner, 
    NewArrivalRow, 
    ExploreStylesRow, 
    HomeStaggeredView, 
    CategoryHeading,
    OurPicksHeading,
    OurPicksRow,
    ShopSpotLightHeading,
    ShopSpotLightRow,
    PopularItemsHeading,
    PopularItemsRow,
    ShopsToWatchHeading,
    ShopsToWatchRow,
    MoreItemsForYouHeading,
    MoreItemsForYouRow
} from "../components";

const Home = () => {
    const insets = useSafeAreaInsets();
    return (
        <SafeAreaView style={{ flex: 1}}>
            <AppBar/>
            <ScrollView contentContainerStyle={{ paddingBottom: insets.bottom + 100 }}>
                <LandingPage/>
                {/* <HomeHeroBanner/> */}
                <HomeCarousel/>
                <ExploreStylesHeading/>
                <ExploreStylesRow/>
                <CategoryHeading/>
                <HomeStaggeredView/>
                <NewArrivalHeading/>
                <NewArrivalRow/>
                <OurPicksHeading/>
                <OurPicksRow/>
                <ShopSpotLightHeading/>
                <ShopSpotLightRow/>
                <PopularItemsHeading/>
                <PopularItemsRow/>
                <ShopsToWatchHeading/>
                <ShopsToWatchRow/>
                <MoreItemsForYouHeading/>
                <MoreItemsForYouRow/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home