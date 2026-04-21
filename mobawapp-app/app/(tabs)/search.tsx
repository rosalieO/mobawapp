import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Styles } from '../../constants/styles';
import { DateInput } from '../../components/date_input';
import React, { useState } from 'react';
import SearchList from '../../components/search_list';

export default function Search() {
  const [fromDate, setFromDate] = useState(new Date())
  const [toDate, setToDate] = useState(new Date())
  const [results, setResults] = useState([]); 
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    
    const start = fromDate.toISOString().split('T')[0];
    const end = toDate.toISOString().split('T')[0];
    
    const API_KEY = 'DEMO_KEY'; 
    const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${start}&end_date=${end}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      const formattedData = data.map((item: any) => ({
        id: item.date,           
        name: item.title,      
        description: item.explanation, 
        image: item.url       
      }));
  
      setResults(formattedData); 
    } catch (error) {
      console.error("API Error:", error);
      alert("Fehler beim Abrufen der Daten!");
    } finally {
      setLoading(false); 
    }
  };

  return (
    <View style={Styles.container}>
      <Text style={Styles.caption}>Nasa anomaly monitor</Text>
      <Text style={Styles.headline}>APOD Search</Text>
      <DateInput
        fromDate={fromDate} 
        toDate={toDate} 
        setFromDate={setFromDate} 
        setToDate={setToDate}
      />
      <TouchableOpacity 
        style={Styles.touchable} 
        onPress={handleSearch} 
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={Styles.touchabletext}>Search</Text>
        )}
      </TouchableOpacity>
      <SearchList data={results} />
    </View>
  );
}