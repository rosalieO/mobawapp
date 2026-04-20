import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Styles } from '../../constants/styles'; 
import { useAnomalies } from '../../context/anomaly_context';
import { Link } from 'expo-router';

export default function MyAnomalies() {
  const {anomalies} = useAnomalies();

  return (
    <View style={Styles.container}>
      <Text style={Styles.caption}>assigned to you</Text>
      <Text style={Styles.headline}>My Anomalies</Text>
      <ScrollView>
        {anomalies.length === 0 && (
          <Text style={Styles.fadedtext}>No anomalies reported yet.</Text>
        )}
        {anomalies.map((item) => {
          const currentImage = item.image 
            ? (typeof item.image === 'string' ? { uri: item.image } : item.image)
            : require('../../assets/anomaly-a.jpg');
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
        })}
      </ScrollView>
    </View>
  );
}