import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Styles } from '../constants/styles';
import { Link } from 'expo-router';
import { Anomaly } from '../context/anomaly_context';

interface AnomalyCardProps {
    item: Anomaly
}

export function AnomalyCard({ item }: AnomalyCardProps) {
    const currentImage = item.image 
      ? (typeof item.image === 'string' ? { uri: item.image } : item.image)
      : require('../assets/anomaly-a.jpg');
    return (
      <Link key={item.id} href={`/anomalies/${item.id}`} asChild>
        <TouchableOpacity style={Styles.anomalycontainer}>
          <Image
            source={currentImage}
            style={[Styles.coverimage, { borderTopLeftRadius: 8, borderTopRightRadius: 8 }]}
            resizeMode='cover'
          />
          <View style={Styles.textcontainer}>
            <Text style={Styles.anomalyname}>{item.name}</Text>
            <Text style={Styles.fadedtext} numberOfLines={2}>
              {item.description}
            </Text>
          </View>
        </TouchableOpacity>
      </Link>
    );
}