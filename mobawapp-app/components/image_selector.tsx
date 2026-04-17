import React from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Styles } from '../constants/styles';

interface ImageSelectorProps {
  image: string | null;
  onImagePicked: (uri: string) => void;
}

export const ImageSelector = ({ image, onImagePicked }: ImageSelectorProps) => {
  const pickImage = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!granted) {
      Alert.alert('Berechtigung fehlt', 'Wir brauchen Zugriff auf deine Fotos.');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      onImagePicked(result.assets[0].uri);
    }
  };

  return (
    <View style={Styles.inputcontainer}>
      <Text style={Styles.subheadline}>Image</Text>
      <TouchableOpacity style={[Styles.touchable, { marginTop: 10 }]} onPress={pickImage}>
        <Text style={Styles.touchabletext}>{image ? "Change Image" : "Add Image"}</Text>
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={Styles.image} />}
    </View>
  );
};