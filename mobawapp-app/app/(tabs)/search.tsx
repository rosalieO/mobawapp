import { View, Text, TouchableOpacity } from 'react-native';
import { Styles } from '../../constants/styles';
import { DateInput } from '../../components/date_input';
import React, { useState } from 'react';

export default function Search() {
  const [fromDate, setFromDate] = useState(new Date())
  const [toDate, setToDate] = useState(new Date())

  const handleSavePress = (): void => {
    
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
        onPress={handleSavePress} 
      >
        <Text style={Styles.touchabletext}>Search</Text>
      </TouchableOpacity>
    </View>
  );
}