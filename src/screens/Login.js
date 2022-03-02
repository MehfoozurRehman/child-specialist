import {View, Text, SafeAreaView, ImageBackground} from 'react-native';
import React from 'react';

export default function Login() {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../assets/loginBg.png')}
        style={{flex: 1}}></ImageBackground>
    </SafeAreaView>
  );
}
