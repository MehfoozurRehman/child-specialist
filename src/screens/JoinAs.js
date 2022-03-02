import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {ArrowLeft, X} from 'react-native-feather';
import Svg, {Path, G} from 'react-native-svg';

export default function JoinAs({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <ImageBackground
          source={require('../assets/loginBg.png')}
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              paddingHorizontal: 20,
              marginVertical: 20,
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <ArrowLeft
                stroke="#6D6D6D"
                fill="#fff"
                width={25}
                height={25}
                strokeWidth={1.5}
              />
            </TouchableOpacity>
            <Image
              source={require('../assets/logo.png')}
              style={{width: 100, height: 35}}
            />
          </View>
          <View style={{width: '100%', paddingHorizontal: 20, marginTop: 50}}>
            <Text
              style={{
                fontSize: 20,
                color: '#111111',
                fontWeight: '500',
                width: '100%',
                marginBottom: 30,
                textAlign: 'center',
              }}>
              Join As
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignUp');
              }}
              style={{
                backgroundColor: '#F9F9F9',
                padding: 20,
                borderRadius: 10,
                borderWidth: 2,
                borderColor: '#2EC5B6',
                alignItems: 'center',
              }}>
              <Svg
                data-name={921130}
                xmlns="http://www.w3.org/2000/svg"
                width={105.545}
                height={136.329}
                viewBox="0 0 105.545 136.329">
                <Path
                  data-name="Path 2544"
                  d="M153.882 348.562l-23.175-6.816H90.452l-23.175 6.816a13.193 13.193 0 00-9.47 12.657v19.263a6.6 6.6 0 006.6 6.6h92.352a6.6 6.6 0 006.6-6.6v-19.263a13.193 13.193 0 00-9.477-12.657z"
                  transform="translate(-57.807 -250.75)"
                  fill="#30abf5"
                />
                <Path
                  data-name="Path 2545"
                  d="M224.58 390.816h-21.988l-4.4-43.977h30.784z"
                  transform="translate(-160.813 -254.487)"
                  fill="#a5cdff"
                />
                <Path
                  data-name="Path 2546"
                  d="M198.194 346.839l.658 6.582a19.724 19.724 0 0029.468 0l.658-6.582z"
                  transform="translate(-160.813 -254.487)"
                  fill="#8cb4eb"
                />
                <Path
                  data-name="Path 2547"
                  d="M213.585 295.042a15.392 15.392 0 01-15.392-15.392v-15.392h30.784v15.392a15.392 15.392 0 01-15.392 15.392z"
                  transform="translate(-160.813 -193.895)"
                  fill="#f7d291"
                />
                <Path
                  data-name="Path 2548"
                  d="M198.194 273.561a32.4 32.4 0 0030.784 0v-9.3h-30.784z"
                  transform="translate(-160.813 -193.895)"
                  fill="#f0c382"
                />
                <Path
                  data-name="Path 2549"
                  d="M188.737 96.311h-1.1V74.323h-57.17v21.989h-1.1a5.5 5.5 0 100 10.994h1.21a28.557 28.557 0 0056.948 0h1.21a5.5 5.5 0 000-10.994z"
                  transform="translate(-106.28 -54.533)"
                  fill="#ffe1a0"
                />
                <G data-name="Group 532" fill="#6e5a64">
                  <Path
                    data-name="Path 2550"
                    d="M200.393 164.218a2.2 2.2 0 01-2.2-2.2v-2.2a2.2 2.2 0 114.4 0v2.2a2.2 2.2 0 01-2.2 2.2z"
                    transform="translate(37.381 41.969) translate(-198.194 -157.621)"
                  />
                  <Path
                    data-name="Path 2551"
                    d="M299.489 164.218a2.2 2.2 0 01-2.2-2.2v-2.2a2.2 2.2 0 114.4 0v2.2a2.2 2.2 0 01-2.2 2.2z"
                    transform="translate(37.381 41.969) translate(-270.904 -157.621)"
                  />
                </G>
                <G data-name="Group 533" fill="#a06e50">
                  <Path
                    data-name="Path 2552"
                    d="M196.533 136.527h-4.4a2.2 2.2 0 010-4.4h4.4a2.2 2.2 0 010 4.4z"
                    transform="translate(35.182 35.182) translate(-189.936 -132.129)"
                  />
                  <Path
                    data-name="Path 2553"
                    d="M295.629 136.527h-4.4a2.2 2.2 0 010-4.4h4.4a2.2 2.2 0 010 4.4z"
                    transform="translate(35.182 35.182) translate(-262.646 -132.129)"
                  />
                </G>
                <Path
                  data-name="Path 2554"
                  d="M130.468 74.323v21.989h-.906a5.624 5.624 0 00-5.49 4 5.515 5.515 0 005.3 6.99h1.21a28.383 28.383 0 0032.886 26.016 28.567 28.567 0 01-24.2-28.215V91.745a8.9 8.9 0 019.5-8.94c1.44.119 2.952.182 4.541.182a84.5 84.5 0 0021.161-3.025 14.766 14.766 0 008.2-5.639z"
                  transform="translate(-106.28 -54.533)"
                  fill="#f7d291"
                />
                <Path
                  data-name="Path 2555"
                  d="M147.245 41.248l.275 8.8s-6.6 6.6-6.6 15.392v2.714a4.4 4.4 0 01-3.852 4.364l-4.943.618V54.441c.003-7.286 6.875-13.559 15.12-13.193z"
                  transform="translate(-112.339 -30.254)"
                  fill="#a06e50"
                />
                <Path
                  data-name="Path 2556"
                  d="M282.344 333.554l-4.355-4.355 4.661-6.215a2.692 2.692 0 00-.95-4.024l-10.308-5.154L256 366.579h13.193l13.975-27.949a4.4 4.4 0 00-.824-5.076z"
                  transform="translate(-203.228 -230.25)"
                  fill="#fefefe"
                />
                <Path
                  data-name="Path 2557"
                  d="M376.548 443.175h-3.3v-3.3a2.2 2.2 0 00-4.4 0v3.3h-3.3a2.2 2.2 0 000 4.4h3.3v3.3a2.2 2.2 0 004.4 0v-3.3h3.3a2.2 2.2 0 100-4.4z"
                  transform="translate(-281.997 -321.138)"
                  fill="#a5cdff"
                />
                <Path
                  data-name="Path 2558"
                  d="M322.339 16.474l-.275 15.392s6.6 6.6 6.6 15.392v2.714a4.4 4.4 0 003.852 4.364l4.943.618V29.667c-.003-7.286-6.874-13.559-15.12-13.193z"
                  transform="translate(-251.701 -12.076)"
                  fill="#cd916e"
                />
                <Path
                  data-name="Path 2559"
                  d="M231.763 221.306a11.767 11.767 0 01-8.141-2.832 2.2 2.2 0 013.088-3.131 8.937 8.937 0 0010.105 0 2.2 2.2 0 013.088 3.131 11.765 11.765 0 01-8.14 2.832z"
                  transform="translate(-178.99 -157.539)"
                  fill="#e3aa75"
                />
                <Path
                  data-name="Path 2560"
                  d="M153.513 333.554l4.355-4.355-4.661-6.215a2.692 2.692 0 01.95-4.024l10.308-5.154 15.392 52.773h-13.193l-13.975-27.949a4.4 4.4 0 01.824-5.076z"
                  transform="translate(-127.085 -230.25)"
                  fill="#fefefe"
                />
                <Path
                  data-name="Path 2561"
                  d="M169.8 0c-18.345 0-21.861 5.577-35.987 10.076a1.539 1.539 0 00-.859 2.292c3.065 4.795 14.475 17.293 46.889 8.806a10.272 10.272 0 007.484-7.9c.891-4.458-1.818-8.872-5.891-10.891A27.08 27.08 0 00169.8 0z"
                  transform="translate(-112.771)"
                  fill="#b67f5f"
                />
                <Path
                  data-name="Path 2562"
                  d="M118.886 475.645h-17.591a2.2 2.2 0 01-2.2-2.2v-8.8a2.2 2.2 0 012.2-2.2h17.591a2.2 2.2 0 012.2 2.2v8.8a2.2 2.2 0 01-2.2 2.2z"
                  transform="translate(-88.102 -339.316)"
                  fill="#a5cdff"
                />
                <Path
                  data-name="Path 2563"
                  d="M134.328 448.672a2.2 2.2 0 01-2.2-2.2v-6.6a2.2 2.2 0 014.4 0v6.6a2.2 2.2 0 01-2.2 2.2z"
                  transform="translate(-112.339 -321.138)"
                  fill="#fff"
                />
                <Path
                  data-name="Path 2564"
                  d="M118.886 489.425h-17.591a2.2 2.2 0 01-2.2-2.2v4.4a2.2 2.2 0 002.2 2.2h17.591a2.2 2.2 0 002.2-2.2v-4.4a2.2 2.2 0 01-2.2 2.2z"
                  transform="translate(-88.102 -357.493)"
                  fill="#8cb4eb"
                />
              </Svg>
              <Text
                style={{
                  color: '#030303',
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginTop: 10,
                }}>
                Doctor
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignUp');
              }}
              style={{
                backgroundColor: '#F9F9F9',
                padding: 20,
                borderRadius: 10,
                borderWidth: 2,
                borderColor: '#F5C32F',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Svg
                data-name={3359100}
                xmlns="http://www.w3.org/2000/svg"
                width={136.721}
                height={136.721}
                viewBox="0 0 136.721 136.721">
                <Path
                  data-name="Path 2565"
                  d="M32.764 75.012H19.947a5.7 5.7 0 110-11.393h12.817a5.7 5.7 0 005.7-5.7V15.2a5.7 5.7 0 0111.393 0v42.722a17.111 17.111 0 01-17.093 17.09z"
                  transform="translate(66.928 44.619)"
                  fill="#f5c32f"
                />
                <Path
                  data-name="Path 2566"
                  d="M86.875 61.574H4.273A4.274 4.274 0 010 57.3V37.363A21.392 21.392 0 0121.363 16h48.422a21.392 21.392 0 0121.362 21.363V57.3a4.274 4.274 0 01-4.272 4.274z"
                  transform="translate(0 75.147)"
                  fill="#ea891b"
                />
                <Path
                  data-name="Path 2567"
                  d="M54.713 16.3c-14.184.337-19.881-8.55-19.881-8.55-10.254 9.57-26.376 9.115-31.275 8.716L3.5 17.719a25.635 25.635 0 1051.27 0z"
                  transform="translate(16.438 36.399)"
                  fill="#ffcc80"
                />
                <Path
                  data-name="Path 2568"
                  d="M29.088 5A25.612 25.612 0 003.51 29.382c4.9.4 21.021.855 31.275-8.716 0 0 5.7 8.887 19.881 8.545A25.663 25.663 0 0029.088 5z"
                  transform="translate(16.485 23.483)"
                  fill="#607d8b"
                />
                <Path
                  data-name="Path 2569"
                  d="M45.574 16H21.363A21.392 21.392 0 000 37.363V57.3a4.274 4.274 0 004.273 4.273h41.3z"
                  transform="translate(0 75.147)"
                  fill="#f6a951"
                />
                <Path
                  data-name="Path 2570"
                  d="M29.135 8.467c-7.172 3.925-15.438 4.762-20.924 4.8h-.382c-1.76 0-3.213-.08-4.21-.16a.255.255 0 00-.063-.006L3.5 14.352a25.674 25.674 0 0025.635 25.635z"
                  transform="translate(16.438 39.767)"
                  fill="#deb26f"
                />
                <Path
                  data-name="Path 2571"
                  d="M29.088 5A25.612 25.612 0 003.51 29.382c.023 0 .04.006.063.006 1 .08 2.45.16 4.21.16h.382c5.486-.034 13.752-.872 20.924-4.8z"
                  transform="translate(16.485 23.483)"
                  fill="#546d79"
                />
                <Path
                  data-name="Path 2572"
                  d="M40.635 62.664A25.666 25.666 0 0115 37.029V9.969A9.98 9.98 0 0124.969 0H56.3a9.98 9.98 0 019.97 9.969v27.06a25.666 25.666 0 01-25.635 25.635z"
                  transform="translate(70.451)"
                  fill="#eceff1"
                />
                <Path
                  data-name="Path 2573"
                  d="M39.787 11.045h-2.849V8.2a5.7 5.7 0 10-11.393 0v2.848H22.7a5.7 5.7 0 100 11.393h2.848v2.848a5.7 5.7 0 1011.393 0v-2.851h2.848a5.7 5.7 0 000-11.393z"
                  transform="translate(79.844 11.742)"
                  fill="#f44336"
                />
                <Path
                  data-name="Path 2574"
                  d="M40.635 0H24.969A9.98 9.98 0 0015 9.969v27.06a25.666 25.666 0 0025.635 25.635V42.725a5.7 5.7 0 01-5.7-5.7V34.18H32.09a5.7 5.7 0 010-11.393h2.848v-2.849a5.7 5.7 0 015.7-5.7z"
                  transform="translate(70.451)"
                  fill="#cdd0d2"
                />
                <Path
                  data-name="Path 2575"
                  d="M31.242 2.5a5.7 5.7 0 00-5.7 5.7v2.848H22.7a5.7 5.7 0 100 11.393h2.848v2.848a5.7 5.7 0 005.7 5.7z"
                  transform="translate(79.844 11.742)"
                  fill="#d43a2f"
                />
              </Svg>
              <Text
                style={{
                  color: '#030303',
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginTop: 10,
                }}>
                Patient
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}
