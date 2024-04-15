import { StyleSheet, Text, View, ScrollView, TouchableOpacity, useWindowDimensions } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import globalStyles from "../constants/global.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { MoreItemsForYouRow } from "../components";

const Relevance = () => (
  <View style={globalStyles.sceneContainer}>
      <MoreItemsForYouRow/>
  </View>
);

const Latest = () => (
  <View style={globalStyles.sceneContainer}>
    <MoreItemsForYouRow/>
  </View>
);

const TopSales = () => (
  <View style={globalStyles.sceneContainer}>
    <MoreItemsForYouRow/>
  </View>
);

const Price = () => (
  <View style={globalStyles.sceneContainer}>
    <MoreItemsForYouRow/>
  </View>
);

const Store = ({navigation}) => {
    const insets = useSafeAreaInsets();

    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);

    const [routes] = useState([
      { key: 'relevance', title: 'Relevance' },
      { key: 'latest', title: 'Latest' },
      { key: 'topSales', title: 'Top Sales' },
      { key: 'price', title: 'Price' },
    ]);
  
    const renderScene = SceneMap({
      relevance: Relevance,
      latest: Latest,
      topSales: TopSales,
      price: Price,
    });

    return (
        <View style={globalStyles.storeViewContainer}>
            <View style={globalStyles.goBackContainer}>
                <View style={globalStyles.goBackRow}> 
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Ionicons name="chevron-back" size={30} color={COLORS.secondary}/>
                    </TouchableOpacity>
                    <Text style={globalStyles.productDetailHeader}>Store</Text>
                </View>
            </View>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                showPageIndicator={true}
                style={globalStyles.storeTabView}
                
                renderTabBar={props => <TabBar 
                                            {...props}
                                            style={globalStyles.tabDesign}
                                            labelStyle={globalStyles.tabTextColor}
                                            indicatorStyle={globalStyles.tabIndicatorColor}
                                            activeColor={COLORS.primary}
                                            pressColor={COLORS.secondary}
                                        />} 
            />
        </View>
    )
}

export default Store

const styles = StyleSheet.create({})