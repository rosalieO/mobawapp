import { Link } from 'expo-router';
import { ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { styles } from '../constants/styles';

const anomalies = [
    { id: 'anomaly-a', name: 'Some Name', image: require('../assets/anomaly-a.jpg')},
    { id: 'anomaly-b', name: 'Some Other Name', image: require('../assets/anomaly-b.jpg')},
    { id: 'anomaly-c', name: 'Some Weird Name', image: require('../assets/anomaly-c.jpg')}
];

export default function Home() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.headline}>
                Home
            </Text>
            <Text style={styles.subheadline}>
                Eine kurze Beschreibung der App.
            </Text>
            {anomalies.map(anomalies => (
              <Link key={anomalies.id} href={`/anomaly_monitor/${anomalies.id}`} asChild>
                  <TouchableOpacity style={styles.touchable}>
                      <Image
                        source={anomalies.image}
                        resizeMode="contain"
                      />
                      <Text style={styles.anomalyname}>
                          {anomalies.name}
                      </Text>
                  </TouchableOpacity>
              </Link>
            ))}
        </ScrollView>
    )
}
