import { View, Text, TextInput } from 'react-native';
import { Styles } from '../../constants/styles'; 
import React, { useState } from 'react';

interface NewAnomaly {
  name: string;
  description: string;
  image: string;
}

export default function New() {
  const [newAnomalyName, setNewAnomalyName] = useState<string>('');
  const [newAnomalyDescription, setNewAnomalyDescription] = useState<string>('');
  const [newAnomalyImage, setNewAnomalyImage] = useState<string>('');

  return (
    <View style={Styles.container}>
      <Text style={Styles.caption}>create a report</Text>
      <Text style={Styles.headline}>New Anomaly</Text>
      <View style={Styles.inputcontainer}>
        <Text style={Styles.subheadline}>Name</Text>
        <TextInput
          style={Styles.textInput}
          value={newAnomalyName}
          onChangeText={setNewAnomalyName}
          placeholder="Give your anomaly a name..."
          placeholderTextColor="#666666"
        />
      </View >
      <View style={Styles.inputcontainer}>
        <Text style={Styles.subheadline}>Description</Text>
        <TextInput
          style={[Styles.textInput, { height: 150 }]}
          value={newAnomalyDescription}
          onChangeText={setNewAnomalyDescription}
          placeholder="Describe your new anomaly..."
          placeholderTextColor="#666666"
          multiline={true}         
          numberOfLines={20}         
          textAlignVertical="top"
        />
      </View>
      <View style={Styles.inputcontainer}>
        <Text style={Styles.subheadline}>Image</Text>
      </View>
    </View>
  );
}