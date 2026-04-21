import { View, Text } from 'react-native';
import { Styles } from '../../constants/styles';
import { DateInput } from '../../components/date_input';

export default function Search() {
  return (
    <View style={Styles.container}>
      <Text style={Styles.caption}>Nasa anomaly monitor</Text>
      <Text style={Styles.headline}>APOD Search</Text>
      <DateInput/>
    </View>
  );
}