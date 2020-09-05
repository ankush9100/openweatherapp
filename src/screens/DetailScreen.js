import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
export default function DetailScreen() {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <TouchableOpacity onPress={()=>navigation.push("DetailScreen")}> 
      <Text>DetailScreen</Text>
      </TouchableOpacity>
    
    </View>
    )
}
