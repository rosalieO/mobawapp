import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Styles } from '../../../constants/styles';
import { Stack } from 'expo-router';
import { useAnomalies } from '../../../context/anomaly_context';
import { useLocalSearchParams } from 'expo-router';
import { CardHeader } from '../../../components/card_header';

export default function SearchResultsDetailPage() {
  const { addAnomaly } = useAnomalies();
  const { id, name, description, image } = useLocalSearchParams();
  const idString = id as string;

  if (!id) return <Text style={Styles.error}>Entry not found °~°</Text>;

  const handleSavePress = () => {
    const newEntry = {
      id: id as string,
      name: name as string,
      description: description as string,
      image: image as string,
    };
  
    addAnomaly(newEntry);
    
    alert("saved succesfully!");
  };

  const currentImage = image 
      ? (typeof image === 'string' ? { uri: image } : image)
      : require('../../../assets/anomaly-a.jpg');


  return (
    <View style={Styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <CardHeader id={idString} />
      <ScrollView>
        {currentImage ? (
          <Image 
            source={currentImage} 
            style={Styles.image} 
            resizeMode='cover'
          />
        ) : (
          <View style={[Styles.image, { backgroundColor: '#333', justifyContent: 'center', alignItems: 'center' }]}>
            <Text style={{ color: 'white' }}>no image available</Text>
          </View>
        )}
        <Text style={Styles.headline}>{name}</Text>
        <Text style={Styles.text}>
          {description}
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