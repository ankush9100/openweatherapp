import  React,{useEffect} from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './src/screens/HomeScreen'
import SplashScreen from './src/screens/SplashScreen'
import { Provider } from "react-redux";
import  store  from './src/redux/store'
import MainTabScreen from './src/screens/MainTabScreen';
import DrawerContent from './src/screens/DrawerContent'
const Drawer = createDrawerNavigator()
function App() {
  const Routes=()=>(
    <NavigationContainer>
      <Drawer.Navigator drawerContent = {props=><DrawerContent {...props}/>}>
        <Drawer.Screen name="Home" component={MainTabScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
  return (
   
    <Provider store={store}>
    <Routes/>
    </Provider>
  );
}

export default App;