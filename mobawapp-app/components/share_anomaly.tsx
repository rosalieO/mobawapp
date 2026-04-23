import * as Sharing from 'expo-sharing';
import { Share, View, TouchableOpacity, Alert } from 'react-native';
import { Styles } from '../constants/styles';
import { MaterialIcons } from '@expo/vector-icons';
import { Anomaly } from '../context/anomaly_context';

interface ShareAnomalyProps {
    item: Anomaly
}

export function ShareAnomaly({ item }: ShareAnomalyProps) {

    const onShare = async () => {
      try {
        if (!item.image) {
          Alert.alert("Info", "no image available");
          return;
        }
    
        if (item.image.includes('http')) {
          await Share.share({
            message: `NASA Anomaly: ${item.name}\n\nImage: ${item.image}`,
          });
          return;
        }

        const isAvailable = await Sharing.isAvailableAsync();
        
        if (isAvailable) {
          let cleanUri = item.image;
          
          if (cleanUri.includes(' ')) {
            cleanUri = encodeURI(cleanUri);
          }
    
          await Sharing.shareAsync(cleanUri);
        } else {
          await Share.share({
            message: `Anomaly: ${item.name}\n(Lokal gespeichertes Bild)`,
          });
        }
    
      } catch (error: any) {
        console.error(error);
        Alert.alert("Sharing Error", "this type of image cannot be shared currently!");
      }
    };

    return (
        <View style={Styles.bottomrightcontainer}>
            <TouchableOpacity style={Styles.sharebutton} onPress={onShare}>
                <MaterialIcons size={30} name="share" color='black' />
            </TouchableOpacity>
        </View>
    );
}