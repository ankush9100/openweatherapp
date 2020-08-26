import React,{useEffect,useState} from 'react'
import {View,Text,StyleSheet,StatusBar} from 'react-native';
import { useDispatch } from "react-redux";
import Geolocation from '@react-native-community/geolocation';
import { getWeatherData } from '../utils/api/api'
import Loader from '../common/Loader';
import SomethingWrong from '../common/SomethingWrong';
export default function SplashScreen(props) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const dispatch = useDispatch();
    useEffect(()=>{
    getLocation();
    },[])
    const getLocation = async () => {
        setLoading(true)
        Geolocation.getCurrentPosition(async (info) => {
            let result = await getWeatherData(info.coords.latitude, info.coords.longitude);
            // alert(JSON.stringify(result))
            if (result.status == 200) {
                let newValue = result.data;
                dispatch({type:'SAVETEMPERATURE',payload:newValue})
                props.navigation.navigate('Home')
            } else {
                setError(true)
            }
            setLoading(false)
        })
    }
    if(loading){
        return(
            <Loader/>
        )
    }
  
    return (
        <View style={styles.container}>
             <StatusBar backgroundColor="#27295B" barStyle="light-content" />
             {error?<SomethingWrong retry={getLocation} />:<Loader/>}
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#27295B'
    },
})