import { View, Text, TouchableOpacity } from 'react-native';
import { Styles } from '../../constants/styles';
import { DateInput } from '../../components/date_input';

export default function Search() {

  const handleSavePress = (): void => {
    
  };

  return (
    <View style={Styles.container}>
      <Text style={Styles.caption}>Nasa anomaly monitor</Text>
      <Text style={Styles.headline}>APOD Search</Text>
      <DateInput/>
      <TouchableOpacity 
        style={Styles.touchable} 
        onPress={handleSavePress} 
      >
        <Text style={Styles.touchabletext}>Search</Text>
      </TouchableOpacity>
    </View>
  );
}