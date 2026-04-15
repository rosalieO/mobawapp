import React from 'react';
import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { Styles, Colors } from '../../constants/styles'; 

export default function TabsLayout() {
    return (
        <Tabs
          screenOptions={{
          tabBarActiveTintColor: Colors.active,   
          tabBarInactiveTintColor: Colors.inactive, 
          tabBarActiveBackgroundColor: Colors.activeBackground,
          tabBarInactiveBackgroundColor: Colors.inactiveBackground,
        }}
        >
            <Tabs.Screen
              name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) =>
                        <MaterialIcons size={28} name="house" color={color}/>,
                    headerShown: false,
                }}
            />
            <Tabs.Screen
              name="new"
                options={{
                    title: 'New',
                    tabBarIcon: ({ color } : any) =>
                        <MaterialIcons size={28} name="add-circle-outline" color={color} />
                }}
            />
            <Tabs.Screen
              name="my_anomalies"
                options={{
                    title: 'My Anomalies',
                    tabBarIcon: ({ color } : any) =>
                        <MaterialIcons size={28} name="list-alt" color={color} />
                }}
            />
            <Tabs.Screen
              name="search"
                options={{
                    title: 'Search',
                    tabBarIcon: ({ color } : any) =>
                        <MaterialIcons size={28} name="search" color={color} />
                }}
            />
        </Tabs>
    )
}