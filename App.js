import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import BottomTabNavigation from "./navigation/BottomTabNavigation";
import {
  Cart,
  ProductDetails,
  Store,
  SellerShops,
  Login,
  Register,
  SellerRegistration,
  SellerRegistrationShopInformation,
  SellerVerificationPage1,
  SellerVerificationPage2,
  SellerVerificationPage3,
  SellerVerificationPage4,
  SellerVerificationPage5,
  Notification,
  OfferDetails,
  MessageDetails,
  Checkout,
  ShippingOptions,
  Address,
  SetUpAddress,
  NewAddress,
  PaymentScreen,
  PaymentSuccess,
} from "./route";
import { MyFlashMessage } from "./components/message";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fonstLoaded] = useFonts({
    regular: require("./assets/fonts/nats-regular.ttf"),
    nunitoitalic: require("./assets/fonts/nunito-italic.ttf"),
    nunitoregular: require("./assets/fonts/nunito-regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fonstLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fonstLoaded]);

  if (!fonstLoaded) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <MyFlashMessage />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Bottom Navigation"
            component={BottomTabNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetails}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Checkout"
            component={Checkout}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OfferDetails"
            component={OfferDetails}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MessageDetails"
            component={MessageDetails}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Notification"
            component={Notification}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Store"
            component={Store}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SellerShops"
            component={SellerShops}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SellerRegistration"
            component={SellerRegistration}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SellerRegistrationShopInformation"
            component={SellerRegistrationShopInformation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SellerVerificationPage1"
            component={SellerVerificationPage1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SellerVerificationPage2"
            component={SellerVerificationPage2}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SellerVerificationPage3"
            component={SellerVerificationPage3}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SellerVerificationPage4"
            component={SellerVerificationPage4}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SellerVerificationPage5"
            component={SellerVerificationPage5}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ShippingOption"
            component={ShippingOptions}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Address"
            component={Address}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SetUpAddress"
            component={SetUpAddress}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PaymentScreen"
            component={PaymentScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PaymentSuccess"
            component={PaymentSuccess}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NewAddress"
            component={NewAddress}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
