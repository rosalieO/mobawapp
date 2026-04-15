import { View, Text } from 'react-native';
import { Styles } from '../../constants/styles'; 

export default function MyAnomalies() {
  return (
    <View style={Styles.container}>
      <Text style={Styles.headline}>My Anomalies</Text>
    </View>
  );
}