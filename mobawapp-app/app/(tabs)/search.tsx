import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Styles } from '../../constants/styles';
import { DateInput } from '../../components/date_input';
import React, { useState } from 'react';
import SearchList from '../../components/search_list';
import { Anomaly } from '../../context/anomaly_context';

export default function Search() {
  const [fromDate, setFromDate] = useState(new Date())
  const [toDate, setToDate] = useState(new Date())
  const [results, setResults] = useState<Anomaly[]>([]); 
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    
    const start = fromDate.toISOString().split('T')[0];
    const end = toDate.toISOString().split('T')[0];
    const API_KEY = process.env.EXPO_PUBLIC_NASA_API_KEY;
    const BASE_URL = process.env.EXPO_PUBLIC_NASA_BASE_URL;

    const url = `${BASE_URL}?api_key=${API_KEY}&start_date=${start}&end_date=${end}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json(); 
  
      if (!response.ok) {
        console.log("NASA Detail-Fehler:", data);
        alert("NASA sagt: " + (data.msg || data.error?.message || "Ungültige Anfrage"));
        setLoading(false);
        return;
      }
  
      const formattedData = data.map((item: any) => ({
        id: item.date,
        name: item.title,
        description: item.explanation,
        image: item.url
      }));
      setResults(formattedData);
    } catch (error: any) {
      console.error("Netzwerk/System Fehler:", error);
      alert("Ein Fehler ist aufgetreten: " + error.message);
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