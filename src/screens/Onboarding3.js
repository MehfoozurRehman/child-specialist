import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Svg, {Rect, Circle} from 'react-native-svg';

export default function Onboarding3({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/onboarding3Bg.png')}
        style={{flex: 1, alignItems: 'center'}}>
        <ImageBackground
          source={require('../assets/onboarding3Illustration.png')}
          style={{
            flex: 1,
            width: '100%',
            maxHeight: '62%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 20,
            }}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={48}
              height={8}
              viewBox="0 0 48 8">
              <Rect
                data-name="Rectangle 1799"
                width={28}
                height={8}
                rx={4}
                transform="translate(20)"
                fill="#fff"
              />
              <Circle
                data-name="Ellipse 149"
                cx={4}
                cy={4}
                r={4}
                fill="#fff"
                opacity={0.47}
              />
              <Circle
                data-name="Ellipse 150"
                cx={4}
                cy={4}
                r={4}
                transform="translate(10)"
                fill="#fff"
                opacity={0.47}
              />
            </Svg>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: 16,
                  textDecorationColor: '#ffffff',
                  textDecorationLine: 'underline',
                }}>
                Skip
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <View style={{width: '100%', padding: 20, alignItems: 'center'}}>
          <Text
            style={{
              color: '#060606',
              fontSize: 20,
              fontWeight: 'bold',
              marginVertical: 10,
            }}>
            Heading
          </Text>
          <Text
            style={{
              color: '#A4A4A4',
              fontSize: 14,
              textAlign: 'center',
              width: '90%',
              marginBottom: 20,
            }}>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs.
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}
            style={{
              backgroundColor: '#F5C32F',
              width: '100%',
              height: 45,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
            }}>
            <Text style={{color: '#ffffff'}}>Next</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
