import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import globalStyles from "../../constants/global.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/index";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CenteredAlert from "../../partials/CenteredAlert";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import axios from "axios";

const UserProfilePage = () => {
  const apiUrl = process.env.API_URL;
  const navigation = useNavigation();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [buttonLabel, setButtonLabel] = useState("");
  const [onPressAction, setOnPressAction] = useState(() => {});
  const [userData, setUserData] = useState([]);

  const Likes = () => (
    <View style={globalStyles.userSceneContainer}>
      <Text>This is LIKES</Text>
    </View>
  );

  const Purchases = () => (
    <View style={globalStyles.userSceneContainer}>
      <Text>This is Purchases</Text>
    </View>
  );
  const Selling = () => (
    <View style={globalStyles.userSceneContainer}>
      <Text>This is Purchases</Text>
    </View>
  );

  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: "likes", title: "Likes" },
    { key: "purchases", title: "Purchases" },
  ]);

  const renderScene = SceneMap({
    likes: Likes,
    purchases: Purchases,
  });

  useEffect(() => {
    // getUserLogin();
    getUserData();
  }, []);

  const getUserLogin = async () => {
    try {
      // AsyncStorage.removeItem('token');
      const token = await AsyncStorage.getItem("token");
      console.log("this is your token ", token);
      if (!token) {
        // If not logged in, redirect to Login page
        navigation.navigate("Login");
        return; // Exit the function
      }
    } catch (error) {
      console.error("Failed to check login status:", error);
    }
  };

  const userLogout = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      await AsyncStorage.removeItem("token");
      const response = await axios.post(
        apiUrl + "auth/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setShowAlert(true);
      setButtonLabel("Login");
      setOnPressAction(() => () => {
        setShowAlert(false);
        navigation.navigate("Login");
      });
      setAlertMessage("Logout Successfull");
    } catch (error) {
      console.log("Failed to logout due to : ", error);
    }
  };
  const getUserData = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        // Fetch cart count from backend API
        const response = await axios.get(apiUrl + "auth/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data.data);
        setUserData(response.data.data);
      }else{
        navigation.navigate("Login")
      }
    } catch (error) {
      console.log("Failed to load bag data due to : ", error);
    }
  };
  return (
    <View>
      {showAlert && (
        <CenteredAlert
          message={alertMessage}
          onClose={() => setShowAlert(false)}
          buttonOnPress={onPressAction}
          buttonLabel={buttonLabel}
        />
      )}
      <View style={globalStyles.storeViewContainer}>
        <View style={globalStyles.userInfoContainer}>
          <View>
            <View style={globalStyles.profilePic}></View>
            <View style={globalStyles.userName}>
              <Text style={globalStyles.userTextName}>{userData.username}</Text>
            </View>
          </View>
          <View style={globalStyles.userFollowing}>
            <Text style={globalStyles.userFollowingCounter}>123</Text>
            <Text style={globalStyles.followingSubtext}>Following</Text>
            <TouchableOpacity
              style={globalStyles.editProfileButton}
              onPress={() => {}}
            >
              <Text style={globalStyles.editProfileText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
          <View style={globalStyles.userFollowers}>
            <Text style={globalStyles.userFollowersCounter}>123</Text>
            <Text style={globalStyles.followersSubtext}>Followers</Text>
            <TouchableOpacity
              style={globalStyles.shareProfileButton}
              onPress={() => {}}
            >
              <Text style={globalStyles.shareProfileText}>Share Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          showPageIndicator={true}
          style={globalStyles.userTabView}
          renderTabBar={(props) => (
            <TabBar
              {...props}
              style={globalStyles.tabDesign}
              labelStyle={globalStyles.tabTextColor}
              indicatorStyle={globalStyles.tabIndicatorColor}
              activeColor={COLORS.primary}
              pressColor={COLORS.secondary}
            />
          )}
        />
      </View>
    </View>
  );
};

export default UserProfilePage;
