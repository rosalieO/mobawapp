import { View, Text, TouchableOpacity } from 'react-native';
import { Styles } from '../constants/styles';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

interface CardHeaderProps {
    id: string
}

export function CardHeader({ id }: CardHeaderProps) {
    const router = useRouter();
    return (
        <View style={Styles.headercontainer}>
            <Text style={Styles.subheadline}>{id}</Text>
            <TouchableOpacity 
              style={Styles.exitbutton}
              onPress={() => router.back()}
            >
              <MaterialIcons size={25} name="close" color='#cacaca' />
            </TouchableOpacity>  
        </View>
    )
}