import { Link } from 'expo-router';
import { ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import { Styles } from '../constants/styles';

const anomalies = [
    { id: 'anomaly-a', name: 'Some Name', image: require('../assets/anomaly-a.jpg')},
    { id: 'anomaly-b', name: 'Some Other Name', image: require('../assets/anomaly-b.jpg')},
    { id: 'anomaly-c', name: 'Some Weird Name', image: require('../assets/anomaly-c.jpg')}
];

export default function Home() {
    return (
        <ScrollView contentContainerStyle={Styles.container}>
            <Text style={Styles.headline}>
                Home
            </Text>
            <Text style={Styles.subheadline}>
                Eine kurze Beschreibung der App.
            </Text>
            {anomalies.map(anomalies => (
              <Link key={anomalies.id} href={`/anomaly_monitor/${anomalies.id}`} asChild>
                  <TouchableOpacity style={Styles.touchable}>
                      <Image
                        source={anomalies.image}
                        resizeMode="contain"
                      />
                      <Text style={Styles.anomalyname}>
                          {anomalies.name}
                      </Text>
                  </TouchableOpacity>
              </Link>
            ))}
        </ScrollView>
    )
}
