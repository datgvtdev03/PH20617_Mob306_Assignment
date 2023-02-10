import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../Home/HomeScreen';
import InforScreen from '../Infor/InforScreen';
import ManagerScreen from '../Manager/ManagerScreen';
import LoginScreen from '../Login/LoginScreen';
import SplashScreen from '../Splash/SplashScreen';
import HomeTab from './HomeTab';


//Screen names
const splashName = 'splash';
const loginName = 'Đăng nhập';
const homeName = "Home";
const inforName = "Infor";
const managerName = "Manager1";
const homeTabName = "HomeTab";

const Stack = createNativeStackNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={splashName} screenOptions={{headerShown: false}}>
        <Stack.Screen name={splashName} component={SplashScreen}/>
        <Stack.Screen name={loginName} component={LoginScreen}/>
        <Stack.Screen name={homeName} component={HomeScreen}/>
        <Stack.Screen name={inforName} component={InforScreen}/>
        <Stack.Screen name={managerName} component={ManagerScreen}/>
        <Stack.Screen name={homeTabName} component={HomeTab}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;