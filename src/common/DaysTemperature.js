import React,{useEffect} from 'react'
import {View,Text,StyleSheet,Dimensions} from 'react-native';
const {width,height} = Dimensions.get('window')
export default function DaysTemperature({day,temperature}) {


       
    return (
        <View style={styles.container}>
         <Text style={styles.dayText}>{day}</Text>   
         <Text style={styles.dayText}>{temperature}</Text>   
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        width:width,
        paddingLeft:20,
        paddingRight:20,
        paddingTop:20,
        paddingBottom:20,
        // borderBottomWidth:1,
        borderTopWidth:1,
        borderColor:'#ffffff'
    },
    dayText:{
        color:'#ffffff',
        fontSize:16,
        fontWeight:'500'
    }
})