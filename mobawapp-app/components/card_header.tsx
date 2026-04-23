import { View, Text, TouchableOpacity } from 'react-native';
import { Styles } from '../constants/styles';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

interface CardHeaderProps {
    id: string
}

export function CardHeader({ id }: CardHeaderProps) {
    const router = useRouter();

    const getDisplayDate = (id: string) => {
      const nasaFormatRegex = /^\d{4}-\d{2}-\d{2}$/;
    
      if (nasaFormatRegex.test(id)) {
        return id; 
      }
    
      const timestamp = parseInt(id);
      if (!isNaN(timestamp)) {
        const date = new Date(timestamp);
        return date.toISOString().split('T')[0];
      }
    
      return id; 
    };

    return (
        <View style={Styles.headercontainer}>
            <Text style={Styles.subheadline}>{getDisplayDate(id)}</Text>
            <TouchableOpacity 
              style={Styles.exitbutton}
              onPress={() => router.back()}
            >
              <MaterialIcons size={25} name="close" color='#cacaca' />
            </TouchableOpacity>  
        </View>
    )
}