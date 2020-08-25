import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
export default function SomethingWrong({retry}) {
    return (
        <View style={styles.container}>
            <Text style={styles.somethingText}>Something went wrong at our end</Text>
            <TouchableOpacity style={styles.retryButton} onPress={retry}>
                <Text style={styles.retryText}>Retry</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        justifyContent:'center',alignItems:'center',flex:1
    },
    somethingText:{
        color:'#ffffff',
        fontSize:20
    },
    retryButton:{
        width:100,
        height:40,
        borderRadius:5,
        marginTop:20,
        backgroundColor:'#ffffff',
        justifyContent:'center',
        alignItems:'center'
    },
    retryText:{
        fontSize:18,
        fontWeight:'bold'
    }
})