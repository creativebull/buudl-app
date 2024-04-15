import {SafeAreaProvider} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import { 
  Cart, 
  ProductDetails, 
  Store, 
  SellerShops, 
  Login,
  Register, 
  SellerRegistration,
  SellerRegistrationShopInformation
} from './route';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fonstLoaded] = useFonts({
    regular: require("./assets/fonts/nats-regular.ttf"),
    nunitoitalic: require("./assets/fonts/nunito-italic.ttf"),
    nunitoregular: require("./assets/fonts/nunito-regular.ttf"),
  });

  const onLayoutRootView = useCallback(async() => {
    if(fonstLoaded){
      await SplashScreen.hideAsync();
    }
  }, [fonstLoaded]);

  if(!fonstLoaded){
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Bottom Navigation'
            component={BottomTabNavigation}
            options={{headerShown:false}}
          />
          <Stack.Screen
            name='ProductDetails'
            component={ProductDetails}
            options={{headerShown:false}}
          />
          <Stack.Screen
            name='Store'
            component={Store}
            options={{headerShown:false}}
          />
          <Stack.Screen
            name='SellerShops'
            component={SellerShops}
            options={{headerShown:false}}
          />
          <Stack.Screen
            name='Login'
            component={Login}
            options={{headerShown:false}}
          />
          <Stack.Screen
            name='Register'
            component={Register}
            options={{headerShown:false}}
          />
          <Stack.Screen
            name='Cart'
            component={Cart}
            options={{headerShown:false}}
          />
          <Stack.Screen
            name='SellerRegistration'
            component={SellerRegistration}
            options={{headerShown:false}}
          />
          <Stack.Screen
            name='SellerRegistrationShopInformation'
            component={SellerRegistrationShopInformation}
            options={{headerShown:false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}