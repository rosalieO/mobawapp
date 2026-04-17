import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { Styles } from '../../constants/styles'; 
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

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

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert('Permission required', 'Permission to access the media library is required.');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setAnomalyImage(result.assets[0].uri);
    }
  };

  const isFormValid = anomalyName.trim() !== '' && anomalyDescription.trim() !== '' && anomalyImage !== null;

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
        <TouchableOpacity 
          style={[Styles.touchable, , { marginTop: 10 }]} 
          onPress={pickImage} 
        >
          <Text style={Styles.touchabletext}>Add Image</Text>
        </TouchableOpacity>
        {anomalyImage && <Image source={{ uri: anomalyImage }} style={Styles.image} />}
      </View>
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