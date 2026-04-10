import { View, Text } from 'react-native';
import { styles } from '../../../constants/styles';
import { AnomalyProvider, useAnomalies } from '../../../context/anomaly_context';
import { useLocalSearchParams } from 'expo-router';

export default function AnomalyDetailPage() {
  const { id } = useLocalSearchParams();
  const { getAnomalyById } = useAnomalies();
  const anomaly = getAnomalyById(id as string);

  if (!anomaly) return <Text style={styles.error}>Anomaly not found °~°</Text>;
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Anomaly Name</Text>
    </View>
  );
}