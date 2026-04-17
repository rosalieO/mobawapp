import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Styles } from '../constants/styles'; 

interface CustomInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  multiline?: boolean;
  height?: number;
}

export const CustomInput = ({ label, value, onChangeText, placeholder, multiline, height }: CustomInputProps) => (
  <View style={Styles.inputcontainer}>
    <Text style={Styles.subheadline}>{label}</Text>
    <TextInput
      style={[Styles.textInput, height ? { height } : {}]}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor="#666666"
      multiline={multiline}
      textAlignVertical={multiline ? "top" : "center"}
    />
  </View>
);