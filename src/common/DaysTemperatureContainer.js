import React from 'react'
import {View,Text} from 'react-native'
import DaysTemperature from './DaysTemperature'
export default function DaysTemperatureContainer({data}) {
  
    return (
        <View>
           
           {data.map((value,index)=> <DaysTemperature key={index} day={value.day} temperature={value.main.temp_min}/>) }
        </View>
    )
}
