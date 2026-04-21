import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Styles } from '../../../constants/styles';
import { Stack } from 'expo-router';
import { Anomaly } from '../../../context/anomaly_context';
import { useAnomalies } from '../../../context/anomaly_context';
import { useLocalSearchParams } from 'expo-router';

interface SearchCardProps {
    item: Anomaly
}

export default function SearchResultsDetailPage({ item }: SearchCardProps) {
  const { addAnomaly } = useAnomalies();

  const { id, name, description, image } = useLocalSearchParams();

  const handleSavePress = () => {
    const newEntry = {
      id: id as string,
      name: name as string,
      description: description as string,
      image: image as string,
    };
  
    addAnomaly(newEntry);
    
    alert("Erfolgreich gespeichert!");
  };

  const currentImage = item.image 
      ? (typeof item.image === 'string' ? { uri: item.image } : item.image)
      : require('../../../assets/anomaly-a.jpg');

  if (!item) return <Text style={Styles.error}>Anomaly not found °~°</Text>;
  return (
    <View style={Styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Text style={Styles.subheadline}>{item.id}</Text>
      <ScrollView>
        {currentImage ? (
          <Image 
            source={currentImage} 
            style={Styles.image} 
            resizeMode='cover'
          />
        ) : (
          <View style={[Styles.image, { backgroundColor: '#333', justifyContent: 'center', alignItems: 'center' }]}>
            <Text style={{ color: 'white' }}>Kein Bild vorhanden</Text>
          </View>
        )}
        <Text style={Styles.headline}>{item.name}</Text>
        <Text style={Styles.text}>
          {item.description}
        </Text>
      </ScrollView>
      <TouchableOpacity 
        style={Styles.touchable}
        onPress={handleSavePress}
      >
        <Text style={Styles.touchabletext}>Save to My Anomalies</Text>
      </TouchableOpacity>
    </View>
  );
}