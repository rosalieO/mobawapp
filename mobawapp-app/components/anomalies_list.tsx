import { Text, ScrollView } from 'react-native';
import { Styles } from '../constants/styles'; 
import { useAnomalies } from '../context/anomaly_context';
import { AnomalyCard } from '../components/anomaly_card'

export function AnomaliesList() {
  const { anomalies } = useAnomalies();

  return (
    <ScrollView>
      {anomalies.length === 0 && (
        <Text style={Styles.fadedtext}>No anomalies reported yet.</Text>
      )}
      {anomalies.map((item) => (
        <AnomalyCard key={item.id} item={item} />
      ))}
    </ScrollView>
  );
}