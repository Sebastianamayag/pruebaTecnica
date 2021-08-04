import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { UsuariosScreen } from './src/screens/UsuariosScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <UsuariosScreen />
      </PaperProvider>
    </SafeAreaProvider>
  );
}

