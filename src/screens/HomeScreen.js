// import React, { useEffect, useState } from 'react'
// import { View, Text, StyleSheet, StatusBar } from 'react-native';
// import LocationComponent from '../common/LocationComponent'
// import DaysTemperatureContainer from '../common/DaysTemperatureContainer'
// import Geolocation from '@react-native-community/geolocation';
// import { getWeatherData } from '../utils/api/api'
// import Loader from '../common/Loader';

// import { useStore, useDispatch } from "react-redux";
// import {saveTemperatureData} from '../redux/temperatureAction'

// export default function HomeScreen() {
//     const store = useStore();
//     const {temperatureReducer} = store.getState()
//     const [data, setData] = useState([]);
//     const [city, setCity] = useState("");
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(false);
//     const [storeData,setStoreData] = useState(temperatureReducer.data)
//     const dispatch = useDispatch();
//     useEffect(() => {
//         getLocation();
//     },[storeData])

//     //Convert date to day name
//     const getTravelDateFormatted = (str) => {
//         const daysNames = ['Sunday', 'Monday', 'Tueday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
//             d = new Date(str),
//             dayName = daysNames[d.getDay()];
//         return dayName
//     }
//     //get the data from redux store
//     const getLocation = async () => {
//         setCity(storeData.city.name)
//         let value = [];
//                 for (let i = 0; i < storeData.list.length; i += 8) {
//                     let vals = storeData.list[i];
//                     let date = new Date();
//                     vals.day = getTravelDateFormatted(date.setDate(date.getDate() + i))
//                     value.push(storeData.list[i])
//                 }
//                 setData(value)
//     }
//     return (
//         <View style={styles.container}>
//             <StatusBar backgroundColor="#27295B" barStyle="light-content" />
//                     <View style={styles.locationContainer}>
//                         <LocationComponent temp={data[0]?data[0].main?data[0].main.temp_min:'10':'10'} state={city} />
//                     </View>
//                     <DaysTemperatureContainer data={data} />
//                 </View>
        
        
//     )
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         backgroundColor: '#27295B'
//     },
//     locationContainer: {
//         flex: 2, marginTop: 50
//     }
// })


import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
export default function HomeScreen() {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <TouchableOpacity onPress={()=>navigation.push("DetailScreen")}> 
      <Text>HomeScreen</Text>
      </TouchableOpacity>
    
    </View>
    )
}
