import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {Bell, Search} from 'react-native-feather';
import Svg, {G, Path} from 'react-native-svg';

export default function HomeDoctor({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/homeDoctorBg.png')}
        style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Notification');
            }}>
            <Bell
              stroke="#fff"
              fill="#fff"
              width={30}
              height={30}
              strokeWidth={1.5}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Profile');
            }}>
            <Image
              source={require('../assets/userPic.png')}
              style={{width: 50, height: 50}}
            />
          </TouchableOpacity>
        </View>
        <View style={{paddingHorizontal: 20}}>
          <Text style={{color: '#ffffff', fontSize: 25, fontWeight: 'bold'}}>
            Hi Ahsan!
          </Text>
          <Text style={{color: '#ffffff', fontSize: 14}}>
            Let's Find a doctor
          </Text>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#ffffff',
            paddingVertical: 12,
            paddingHorizontal: 15,
            justifyContent: 'space-between',
            margin: 20,
            borderRadius: 5,
            elevation: 5,
          }}>
          <Text style={{color: '#1B3860', fontSize: 16}}>
            Search Doctors Here
          </Text>
          <Search
            stroke="#1B3860"
            fill="#ffffff"
            width={20}
            height={20}
            strokeWidth={1.5}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#F9F9F9',
            marginHorizontal: 20,
            padding: 20,
            borderRadius: 10,
          }}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={29.33}
            height={31.348}
            viewBox="0 0 29.33 31.348">
            <G data-name={3306537} fill="#f5c32f">
              <Path
                data-name="Path 6"
                d="M77.415.976a.976.976 0 00-1.951 0v1.105h1.951z"
                transform="translate(-15.511) translate(-56.054)"
              />
              <Path
                data-name="Path 7"
                d="M197.49.976a.976.976 0 00-1.951 0v1.105h1.951z"
                transform="translate(-15.511) translate(-168.319)"
              />
              <Path
                data-name="Path 8"
                d="M317.39.976a.976.976 0 00-1.951 0v1.105h1.951z"
                transform="translate(-15.511) translate(-280.421)"
              />
              <Path
                data-name="Path 9"
                d="M40.876 32.976A.976.976 0 0039.9 32h-2.931v2.077a.976.976 0 11-1.951 0V32h-5.847v2.077a.976.976 0 11-1.951 0V32h-5.859v2.077a.976.976 0 11-1.951 0V32h-2.923a.976.976 0 00-.976.976v5.463h25.365z"
                transform="translate(-15.511) translate(0 -29.919)"
              />
              <Path
                data-name="Path 10"
                d="M29.712 177.91h-2.5a.976.976 0 110-1.951h2.066a8.885 8.885 0 01.014-1.951h-2.079a.976.976 0 110-1.951h2.545a8.788 8.788 0 0111.118-5.309V161H15.511v19.836a.976.976 0 00.976.976H32.42a8.81 8.81 0 01-2.708-3.9zm3.355-13.659h1.958a.976.976 0 110 1.951h-1.958a.976.976 0 110-1.951zm-5.853 0h1.958a.976.976 0 110 1.951h-1.959a.976.976 0 110-1.951zm0 3.9h1.958a.976.976 0 110 1.951h-1.959a.976.976 0 110-1.951zm-3.9 9.752h-1.958a.976.976 0 010-1.951h1.958a.976.976 0 010 1.951zm0-3.9H21.36a.976.976 0 110-1.951h1.958a.976.976 0 110 1.951zm0-3.9H21.36a.976.976 0 110-1.951h1.958a.976.976 0 110 1.951z"
                transform="translate(-15.511) translate(0 -150.529)"
              />
              <Path
                data-name="Path 11"
                d="M263.318 272a6.829 6.829 0 106.829 6.829 6.837 6.837 0 00-6.829-6.829zm1.626 7.414a.976.976 0 01-.976.976h-2.988a.976.976 0 110-1.951h2.013v-2.927a.976.976 0 111.951 0z"
                transform="translate(-15.511) translate(-225.305 -254.31)"
              />
            </G>
          </Svg>
          <View style={{flex: 1, marginLeft: 10}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{color: '#1B3860', fontSize: 12, fontWeight: 'bold'}}>
                Your Scheduled Appointment
              </Text>
              <Text
                style={{color: '#F5C32F', fontSize: 12, fontWeight: 'bold'}}>
                Mon
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{color: '#1B3860', fontSize: 16, fontWeight: 'bold'}}>
                Dr. Aliza
              </Text>
              <Text
                style={{color: '#F5C32F', fontSize: 16, fontWeight: 'bold'}}>
                10pm
              </Text>
            </View>
          </View>
        </View>
        <Text>Top Doctors</Text>
      </ImageBackground>
    </SafeAreaView>
  );
}
