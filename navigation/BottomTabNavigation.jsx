import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Profile, Search, Notification, AccountManagement, Message } from '../route';
import { Ionicons } from "@expo/vector-icons"
import { COLORS } from "../constants/index";

const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarShowLavel: false,
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 70
    }
}

const BottomTabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen 
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({focused})=> {
                        return <Ionicons name={focused ? "home" : "home-outline"} 
                                        size={24}
                                        color={focused ? COLORS.primary : COLORS.grey2}
                                        />
                    }
                }}
            />
            <Tab.Screen 
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({focused})=> {
                        return <Ionicons name={"search-sharp"} 
                                        size={24}
                                        color={focused ? COLORS.primary : COLORS.grey2}
                                        />
                    }
                }}
            />
            <Tab.Screen 
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({focused})=> {
                        return <Ionicons name={focused ? "person" : "person-outline"} 
                                        size={24}
                                        color={focused ? COLORS.primary : COLORS.grey2}
                                        />
                    }
                }}
            />
            <Tab.Screen 
                name="Message"
                component={Message}
                options={{
                    tabBarIcon: ({focused})=> {
                        return <Ionicons name={focused ? "mail" : "mail-outline"} 
                                        size={24}
                                        color={focused ? COLORS.primary : COLORS.grey2}
                                        />
                    }
                }}
            />
            <Tab.Screen 
                name="AccountManagement"
                component={AccountManagement}
                options={{
                    tabBarIcon: ({focused})=> {
                        return <Ionicons name={focused ? "apps" : "apps-outline"}
                                        size={24}
                                        color={focused ? COLORS.primary : COLORS.grey2}
                                        />
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation