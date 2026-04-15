import { View, Text, Image } from 'react-native';
import { Styles } from '../../constants/styles'; 

export default function Home() {
  return (
    <View style={Styles.container}>
      <Image 
        source={require('../../assets/anomaly-a.jpg')}
        style={Styles.image} 
        resizeMode='cover'
      />
      <Text style={Styles.subheadline}>Nasa anomaly monitor</Text>
      <Text style={Styles.headline}>Home</Text>
      <Text style={Styles.text}>
        Review the mission status, recent activity, and the most important anomaly alerst in one place.
      </Text>
    </View>
  );
}