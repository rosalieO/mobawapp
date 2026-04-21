// components/search_list.tsx
import { ScrollView, Text } from 'react-native';
import { Styles } from '../constants/styles';
import { SearchCard } from './search_card';

interface ApiResult {
  id: string;
  name: string;
  description: string;
  image: string;
}

interface SearchListProps {
  data: ApiResult[]; 
}

export default function SearchList({ data }: SearchListProps) {
  return (
    <ScrollView>
      {data.length === 0 ? (
        <Text style={Styles.fadedtext}>
          Keine Ergebnisse. Wähle ein Datum und starte die Suche!
        </Text>
      ) : (
        data.map((item) => (
          <SearchCard key={item.id} item={item} />
        ))
      )}
    </ScrollView>
  );
}