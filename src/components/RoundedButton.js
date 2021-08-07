import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125, 
  ...props
}) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles(size).radius, styles]}>
        <Text style={[styles(size).text, textStyle]}>
            {props.title}
        </Text>
    </TouchableOpacity>
  );
};

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      textAlign: 'center',
      borderColor: '#fff',
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: { color: '#fff', fontSize: size / 5 },
  });
