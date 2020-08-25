import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
export default function LocationComponent({temp,state}) {
    return (
        <View style={styles.container}>
            <Text style={styles.tempText}>{temp}</Text>
            <Text style={styles.stateText}>{state}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
    //  flex:1,
     alignItems:'center'
    },
    tempText:{
        fontSize:40,
        fontWeight:'bold',
        color:'#ffffff'
    },
    stateText:{
        fontSize:20,
        color:'#ffffff'
    }
})