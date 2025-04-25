import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import AppNavigator from './assets/src/navigation/AppNavigator';

export default function App() {
  return (
    <PaperProvider>
      <AppNavigator />
    </PaperProvider>
  );
}