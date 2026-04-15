import { View, Text } from 'react-native';
import { Styles } from '../../constants/styles'; 

export default function Home() {
  return (
    <View style={Styles.container}>
      <Text style={Styles.headline}>Home</Text>
    </View>
  );
}