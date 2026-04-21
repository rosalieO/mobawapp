import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Styles } from '../../constants/styles'; 
import { useAnomalies } from '../../context/anomaly_context';
import { AnomaliesList } from '../../components/anomalies_list';

export default function MyAnomalies() {
  const {anomalies} = useAnomalies();

  return (
    <View style={Styles.container}>
      <Text style={Styles.caption}>assigned to you</Text>
      <Text style={Styles.headline}>My Anomalies</Text>
      <AnomaliesList/>
    </View>
  );
}