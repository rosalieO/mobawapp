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
  try {
    const start = fromDate.toISOString().split('T')[0];
    const end = toDate.toISOString().split('T')[0];
    const API_KEY = process.env.EXPO_PUBLIC_NASA_API_KEY || 'DEMO_KEY';
    const BASE_URL = process.env.EXPO_PUBLIC_NASA_BASE_URL;

    const url = `${BASE_URL}?api_key=${API_KEY}&start_date=${start}&end_date=${end}`;
    console.log("Sended request to url:", url);

    const response = await fetch(url);
    const responseText = await response.text();
    
    if (!responseText || responseText.trim() === "") {
      throw new Error("Empty Server Response");
    }

    const data = JSON.parse(responseText);

    if (!response.ok) {
      alert("NASA Error: " + (data.msg || "request dismissed"));
      return;
    }

    if (Array.isArray(data)) {
      const formattedData = data.map((item: any) => ({
        id: item.date,
        name: item.title,
        description: item.explanation,
        image: item.url
      }));
      setResults(formattedData);
    } else {
      setResults([{
        id: data.date,
        name: data.title,
        description: data.explanation,
        image: data.url
      }]);
    }

  } catch (error: any) {
    console.error("Error Details:", error);
    alert("Error: " + (error.message.includes("Unexpected character: u") 
      ? "NASA didn't send any data (limit?)." 
      : error.message));
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