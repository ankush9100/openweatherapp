import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import LocationComponent from '../common/LocationComponent'
import DaysTemperatureContainer from '../common/DaysTemperatureContainer'
import Geolocation from '@react-native-community/geolocation';
import { getWeatherData } from '../utils/api/api'
import Loader from '../common/Loader';
import SomethingWrong from '../common/SomethingWrong';
import { useStore, useDispatch } from "react-redux";
import {saveTemperatureData} from '../redux/temperatureAction'

export default function HomeScreen() {
    const store = useStore();
    const [data, setData] = useState([]);
    const [city, setCity] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [storeData,setStoreData] = useState(store.getState())
    const dispatch = useDispatch();
    useEffect(() => {
        getLocation();
        // alert(JSON.stringify(storeData))
    },[storeData])
    const getTravelDateFormatted = (str) => {
        const daysNames = ['Sunday', 'Monday', 'Tueday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            d = new Date(str),
            dayName = daysNames[d.getDay()];
        return dayName
    }
    const getLocation = async () => {
        setLoading(true)
        Geolocation.getCurrentPosition(async (info) => {
            let result = await getWeatherData(info.coords.latitude, info.coords.longitude);
            if (result.status == 200) {
                let newValue = result.data.list;
                dispatch({type:'SAVETEMPERATURE',payload:newValue})
                setCity(result.data.city.name)
                let value = [];
                for (let i = 0; i < newValue.length; i += 8) {
                    let vals = result.data.list[i];
                    let date = new Date();
                    vals.day = getTravelDateFormatted(date.setDate(date.getDate() + i))
                    value.push(result.data.list[i])
                    
                }
                setData(value)
            } else {
               
                setError(true)
            }
            setLoading(false)

        })

    }
    if (loading) {
        return (
            <Loader />
        )
    }
    return (
        <View style={styles.container}>

            <StatusBar backgroundColor="#27295B" barStyle="light-content" />
            {error ?
                <SomethingWrong retry={getLocation} /> :
                <View>
                    <View style={styles.locationContainer}>
                        <LocationComponent temp={data[0]?data[0].main?data[0].main.temp_min:'10':'10'} state={city} />
                    </View>
                    <DaysTemperatureContainer data={data} />
                </View>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#27295B'
    },
    locationContainer: {
        flex: 2, marginTop: 50
    }
})

