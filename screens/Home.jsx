import { ScrollView, View } from "react-native";
import React from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import AppBar from "../navigation/AppBarNavigation";
import {
  LandingPage,
  HomeCarousel,
  NewArrivalHeading,
  ExploreStylesHeading,
  HomeHeroBanner,
  NewArrivalRow,
  ExploreStylesRow,
  OurPicksHeading,
  OurPicksRow,
  ShopSpotLightHeading,
  ShopSpotLightRow,
  PopularItemsHeading,
  PopularItemsRow,
  ShopsToWatchHeading,
  ShopsToWatchRow,
  MoreItemsForYouHeading,
  MoreItemsForYouRow,
} from "../components";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Home = () => {
  const insets = useSafeAreaInsets();
  const t = async()=>{
    await AsyncStorage.clear()
  }
  React.useEffect(() => {
    // t();
  }, [])
  

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppBar />
      <ScrollView
        contentContainerStyle={{ paddingBottom: insets.bottom + 100 }}
      >
        <LandingPage />
        <HomeHeroBanner />
        <HomeCarousel />
        <ExploreStylesHeading />
        <ExploreStylesRow />
        {/* <CategoryHeading/> */}
        {/* <HomeStaggeredView/> */}
        <NewArrivalHeading />
        <NewArrivalRow />
        <OurPicksHeading />
        <OurPicksRow />
        <ShopSpotLightHeading />
        <ShopSpotLightRow />
        <PopularItemsHeading />
        <PopularItemsRow />
        <ShopsToWatchHeading />
        <ShopsToWatchRow />
        <MoreItemsForYouHeading />
        <MoreItemsForYouRow />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
