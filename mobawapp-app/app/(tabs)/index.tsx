import { View, Text } from 'react-native';
import { styles } from '../../constants/styles'; 

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Home</Text>
    </View>
  );
}