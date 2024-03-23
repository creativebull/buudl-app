import { ScrollView } from "react-native";
import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import AppBar from "../navigation/AppBarNavigation";
import { LandingPage } from "../components";
import { HomeCarousel } from "../components";

const Home = () => {

    return (
        <SafeAreaView>
            <AppBar/>
            <ScrollView>
                <LandingPage/>
                <HomeCarousel/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home