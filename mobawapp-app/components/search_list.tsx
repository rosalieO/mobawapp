import { ScrollView, Text } from 'react-native';
import { Styles } from '../constants/styles';
import { SearchCard } from './search_card';
import { Anomaly } from '../context/anomaly_context';

interface SearchListProps {
  data: Anomaly[]; 
}

export default function SearchList({ data }: SearchListProps) {
  return (
    <ScrollView>
      {data.length === 0 ? (
        <Text style={Styles.fadedtext}>
          Choose a date range and start your search!
        </Text>
      ) : (
        data.map((item) => (
          <SearchCard key={item.id} item={item} />
        ))
      )}
    </ScrollView>
  );
}