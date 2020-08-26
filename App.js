import  React,{useEffect} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen'
import SplashScreen from './src/screens/SplashScreen'
import { Provider } from "react-redux";
import  store  from './src/redux/store'
import combineReducers from './src/redux/mainReducer'
import {createStore} from 'redux'
const Stack = createStackNavigator();

function App() {
  const Routes=()=>(
    <NavigationContainer>
      <Stack.Navigator
       screenOptions={{
        headerShown: false
      }}
      >
         <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
       
      </Stack.Navigator>
    </NavigationContainer>
  )
  return (
   
    <Provider store={store}>
    <Routes/>
    </Provider>
  );
}

export default App;