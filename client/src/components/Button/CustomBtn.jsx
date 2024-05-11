import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const CustomBtn = ({ text }) => {
  return (
    <TouchableOpacity
      style={{
        width: '100%',
        padding: 20,
        // flex: 1,
        backgroundColor: 'white',
        // height: 100,
        position: 'bottom',
        borderRadius: 10,
        alignSelf: 'center',

        marginBottom: 10,
      }}
    >
      <Text
        style={{
          textTransform: 'uppercase',
          color: 'black',
          alignSelf: 'center',
          fontSize: 15,
          fontWeight: 'bold',
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomBtn;
