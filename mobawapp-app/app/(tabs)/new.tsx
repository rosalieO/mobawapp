import { View, Text } from 'react-native';
import { Styles } from '../../constants/styles'; 

export default function New() {
  return (
    <View style={Styles.container}>
      <Text style={Styles.headline}>New</Text>
    </View>
  );
}