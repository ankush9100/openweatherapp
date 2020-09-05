import  React,{useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const MainTabScreen = () =>(
    <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor:'red',
        
                tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Detail"
      component={DetailStackScreen}
      options={{
        tabBarLabel: 'Detail',
        tabBarColor:{color:'#000000'},
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="bell" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
)
export default MainTabScreen;
const HomeStackScreen = ({navigation})=>(
  <HomeStack.Navigator
  screenOptions={{
    headerStyle:{
      backgroundColor:'#009387'
    },
    headerTintColor:'#fff',
    headerTitleStyle:{
      fontWeight:'bold'
    }
  }}
  >
    <HomeStack.Screen name="Home" component={HomeScreen}>

    </HomeStack.Screen>
  </HomeStack.Navigator>
)
const DetailStackScreen = ({navigation})=>(
  <DetailStack.Navigator
  screenOptions={{
    headerStyle:{
      backgroundColor:'#009387'
    },
    headerTintColor:'#fff',
    headerTitleStyle:{
      fontWeight:'bold'
    }
  }}
  >
    <DetailStack.Screen name="Detail" component={DetailScreen}>

    </DetailStack.Screen>
  </DetailStack.Navigator>
)
