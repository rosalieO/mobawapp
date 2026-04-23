import { View, TouchableOpacity, Share, Alert } from 'react-native';
import { Styles } from '../constants/styles';
import { Anomaly } from '../context/anomaly_context';
import { MaterialIcons } from '@expo/vector-icons';

interface ShareAnomalyProps {
    item: Anomaly
}

export function ShareAnomaly({item}: ShareAnomalyProps) {

    const onShare = async () => {
      try {
        const result = await Share.share({
          message: `I've got the prettiest anomaly:3: ${item.name}\nDatum: ${item.id}\nBild: ${item.image}`,
          title: 'NASA ANOMALY MONITOR', 
        });
    
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
          } else {
          }
        } else if (result.action === Share.dismissedAction) {
        }
      } catch (error: any) {
        Alert.alert(error.message);
      }
    };
    
    return (
        <View style={Styles.bottomrightcontainer}>
          <TouchableOpacity 
                style={Styles.sharebutton}
                onPress={onShare}
              >
                <MaterialIcons size={30} name="share" color='black' />
          </TouchableOpacity> 
        </View>
    )
}