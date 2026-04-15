import { View, Text, ScrollView, Image } from 'react-native';
import { Styles } from '../../constants/styles'; 

export default function MyAnomalies() {
  return (
    <View style={Styles.container}>
      <Text style={Styles.caption}>assigned to you</Text>
      <Text style={Styles.headline}>My Anomalies</Text>
      <ScrollView>
        <View style={Styles.anomalycontainer}>
          <Image
            source={require('../../assets/anomaly-a.jpg')}
            style={Styles.coverimage} 
            resizeMode='cover' 
          />
          <View style={Styles.textcontainer}>
            <Text style={Styles.anomalyname}>Name</Text>
            <Text style={Styles.fadedtext}>Description</Text>
          </View>
        </View>
        <View style={Styles.anomalycontainer}>
          <Image
            source={require('../../assets/anomaly-a.jpg')}
            style={Styles.coverimage} 
            resizeMode='cover' 
          />
          <View style={Styles.textcontainer}>
            <Text style={Styles.anomalyname}>Name</Text>
            <Text style={Styles.fadedtext}>Description</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}