import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {Eye, EyeOff} from 'react-native-feather';

export default function InputBox({
  placeholder,
  error,
  type,
  countryCode,
  onPhone,
}) {
  const [focus, setFocus] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(
    placeholder === 'Password' || placeholder === 'Confirm Password',
  );

  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: '#F0F0F0',
        backgroundColor: '#ffffff',
        marginBottom: 15,
        borderRadius: 10,
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 12,
          position: 'absolute',
          width: '100%',
          top: -10,
        }}>
        <Text
          style={{
            color: '#34ABF5',
            backgroundColor: '#ffffff',
            fontWeight: 'bold',
            fontSize: 13,
          }}>
          {focus ? placeholder : ''}
        </Text>
        <Text style={{color: 'red', backgroundColor: '#ffffff', fontSize: 12}}>
          {error}
        </Text>
      </View>
      {type === 'phone' ? (
        <TouchableOpacity
          onPress={onPhone}
          style={{
            width: 50,
            height: 40,
            borderRadius: 0,
            alignItems: 'center',
            justifyContent: 'center',
            borderRightColor: '#F0F0F0',
            borderRightWidth: 2,
          }}>
          <Text style={{color: '#6D6D6D'}}>{countryCode}</Text>
        </TouchableOpacity>
      ) : null}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={focus ? '#ffffff' : '#6D6D6D'}
        style={{color: '#242424', paddingHorizontal: 10, flex: 1}}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
        secureTextEntry={secureTextEntry}
      />
      {placeholder === 'Password' || placeholder === 'Confirm Password' ? (
        <TouchableOpacity
          onPress={() => {
            secureTextEntry
              ? setSecureTextEntry(false)
              : setSecureTextEntry(true);
          }}
          style={{
            width: 40,
            height: 45,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {secureTextEntry ? (
            <Eye
              stroke="#6D6D6D"
              fill="#fff"
              width={18}
              height={18}
              strokeWidth={1.5}
            />
          ) : (
            <EyeOff
              stroke="#6D6D6D"
              fill="#fff"
              width={18}
              height={18}
              strokeWidth={1.5}
            />
          )}
        </TouchableOpacity>
      ) : null}
    </View>
  );
}
