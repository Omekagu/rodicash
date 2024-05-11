import React from 'react';
import { Image, Text, View } from 'react-native';
import CustomBtn from '../../components/Button/CustomBtn';

const SplashScreen = () => {
  return (
    <View
      style={{
        backgroundColor: '#D0981B',
        height: '100%',
        justifyContent: 'flex-end',
        paddingVertical: 50,
        paddingHorizontal: 20,
      }}
    >
      <Image />
      <View>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#fff',
            marginBottom: 30,
          }}
        >
          The easiest way to withdraw cash
        </Text>

        <Text
          style={{
            fontSize: 19,
            textAlign: 'center',
            color: '#fff',
            marginBottom: 30,
          }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum,
          dolor sit amet
        </Text>
      </View>
      <CustomBtn text={'Create Account'} />
      <CustomBtn text={'login'} />
    </View>
  );
};

export default SplashScreen;
