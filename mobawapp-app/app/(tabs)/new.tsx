import { Text, TouchableOpacity, ScrollView } from 'react-native';
import { Styles } from '../../constants/styles'; 
import React, { useState } from 'react';
import { CustomInput } from '../../components/custom_input';
import { ImageSelector } from '../../components/image_selector';
import { useAnomalies } from '../../context/anomaly_context';

interface Anomaly {
  id: string;
  name: string;
  description: string;
  image: string | null;
}

export default function New() {
  const { addAnomaly } = useAnomalies();

  const [anomalyName, setAnomalyName] = useState<string>('');
  const [anomalyDescription, setAnomalyDescription] = useState<string>('');
  const [anomalyImage, setAnomalyImage] = useState<string | null>(null);

  const handleSavePress = (): void => {
    if (anomalyName.trim() !== '' && anomalyDescription.trim() !== '' && anomalyImage !== null) {
      const newEntry: Anomaly = {
        id: Date.now().toString(),
        name: anomalyName,
        description: anomalyDescription,
        image: anomalyImage
      };

      addAnomaly(newEntry);

      setAnomalyName('');
      setAnomalyDescription('');
      setAnomalyImage(null);

      alert("saved successfully!");
    }
  };

  const isFormValid = anomalyName.trim() !== '' && anomalyDescription.trim() !== '' && anomalyImage !== null;

  return (
    <ScrollView style={Styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
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
        onPress={handleSavePress} 
        disabled={!isFormValid}
      >
        <Text style={Styles.touchabletext}>Save Anomaly</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}