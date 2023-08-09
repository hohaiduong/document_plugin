import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import HomeScreen from './home';
import FilterScreen from './filter';
import PDFScreen from './pdf';

const Stack = createNativeStackNavigator();

export default function Navigatior() {
  return (

    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Filter" component={FilterScreen} />
      <Stack.Screen name="PDF" component={PDFScreen} />
    </Stack.Navigator>

  );
}
