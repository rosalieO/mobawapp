import { View, Text, Image } from 'react-native';
import { Styles } from '../../../constants/styles';
import { useAnomalies } from '../../../context/anomaly_context';
import { useLocalSearchParams, Stack } from 'expo-router';
import { CardHeader } from '../../../components/card_header';
import { ShareAnomaly } from '../../../components/share_anomaly';

export default function AnomalyDetailPage() {
  const { id } = useLocalSearchParams();
  const { getAnomalyById } = useAnomalies();
  const anomaly = getAnomalyById(id as string);
  const idString = id as string;

  if (anomaly === undefined || anomaly === null) {
    return (
      <View style={Styles.container}>
        <Text style={Styles.error}>Anomaly not found °~°</Text>
      </View>
    );
  }

  const imageSource = typeof anomaly.image === 'string' 
  ? { uri: anomaly.image } 
  : anomaly.image;

  return (
    <View style={Styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <CardHeader id={idString} />
      {imageSource ? (
        <Image 
          source={imageSource} 
          style={Styles.image} 
          resizeMode='cover'
        />
      ) : (
        <View style={[Styles.image, { backgroundColor: '#333', justifyContent: 'center', alignItems: 'center' }]}>
          <Text style={{ color: 'white' }}>no image available</Text>
        </View>
      )}
      <Text style={Styles.headline}>{anomaly.name}</Text>
      <Text style={Styles.text}>
        {anomaly.description}
      </Text>
      <ShareAnomaly item={anomaly} />
    </View>
  );
}