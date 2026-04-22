import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Styles } from '../constants/styles';
import { Link } from 'expo-router';
import { Anomaly } from '../context/anomaly_context';

interface SearchCardProps {
    item: Anomaly
}

export function SearchCard({ item }: SearchCardProps) {
    const currentImage = item.image 
      ? (typeof item.image === 'string' ? { uri: item.image } : item.image)
      : require('../assets/anomaly-a.jpg');
    return (
      <Link 
        key={item.id} 
        href={{
          pathname: `/search_results/${item.id}`,
          params: {
            id: item.id,
            name: item.name,
            description: item.description,
            image: item.image
          }
        }} 
        asChild
      >
        <TouchableOpacity style={Styles.searchcontainer}>
          <Image
            source={currentImage}
            style={[Styles.searchimage, { borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }]}
            resizeMode='cover'
          />
          <View style={Styles.searchtextcontainer}>
            <Text style={Styles.datetext}>{item.id}</Text>
            <Text style={Styles.searchname}>{item.name}</Text>
            <Text style={Styles.fadedtext} numberOfLines={2}>
              {item.description}
            </Text>
          </View>
        </TouchableOpacity>
      </Link>
    );
}