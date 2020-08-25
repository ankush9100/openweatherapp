import React, { useRef,useEffect } from 'react';
import { Text, TouchableOpacity, View, StyleSheet,Dimensions,StatusBar } from 'react-native';
const {width} = Dimensions.get('window')
import LottieView from 'lottie-react-native';
import animationData from '../assets/lottie/splash-loader.json'
const Loader = () => {
  const animation = useRef(null);
useEffect(()=>{
  animation.current.play();
})
  return (
    <View style={styles.container}>
       <StatusBar backgroundColor="#27295B" barStyle="light-content" />
      <LottieView ref={animation} 
      source={animationData} 
      loop={true} 
      style={{
        width: 120,
        height: 120
      }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#27295B'
  },
});
export default Loader