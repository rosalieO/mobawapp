import { View, Text, Image } from 'react-native';
import { Styles } from '../../../constants/styles';
import { useLocalSearchParams, Stack } from 'expo-router';
import { Anomaly } from '../../../context/anomaly_context';

interface SearchCardProps {
    item: Anomaly
}

export default function SearchResultsDetailPage({ item }: SearchCardProps) {
  const currentImage = item.image 
      ? (typeof item.image === 'string' ? { uri: item.image } : item.image)
      : require('../../../assets/anomaly-a.jpg');

  if (!item) return <Text style={Styles.error}>Anomaly not found °~°</Text>;
  return (
    <View style={Styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Text style={Styles.subheadline}>{item.id}</Text>
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
    </View>
  );
}