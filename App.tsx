// src/App.tsx
import React from 'react';
import { FilterProvider } from './src/context/FilterContext';
import AppNavigator from './src/navigation/AppNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex:1}}>
    <FilterProvider>
      <AppNavigator />
    </FilterProvider>
    </GestureHandlerRootView>
  );
};

export default App;
