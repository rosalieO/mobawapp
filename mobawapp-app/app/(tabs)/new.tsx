import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { Styles } from '../../constants/styles'; 
import React, { useState } from 'react';
import { CustomInput } from '../../components/custom_input';
import { ImageSelector } from '../../components/image_selector';

interface Anomaly {
  name: string;
  description: string;
  image: string | null;
}

export default function New() {
  const [anomalyName, setAnomalyName] = useState<string>('');
  const [anomalyDescription, setAnomalyDescription] = useState<string>('');
  const [anomalyImage, setAnomalyImage] = useState<string | null>(null);
  const [anomalies, setAnomalies] = useState<Anomaly[]>([]);

  const addAnomaly = (): void => {
    if (anomalyName.trim() !== '' && anomalyDescription.trim() !== '' && anomalyImage !== null) {
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

  const isFormValid = anomalyName.trim() !== '' && anomalyDescription.trim() !== '' && anomalyImage !== null;

  return (
    <View style={Styles.container}>
      <Text style={Styles.caption}>create a report</Text>
      <Text style={Styles.headline}>New Anomaly</Text>
      <CustomInput
        label="Name"
        value={anomalyName}
        onChangeText={setAnomalyName}
        placeholder='Give your anomaly a name...'
        multiline={false}
      />
      <CustomInput
        label="Description"
        value={anomalyDescription}
        onChangeText={setAnomalyDescription}
        placeholder='Describe your new anomaly...'
        multiline={true}
        height={150}
      />
      <ImageSelector 
        image={anomalyImage} 
        onImagePicked={setAnomalyImage} 
      />
      <TouchableOpacity 
        style={[Styles.touchable, {backgroundColor: isFormValid ? 'pink' : '#cacaca'}]} 
        onPress={addAnomaly} 
        disabled={!isFormValid}
      >
        <Text style={Styles.touchabletext}>Save Anomaly</Text>
      </TouchableOpacity>
    </View>
  );
}