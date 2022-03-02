import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import InputBox from '../components/InputBox';
import {X} from 'react-native-feather';

export default function Login({navigation}) {
  const [countryCode, setCountryCode] = useState('+92');
  const [countryCodePopup, setCountryCodePopup] = useState(false);
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
          <Image
            source={require('../assets/logo.png')}
            style={{width: 170, height: 55, marginVertical: 50}}
          />

          <View style={{width: '100%', paddingHorizontal: 20}}>
            <Text
              style={{
                fontSize: 30,
                color: '#111111',
                fontWeight: '500',
                width: '100%',
                marginBottom: 30,
              }}>
              Sign In
            </Text>
            <InputBox
              type="phone"
              placeholder="Phone No"
              countryCode={countryCode}
              onPhone={() => {
                setCountryCodePopup(true);
              }}
            />
            <InputBox placeholder="Password" />
            <TouchableOpacity style={{marginBottom: 30, marginLeft: 'auto'}}>
              <Text style={{color: '#34ABF5', fontWeight: 'bold'}}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Home');
              }}
              style={{
                backgroundColor: '#34ABF5',
                width: '100%',
                height: 45,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
              }}>
              <Text style={{color: '#ffffff'}}>Login</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
      {countryCodePopup ? (
        <CountryPopup
          setCountryCode={setCountryCode}
          onClose={() => setCountryCodePopup(false)}
        />
      ) : null}
    </SafeAreaView>
  );
}

function CountryPopup({setCountryCode, onClose}) {
  const countryList = [
    '+92 Pakistan',
    '+92 Pakistan',
    '+92 Pakistan',
    '+92 Pakistan',
    '+92 Pakistan',
    '+92 Pakistan',
    '+92 Pakistan',
    '+92 Pakistan',
    '+92 Pakistan',
    '+92 Pakistan',
    '+92 Pakistan',
    '+92 Pakistan',
    '+92 Pakistan',
    '+92 Pakistan',
  ];
  return (
    <View
      style={{
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: 'rgba(255,255,255,.5)',
        zIndex: 100,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
      }}>
      <View
        style={{
          backgroundColor: '#ffffff',
          width: '100%',
          padding: 20,
          borderRadius: 10,
          elevation: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: '#242424',
            }}>
            Select Country
          </Text>
          <TouchableOpacity onPress={onClose}>
            <X
              stroke="red"
              fill="#fff"
              width={18}
              height={18}
              strokeWidth={3}
            />
          </TouchableOpacity>
        </View>
        <TextInput
          placeholder="Search"
          placeholderTextColor="#6D6D6D"
          style={{
            borderBottomColor: '#242424',
            color: '#242424',
            borderBottomWidth: 1,
            padding: 0,
            marginVertical: 10,
          }}
        />
        <ScrollView
          style={{
            width: '100%',
            height: 200,
          }}>
          {countryList.map((item, i) => (
            <TouchableOpacity
              key={i}
              onPress={onClose}
              style={{
                marginVertical: 5,
                flexDirection: 'row',
              }}>
              <Image
                style={{
                  width: 25,
                  height: 18,
                  marginRight: 10,
                }}
                source={{
                  uri: 'https://flaglane.com/download/pakistani-flag/pakistani-flag-graphic.png',
                }}
              />
              <Text
                style={{
                  color: '#242424',
                }}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
