import { View, Text } from 'react-native';
import { styles } from '../../constants/styles'; 

export default function MyAnomalies() {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>My Anomalies</Text>
    </View>
  );
}