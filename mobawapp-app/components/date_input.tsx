import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Styles } from '../constants/styles'; 
import DateTimePicker from '@react-native-community/datetimepicker';

export function DateInput() {
    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());
    const [show, setShow] = useState<'from' | 'to' | null>(null);

    const onFromChange = (event: any, selectedDate?: Date) => {
        setShow(null);
        if (selectedDate) {
            setFromDate(selectedDate);
        }
    };

    const onToChange = (event: any, selectedDate?: Date) => {
        setShow(null);
        if (selectedDate) {
            setToDate(selectedDate);
        }
    };

    return (
        <View style={Styles.fromtocontainer}>
          <View style={Styles.datecontainer}>
              <Text style={Styles.subheadline}>From</Text>
  
              <TouchableOpacity
                style={Styles.datetouchable}
                onPress={() => setShow('from')}
              >
                  <Text style={Styles.datetouchabletext}>{fromDate.toLocaleDateString('en-EN')}</Text>
              </TouchableOpacity>
  
              {show === 'from' && (
                  <DateTimePicker
                    value={fromDate}
                    mode="date"
                    display="default"
                    onChange={onFromChange}
                  />
              )}
          </View>
          <View style={Styles.datecontainer}>
              <Text style={Styles.subheadline}>To</Text>
  
              <TouchableOpacity
                style={Styles.datetouchable}
                onPress={() => setShow('to')}
              >
                  <Text style={Styles.datetouchabletext}>{toDate.toLocaleDateString('en-EN')}</Text>
              </TouchableOpacity>
  
              {show === 'to' && (
                  <DateTimePicker
                    value={toDate}
                    mode="date"
                    display="default"
                    onChange={onToChange}
                  />
              )}
          </View>
        </View>
    )
}