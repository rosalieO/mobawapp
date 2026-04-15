import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Styles } from '../../constants/styles'; 
import React, { useState } from 'react';

interface Anomaly {
  name: string;
  description: string;
  image: string;
}

export default function New() {
  const [anomalyName, setAnomalyName] = useState<string>('');
  const [anomalyDescription, setAnomalyDescription] = useState<string>('');
  const [anomalyImage, setAnomalyImage] = useState<string>('');
  const [anomalies, setAnomalies] = useState<Anomaly[]>([]);

  const addAnomaly = (): void => {
    if (anomalyName.trim() !== '' && anomalyDescription.trim() !== '') {
      const newAnomaly: Anomaly = {
        name: anomalyName,
        description: anomalyDescription,
        image: anomalyImage
      };
      setAnomalies([...anomalies, newAnomaly]);
      setAnomalyName('');
      setAnomalyDescription('');
    }
  };

  return (
    <View style={Styles.container}>
      <Text style={Styles.caption}>create a report</Text>
      <Text style={Styles.headline}>New Anomaly</Text>
      <View style={Styles.inputcontainer}>
        <Text style={Styles.subheadline}>Name</Text>
        <TextInput
          style={Styles.textInput}
          value={anomalyName}
          onChangeText={setAnomalyName}
          placeholder="Give your anomaly a name..."
          placeholderTextColor="#666666"
        />
      </View >
      <View style={Styles.inputcontainer}>
        <Text style={Styles.subheadline}>Description</Text>
        <TextInput
          style={[Styles.textInput, { height: 150 }]}
          value={anomalyDescription}
          onChangeText={setAnomalyDescription}
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
      <TouchableOpacity 
        style={Styles.touchable} 
        onPress={() => console.log('Anomaly saved!')}>
        <Text style={Styles.touchabletext}>Save Anomaly</Text>
      </TouchableOpacity>
    </View>
  );
}